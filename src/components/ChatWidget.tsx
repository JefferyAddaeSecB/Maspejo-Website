import { useState, useRef, useEffect, useCallback } from 'react';
import OpenAI from 'openai';
import { MessageSquare, X, Send, RotateCcw, ChevronDown, Sparkles } from 'lucide-react';
import { MASPEJO_SYSTEM_PROMPT } from '../lib/maspejoPrompt';
import styles from './ChatWidget.module.css';

// ── Types ──────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  streaming?: boolean;
}

// ── OpenAI client — lazy singleton so a missing key never crashes the page ──
let _openai: OpenAI | null = null;
function getOpenAI(): OpenAI {
  if (!_openai) {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY as string | undefined;
    if (!apiKey) throw new Error('OPENAI_API_KEY is not configured. Add VITE_OPENAI_API_KEY to your environment variables.');
    _openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
  }
  return _openai;
}

// ── Suggested starter questions ────────────────────────────────────────────
const SUGGESTIONS = [
  'What services does Maspejo offer?',
  'Tell me about recent projects',
  'How do I get a quote?',
  'What are your certifications?',
  'How long does a project take?',
  'Where are your offices?',
];

// ── Helpers ────────────────────────────────────────────────────────────────
function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function formatTime(d: Date) {
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ── Markdown-lite renderer (bold, bullets, line breaks) ────────────────────
function renderMarkdown(text: string) {
  // Convert **bold** → <strong>
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Convert *italic* → <em>
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Convert `code` → <code>
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Convert - bullet lines
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  // Double newlines → paragraph breaks
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br/>');
  return `<p>${html}</p>`;
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function ChatWidget() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState<string | null>(null);
  const [unread, setUnread]     = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef       = useRef<HTMLTextAreaElement>(null);
  const bodyRef        = useRef<HTMLDivElement>(null);
  const abortRef       = useRef<AbortController | null>(null);

  // ── Greeting on first open ──────────────────────────────────────────────
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        id: uid(),
        role: 'assistant',
        content: "Hello! I'm **Ama**, Maspejo's virtual assistant. 👋\n\nI can help you with information about our construction services, projects, team, and how to get started on your next build.\n\nWhat can I help you with today?",
        timestamp: new Date(),
      }]);
    }
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  // ── Auto-scroll ─────────────────────────────────────────────────────────
  const scrollToBottom = useCallback((smooth = true) => {
    messagesEndRef.current?.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleBodyScroll = () => {
    const el = bodyRef.current;
    if (!el) return;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    setShowScroll(!atBottom);
  };

  // ── Auto-grow textarea ──────────────────────────────────────────────────
  useEffect(() => {
    const ta = inputRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight, 120) + 'px';
  }, [input]);

  // ── Send message ────────────────────────────────────────────────────────
  const send = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    setInput('');

    const userMsg: Message = {
      id: uid(), role: 'user',
      content: trimmed, timestamp: new Date(),
    };

    const assistantId = uid();
    const assistantMsg: Message = {
      id: assistantId, role: 'assistant',
      content: '', timestamp: new Date(), streaming: true,
    };

    setMessages(prev => [...prev, userMsg, assistantMsg]);
    setLoading(true);

    // Track unread if window is closed
    if (!open) setUnread(u => u + 1);

    const abort = new AbortController();
    abortRef.current = abort;

    try {
      const history = [...messages, userMsg].map(m => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      }));

      const stream = await getOpenAI().chat.completions.create({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: MASPEJO_SYSTEM_PROMPT },
          ...history,
        ],
        stream: true,
        max_tokens: 600,
        temperature: 0.7,
      });

      let accumulated = '';

      for await (const chunk of stream) {
        if (abort.signal.aborted) break;
        const delta = chunk.choices[0]?.delta?.content ?? '';
        if (delta) {
          accumulated += delta;
          setMessages(prev =>
            prev.map(m =>
              m.id === assistantId
                ? { ...m, content: accumulated }
                : m
            )
          );
        }
      }

      // Mark streaming done
      setMessages(prev =>
        prev.map(m =>
          m.id === assistantId ? { ...m, streaming: false } : m
        )
      );
    } catch (err: unknown) {
      if ((err as { name?: string }).name === 'AbortError') return;
      console.error(err);
      const msg = (err as Error).message?.includes('API key')
        ? 'API key error. Please check configuration.'
        : 'Something went wrong. Please try again.';
      setError(msg);
      setMessages(prev => prev.filter(m => m.id !== assistantId));
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  }, [loading, messages, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const stopStreaming = () => {
    abortRef.current?.abort();
    setLoading(false);
    // Mark any streaming message as done
    setMessages(prev => prev.map(m => ({ ...m, streaming: false })));
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
    // Re-trigger greeting
    setTimeout(() => {
      setMessages([{
        id: uid(), role: 'assistant',
        content: "Hello again! 👋 How else can I help you with Maspejo today?",
        timestamp: new Date(),
      }]);
    }, 50);
  };

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── FAB Button ── */}
      <button
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close chat' : 'Open chat with Ama'}
        title={open ? 'Close' : 'Chat with Ama'}
      >
        <span className={styles.fabIcon}>
          {open ? <X size={22} /> : <MessageSquare size={22} />}
        </span>
        {!open && unread > 0 && (
          <span className={styles.unreadBadge}>{unread}</span>
        )}
        {!open && (
          <span className={styles.fabPulse} />
        )}
      </button>

      {/* ── Chat Window ── */}
      <div
        className={`${styles.window} ${open ? styles.windowOpen : ''}`}
        role="dialog"
        aria-label="Maspejo Chat Assistant"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.avatar}>
              <Sparkles size={16} />
            </div>
            <div className={styles.headerInfo}>
              <span className={styles.headerName}>Ama</span>
              <span className={styles.headerStatus}>
                <span className={styles.statusDot} />
                AI Assistant · Maspejo
              </span>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button
              className={styles.headerBtn}
              onClick={clearChat}
              title="Clear conversation"
              aria-label="Clear conversation"
            >
              <RotateCcw size={15} />
            </button>
            <button
              className={styles.headerBtn}
              onClick={() => setOpen(false)}
              title="Close"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          className={styles.body}
          ref={bodyRef}
          onScroll={handleBodyScroll}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.msgRow} ${msg.role === 'user' ? styles.msgUser : styles.msgBot}`}
            >
              {msg.role === 'assistant' && (
                <div className={styles.botAvatar}>A</div>
              )}
              <div className={styles.bubble}>
                {msg.role === 'assistant' ? (
                  <div
                    className={styles.bubbleContent}
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                  />
                ) : (
                  <div className={styles.bubbleContent}>{msg.content}</div>
                )}
                {msg.streaming && (
                  <span className={styles.cursor} aria-hidden="true" />
                )}
                <span className={styles.msgTime}>{formatTime(msg.timestamp)}</span>
              </div>
            </div>
          ))}

          {/* Typing indicator while waiting for first token */}
          {loading && messages[messages.length - 1]?.content === '' && (
            <div className={`${styles.msgRow} ${styles.msgBot}`}>
              <div className={styles.botAvatar}>A</div>
              <div className={styles.bubble}>
                <div className={styles.typing}>
                  <span /><span /><span />
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className={styles.errorBanner}>
              ⚠ {error}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions — only show if just greeting */}
        {messages.length === 1 && !loading && (
          <div className={styles.suggestions}>
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                className={styles.suggestionBtn}
                onClick={() => send(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Scroll to bottom */}
        {showScroll && (
          <button
            className={styles.scrollBtn}
            onClick={() => scrollToBottom()}
            aria-label="Scroll to latest message"
          >
            <ChevronDown size={16} />
          </button>
        )}

        {/* Input */}
        <div className={styles.footer}>
          <form className={styles.inputRow} onSubmit={handleSubmit}>
            <textarea
              ref={inputRef}
              className={styles.input}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Ama anything about Maspejo…"
              rows={1}
              disabled={loading}
              aria-label="Chat message input"
            />
            {loading ? (
              <button
                type="button"
                className={`${styles.sendBtn} ${styles.stopBtn}`}
                onClick={stopStreaming}
                aria-label="Stop generating"
                title="Stop"
              >
                <span className={styles.stopIcon} />
              </button>
            ) : (
              <button
                type="submit"
                className={styles.sendBtn}
                disabled={!input.trim()}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            )}
          </form>
          <p className={styles.footerNote}>
            Powered by GPT-4o · Press <kbd>Enter</kbd> to send
          </p>
        </div>
      </div>
    </>
  );
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials: string[];
}

export const team: TeamMember[] = [
  {
    name: 'Emmanuel Asante-Mensah',
    role: 'Founder & Chief Executive Officer',
    bio: 'With over 25 years in Ghana\'s construction industry, Emmanuel founded Maspejo with a vision to deliver world-class infrastructure that endures.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    credentials: ['BSc Civil Engineering, KNUST', 'MBA, University of Ghana', 'GHACOE Fellow'],
  },
  {
    name: 'Abena Osei-Bonsu',
    role: 'Chief Operating Officer',
    bio: 'Abena oversees project delivery across all divisions, ensuring every project meets Maspejo\'s exacting quality standards.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    credentials: ['BSc Construction Management', 'PMP Certified', 'ISO Lead Auditor'],
  },
  {
    name: 'Kwame Boateng',
    role: 'Head of Civil Engineering',
    bio: 'Kwame leads the civil team on complex bridge, drainage, and water infrastructure projects across West Africa.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    credentials: ['MEng Structural Engineering', 'Chartered Engineer (GhIE)', '18 Years Experience'],
  },
  {
    name: 'Akosua Darko',
    role: 'Director of Architecture & Design',
    bio: 'Akosua brings award-winning design sensibility to Maspejo\'s commercial and residential portfolios.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    credentials: ['MArch, UCL London', 'GIA Registered Architect', 'RIBA Associate'],
  },
  {
    name: 'Kofi Asare',
    role: 'Head of Health, Safety & Environment',
    bio: 'Kofi champions a zero-incident culture across all Maspejo sites, implementing robust HSE frameworks.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    credentials: ['NEBOSH IGC', 'IOSH Member', 'ISO 45001 Auditor'],
  },
  {
    name: 'Ama Frimpong',
    role: 'Chief Financial Officer',
    bio: 'Ama manages Maspejo\'s financial strategy, ensuring fiscal discipline and long-term investment in capability.',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80',
    credentials: ['ACCA Qualified', 'BSc Accounting, UG', 'Treasury Management Cert.'],
  },
];

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'building-construction',
    icon: '🏗️',
    title: 'Building Construction',
    shortDesc: 'Residential, commercial, and institutional structures built to last generations.',
    longDesc:
      'From single-family homes to high-rise commercial towers, Maspejo delivers superior building construction services that combine structural integrity with architectural beauty. Our teams are experienced in modern construction methodologies, delivering on schedule and within budget.',
    features: [
      'Residential & multi-family housing',
      'Commercial office complexes',
      'Institutional & public buildings',
      'High-rise structural framing',
      'Pre-engineered steel buildings',
      'Quality control & site supervision',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 'civil-engineering',
    icon: '🌉',
    title: 'Civil Engineering',
    shortDesc: 'Bridges, drainage systems, and water infrastructure engineered for resilience.',
    longDesc:
      'Our civil engineering division tackles complex infrastructure challenges with precision engineering and sustainable design principles. We handle projects from feasibility studies through to final commissioning.',
    features: [
      'Bridge design & construction',
      'Drainage & stormwater systems',
      'Water treatment facilities',
      'Retaining walls & earthworks',
      'Foundation engineering',
      'Geotechnical investigations',
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
  },
  {
    id: 'road-infrastructure',
    icon: '🛣️',
    title: 'Road & Infrastructure',
    shortDesc: 'Highways, urban roads, and transport corridors connecting communities.',
    longDesc:
      'Maspejo brings deep expertise to road construction and rehabilitation, working on national highways, urban arterials, and rural access roads. We integrate pavement engineering with drainage and safety design.',
    features: [
      'National & regional highways',
      'Urban road construction',
      'Road rehabilitation & resurfacing',
      'Traffic management systems',
      'Street lighting & signage',
      'Airport aprons & taxiways',
    ],
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
  },
  {
    id: 'project-management',
    icon: '📋',
    title: 'Project Management',
    shortDesc: 'End-to-end oversight ensuring delivery on time, on budget, and to spec.',
    longDesc:
      'Our certified project managers bring rigorous planning frameworks to every engagement. From initial scheduling through to handover documentation, we ensure seamless coordination between all stakeholders.',
    features: [
      'Project planning & scheduling',
      'Cost management & reporting',
      'Risk assessment & mitigation',
      'Stakeholder communication',
      'Quality management systems',
      'Contract administration',
    ],
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80',
  },
  {
    id: 'renovation-retrofit',
    icon: '🔨',
    title: 'Renovation & Retrofit',
    shortDesc: 'Breathing new life into existing structures with modern upgrades.',
    longDesc:
      'We specialize in transforming aged or underperforming buildings into modern, efficient spaces. Our retrofit solutions address structural, mechanical, and aesthetic requirements while minimizing disruption.',
    features: [
      'Structural reinforcement',
      'MEP systems upgrades',
      'Facade renovation',
      'Interior fit-outs',
      'Energy efficiency upgrades',
      'Heritage building restoration',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    id: 'structural-consulting',
    icon: '📐',
    title: 'Structural Consulting',
    shortDesc: 'Expert engineering advice from concept to detailed structural design.',
    longDesc:
      'Our structural engineering consultants provide authoritative design and assessment services. We use advanced analysis software to model complex structural systems and deliver safe, cost-effective solutions.',
    features: [
      'Structural analysis & design',
      'Building condition assessments',
      'Load capacity evaluations',
      'Seismic & wind analysis',
      'Peer review services',
      'Expert witness support',
    ],
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80',
  },
];

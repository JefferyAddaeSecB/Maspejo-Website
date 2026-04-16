export type ProjectCategory = 'All' | 'Commercial' | 'Residential' | 'Infrastructure' | 'Civil';

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: Exclude<ProjectCategory, 'All'>;
  value: string;
  duration: string;
  status: 'Completed' | 'Ongoing';
  shortDesc: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'kumasi-mall',
    title: 'Kumasi Commercial Plaza',
    client: 'Ashanti Developments Ltd',
    location: 'Kumasi, Ashanti Region',
    year: '2023',
    category: 'Commercial',
    value: 'GHS 45M',
    duration: '18 months',
    status: 'Completed',
    shortDesc: 'A 6-floor mixed-use commercial complex with underground parking and a central atrium.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    tags: ['Commercial', 'Steel Frame', 'Mixed-Use'],
  },
  {
    id: 'tema-highway',
    title: 'Tema–Accra Highway Upgrade',
    client: 'Ghana Highway Authority',
    location: 'Greater Accra Region',
    year: '2023',
    category: 'Infrastructure',
    value: 'GHS 120M',
    duration: '24 months',
    status: 'Completed',
    shortDesc: 'Dual-carriageway rehabilitation covering 34 km with new drainage and lighting.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    tags: ['Highway', 'Drainage', 'Road Safety'],
  },
  {
    id: 'airport-residential',
    title: 'Airport Residential Estate',
    client: 'Premier Housing Ghana',
    location: 'Airport Area, Accra',
    year: '2022',
    category: 'Residential',
    value: 'GHS 28M',
    duration: '14 months',
    status: 'Completed',
    shortDesc: '48-unit luxury residential estate with landscaping, gym, and smart home integration.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    tags: ['Residential', 'Luxury', 'Smart Home'],
  },
  {
    id: 'volta-bridge',
    title: 'Volta River Pedestrian Bridge',
    client: 'Volta Regional Authority',
    location: 'Volta Region',
    year: '2022',
    category: 'Civil',
    value: 'GHS 18M',
    duration: '10 months',
    status: 'Completed',
    shortDesc: '220-metre suspension bridge providing safe river crossing for 3 rural communities.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    tags: ['Bridge', 'Suspension', 'Community'],
  },
  {
    id: 'hospital-takoradi',
    title: 'Takoradi District Hospital',
    client: 'Ghana Health Service',
    location: 'Takoradi, Western Region',
    year: '2021',
    category: 'Commercial',
    value: 'GHS 62M',
    duration: '22 months',
    status: 'Completed',
    shortDesc: '150-bed district hospital with specialist wings, emergency unit, and maternity block.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    tags: ['Healthcare', 'Public', 'Institutional'],
  },
  {
    id: 'kasoa-bypass',
    title: 'Kasoa Bypass Road',
    client: 'Ministry of Roads & Highways',
    location: 'Central Region',
    year: '2024',
    category: 'Infrastructure',
    value: 'GHS 85M',
    duration: '20 months',
    status: 'Ongoing',
    shortDesc: 'New 18-km dual-carriageway bypass to decongest Kasoa and the coastal corridor.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    tags: ['Bypass', 'Urban Relief', 'Road'],
  },
  {
    id: 'east-legon-towers',
    title: 'East Legon Residential Towers',
    client: 'Horizon Properties Ltd',
    location: 'East Legon, Accra',
    year: '2024',
    category: 'Residential',
    value: 'GHS 55M',
    duration: '26 months',
    status: 'Ongoing',
    shortDesc: 'Twin 12-floor residential towers with rooftop pool, retail podium, and basement parking.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80',
    tags: ['High-Rise', 'Mixed-Use', 'Premium'],
  },
  {
    id: 'sunyani-water',
    title: 'Sunyani Water Treatment Expansion',
    client: 'Ghana Water Company Ltd',
    location: 'Sunyani, Bono Region',
    year: '2021',
    category: 'Civil',
    value: 'GHS 33M',
    duration: '16 months',
    status: 'Completed',
    shortDesc: 'Expansion of treatment capacity from 8,000 to 22,000 m³/day serving 400,000 residents.',
    image: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?w=800&q=80',
    tags: ['Water', 'Treatment', 'Utility'],
  },
];

export const categories: ProjectCategory[] = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Civil'];

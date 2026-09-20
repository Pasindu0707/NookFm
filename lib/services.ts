import type { IconType } from 'react-icons'
import {
  MdHandyman,
  MdFormatPaint,
  MdGrass,
  MdRoofing,
  MdRecycling,
  MdPestControl,
  MdElectricalServices,
  MdPlumbing,
  MdAcUnit,
  MdFireExtinguisher,
  MdSecurity,
  MdAssignment,
  MdDesignServices,
  MdWeekend,
  MdKitchen,
  MdChair,
} from 'react-icons/md'
import {
  FiBriefcase,
  FiShoppingBag,
  FiHeart,
  FiBook,
  FiPackage,
  FiTool,
  FiLayers,
  FiDroplet,
  FiMaximize2,
  FiZap,
} from 'react-icons/fi'
import { unsplash } from './site'

export type Service = {
  id: string
  title: string
  /** Short label used in navigation menus */
  shortTitle: string
  icon: IconType
  image: string
  description: string
  features: string[]
  /** Hidden services stay in the code but are not shown anywhere on the site */
  hidden?: boolean
}

const facilityServices: Service[] = [
  {
    id: 'property-maintenance',
    title: 'Property Maintenance',
    shortTitle: 'Property Maintenance',
    icon: MdHandyman,
    image: unsplash('1562259929-b4e1fd3aef09'),
    description:
      'Reliable general repairs and handyman services that keep your property safe, functional and presentable.',
    features: [
      'General repairs',
      'Handyman services',
      'Door, wall and fixture repairs',
      'Preventative maintenance inspections',
    ],
  },
  {
    id: 'commercial-painting',
    title: 'Commercial Painting',
    shortTitle: 'Commercial Painting',
    icon: MdFormatPaint,
    image: unsplash('1562259949-e8e7689d7828'),
    description:
      'Professional interior and exterior painting for offices, common areas and commercial buildings.',
    features: [
      'Interior and exterior painting',
      'Offices and common areas',
      'Doors, frames, ceilings and feature walls',
      'Make-good and repainting works',
    ],
  },
  {
    id: 'grounds-landscaping',
    title: 'Grounds & Landscaping',
    shortTitle: 'Grounds & Landscaping',
    icon: MdGrass,
    image: unsplash('1689728318937-17d24bc0a65c'),
    description:
      'Well-kept grounds and gardens that make a strong first impression all year round.',
    features: [
      'Lawn and garden maintenance',
      'Hedging and pruning',
      'Weed control',
      'Green-waste removal',
      'Landscape improvements',
    ],
  },
  {
    id: 'building-exterior',
    title: 'Building Exterior Maintenance',
    shortTitle: 'Building Exterior',
    icon: MdRoofing,
    image: unsplash('1642749776312-aa42ce20c9f5'),
    description:
      'Protect your asset from the outside in with roof, gutter, façade and car-park maintenance.',
    features: [
      'Roof and gutter maintenance',
      'Building façade care',
      'Pathway and car-park maintenance',
      'Minor external repairs',
    ],
  },
  {
    id: 'waste-management',
    title: 'Rubbish & Waste Management',
    shortTitle: 'Rubbish & Waste',
    icon: MdRecycling,
    image: unsplash('1611284446314-60a58ac0deb9'),
    description:
      'Efficient waste collection and rubbish removal that keeps your site clean, hygienic and well organised.',
    features: [
      'Bin management and waste collection',
      'Waste-area maintenance',
      'Bulk-rubbish and furniture removal',
      'Recycling coordination',
      'Responsible waste disposal',
    ],
  },
  {
    id: 'pest-management',
    title: 'Pest Management',
    shortTitle: 'Pest Management',
    icon: MdPestControl,
    image: unsplash('1760527072562-6ab5bd3054dc'),
    description:
      'Scheduled and responsive pest management to protect your people, property and reputation.',
    features: [
      'General pest treatments',
      'Rodent control',
      'Termite inspections',
      'Scheduled pest-management programs',
    ],
  },
  {
    id: 'electrical-services',
    title: 'Electrical Services',
    shortTitle: 'Electrical Services',
    icon: MdElectricalServices,
    image: unsplash('1621905251189-08b45d6a269e'),
    description:
      'Lighting, testing and minor electrical maintenance carried out by licensed professionals.',
    features: [
      'Lighting repairs and replacement',
      'Emergency and exit-light testing',
      'Test and tag',
      'Minor electrical maintenance',
    ],
  },
  {
    id: 'plumbing-services',
    title: 'Plumbing Services',
    shortTitle: 'Plumbing Services',
    icon: MdPlumbing,
    image: unsplash('1676210133055-eab6ef033ce3'),
    description:
      'Fast, reliable plumbing repairs and preventative maintenance to avoid costly downtime.',
    features: [
      'Tap and toilet repairs',
      'Blocked drains',
      'Leak detection',
      'Preventative plumbing maintenance',
    ],
  },
  {
    id: 'air-conditioning-hvac',
    title: 'Air-Conditioning & HVAC',
    shortTitle: 'Air-Conditioning & HVAC',
    icon: MdAcUnit,
    image: unsplash('1667983453881-4992fe86ab1b'),
    description:
      'Keep your building comfortable and your systems efficient with scheduled HVAC servicing.',
    features: [
      'Air-conditioning servicing',
      'Filter replacement',
      'Preventative maintenance',
      'Breakdown coordination',
    ],
  },
  {
    id: 'fire-safety-compliance',
    title: 'Fire & Safety Compliance',
    shortTitle: 'Fire & Safety',
    icon: MdFireExtinguisher,
    image: unsplash('1625958936686-a9343dc35b5b'),
    description:
      'Stay compliant and keep occupants safe with coordinated fire and safety services.',
    features: [
      'Fire-equipment inspections',
      'Exit-light testing',
      'Safety signage',
      'Compliance-service coordination',
    ],
  },
  {
    id: 'security-access',
    title: 'Security & Access Support',
    shortTitle: 'Security & Access',
    icon: MdSecurity,
    image: unsplash('1557597774-9d273605dfa9'),
    description:
      'Secure sites and controlled access, day and night, with coordinated security support.',
    features: [
      'Locks and access systems',
      'CCTV coordination',
      'Security patrol coordination',
      'After-hours access management',
    ],
  },
  {
    id: 'facility-support',
    title: 'Facility Support & Coordination',
    shortTitle: 'Facility Support',
    icon: MdAssignment,
    image: unsplash('1700727448575-6f1680cd7d75'),
    description:
      'One point of contact to manage contractors, inspections and reporting across one site or many.',
    features: [
      'Contractor management',
      'Scheduled site inspections',
      'Maintenance reporting',
      'Emergency call-out coordination',
      'Multi-site service management',
    ],
  },
  {
    id: 'interior-design',
    title: 'Building Interior Design',
    shortTitle: 'Interior Design',
    icon: MdDesignServices,
    image: unsplash('1770808250138-2ce5da80b312'),
    description:
      'Designing and transforming aged care interiors into welcoming, functional and accessible spaces.',
    features: [
      'Resident rooms',
      'Communal lounges and dining areas',
      'Reception and entry areas',
      'Staff facilities',
      'Accessible, functional space planning',
    ],
  },
  {
    id: 'building-furnishings',
    title: 'Building Furnishings',
    shortTitle: 'Building Furnishings',
    icon: MdWeekend,
    image: unsplash('1693578616322-c8abe6c7393d'),
    description:
      'Supplying and installing quality furnishings, fixtures and interior fittings that lift comfort and appearance.',
    features: [
      'Furnishings, fixtures and interior fittings',
      'Supply and installation',
      'Resident comfort and accessibility',
      'Safety-conscious selections',
      'Improved overall appearance',
    ],
  },
  {
    id: 'electrical-appliances',
    title: 'Electrical Appliances Supply',
    shortTitle: 'Appliance Supply',
    icon: MdKitchen,
    image: unsplash('1632923565835-6582b54f2105'),
    description:
      'Reliable electrical appliances for resident accommodation, commercial kitchens, laundries and communal areas.',
    features: [
      'Resident accommodation appliances',
      'Commercial kitchen equipment',
      'Laundry appliances',
      'Staff and communal area appliances',
      'Energy efficient and easy to use',
    ],
  },
  {
    id: 'furniture-supply',
    title: 'Furniture Supply & Design',
    shortTitle: 'Furniture Supply',
    icon: MdChair,
    image: unsplash('1564078516393-cf04bd966897'),
    description:
      'Customised furniture solutions designed around the comfort and accessibility needs of elderly residents.',
    features: [
      'Ergonomic seating',
      'Dining furniture',
      'Bedroom furniture',
      'Storage units',
      'Communal area furnishings',
    ],
  },
]

// Cleaning services carried over from the original template. Kept for future
// use but hidden from the site. Set `hidden: false` to show one again.
const legacyCleaningServices: Service[] = [
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    shortTitle: 'Office Cleaning',
    icon: FiBriefcase,
    image: '/office_cleaning.jpg',
    description: 'Professional office cleaning services to maintain a clean, productive, and pleasant workspace.',
    features: ['Daily, weekly, or custom schedules', 'Restroom sanitization', 'Trash removal and recycling', 'Vacuuming and dusting', 'Surface cleaning and disinfection', 'Window cleaning'],
    hidden: true,
  },
  {
    id: 'retail-hospitality',
    title: 'Retail & Hospitality Cleaning',
    shortTitle: 'Retail & Hospitality',
    icon: FiShoppingBag,
    image: '/retail.jpg',
    description: 'Specialised cleaning services for retail stores, restaurants, and hospitality venues.',
    features: ['High-traffic area maintenance', 'Food service area sanitization', 'Window cleaning', 'Floor care for customer-facing spaces'],
    hidden: true,
  },
  {
    id: 'medical-aged-care',
    title: 'Medical & Aged Care Facility Cleaning',
    shortTitle: 'Medical & Aged Care',
    icon: FiHeart,
    image: '/medical.jpg',
    description: 'Healthcare cleaning to keep medical facilities clean and safe with strict hygiene standards.',
    features: ['Infection control protocols', 'Sanitization of medical equipment areas', 'Specialised waste handling', 'Compliance with health regulations'],
    hidden: true,
  },
  {
    id: 'school-childcare',
    title: 'School & Childcare Cleaning',
    shortTitle: 'School & Childcare',
    icon: FiBook,
    image: '/school_cleaning.jpg',
    description: 'Specialised school cleaning services to create a safe, hygienic environment for students and staff.',
    features: ['Classroom sanitization', 'Playground equipment cleaning', 'Cafeteria maintenance', 'After-hours deep cleaning'],
    hidden: true,
  },
  {
    id: 'industrial-warehouse',
    title: 'Industrial & Warehouse Cleaning',
    shortTitle: 'Industrial & Warehouse',
    icon: FiPackage,
    image: '/warehouse.jpg',
    description: 'Comprehensive cleaning solutions for industrial facilities and warehouses.',
    features: ['Heavy-duty floor cleaning', 'Equipment area maintenance', 'Loading dock cleaning', 'Industrial waste management'],
    hidden: true,
  },
  {
    id: 'construction-site',
    title: 'Construction Site Cleaning',
    shortTitle: 'Construction Site',
    icon: FiTool,
    image: '/Construction_site_cleaning.jpg',
    description: 'Professional cleaning services for construction sites and new builds.',
    features: ['Post-construction cleanup', 'Debris removal', 'Window cleaning', 'Site preparation for handover'],
    hidden: true,
  },
  {
    id: 'floor-maintenance',
    title: 'Floor Maintenance – Strip & Reseal',
    shortTitle: 'Floor Maintenance',
    icon: FiLayers,
    image: '/floor.jpg',
    description: 'Comprehensive floor maintenance services to keep your surfaces looking their best.',
    features: ['Professional stripping', 'Sealing and buffing', 'Polishing', 'Vinyl, tile, and concrete floors'],
    hidden: true,
  },
  {
    id: 'carpet-cleaning',
    title: 'Commercial Carpet Cleaning',
    shortTitle: 'Carpet Cleaning',
    icon: FiDroplet,
    image: '/Carpet_steam.jpg',
    description: 'Carpet steam cleaning to remove dirt, stains, and allergens for fresh, clean carpets.',
    features: ['Deep steam cleaning', 'Stain removal', 'Deodorising', 'Regular maintenance programs'],
    hidden: true,
  },
  {
    id: 'window-cleaning',
    title: 'Window Cleaning',
    shortTitle: 'Window Cleaning',
    icon: FiMaximize2,
    image: '/window_cleaning.jpg',
    description: 'Professional window cleaning services for crystal clear views and enhanced building appearance.',
    features: ['Interior and exterior windows', 'Glass door cleaning', 'Window frame maintenance', 'Streak-free finishes'],
    hidden: true,
  },
  {
    id: 'pressure-washing',
    title: 'Pressure Washing',
    shortTitle: 'Pressure Washing',
    icon: FiZap,
    image: '/pressure_washer.jpg',
    description: 'High-pressure cleaning services to restore the appearance of buildings, driveways, and outdoor surfaces.',
    features: ['Building exterior pressure washing', 'Driveway and pathway cleaning', 'Deck and patio cleaning', 'Professional grade equipment'],
    hidden: true,
  },
]

export const allServices: Service[] = [...facilityServices, ...legacyCleaningServices]

/** Services that are shown on the site, in display order */
export const services: Service[] = allServices.filter((s) => !s.hidden)

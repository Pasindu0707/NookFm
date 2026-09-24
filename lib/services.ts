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
  MdConstruction,
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
    id: 'building-exterior',
    title: 'Building Exterior Maintenance & Restoration',
    shortTitle: 'Building Exterior',
    icon: MdRoofing,
    image: unsplash('1642749776312-aa42ce20c9f5'),
    description:
      'Protecting and restoring your building from the outside in, from roofs and gutters to façades and car parks.',
    features: [
      'Roof and gutter maintenance',
      'Building façade care and restoration',
      'Pathway and car-park maintenance',
      'Exterior repairs and make-good works',
      'Preventative exterior inspections',
    ],
  },
  {
    id: 'grounds-landscaping',
    title: 'Grounds Maintenance & Landscaping Services',
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
    id: 'commercial-painting',
    title: 'Commercial & Industrial Painting Services',
    shortTitle: 'Commercial Painting',
    icon: MdFormatPaint,
    image: unsplash('1562259949-e8e7689d7828'),
    description:
      'Professional interior and exterior painting for commercial, industrial and residential properties.',
    features: [
      'Interior and exterior painting',
      'Offices, common areas and industrial sites',
      'Doors, frames, ceilings and feature walls',
      'Protective and specialty coatings',
      'Make-good and repainting works',
    ],
  },
  {
    id: 'pest-management',
    title: 'Pest Control & Management Services',
    shortTitle: 'Pest Control',
    icon: MdPestControl,
    image: unsplash('1760527072562-6ab5bd3054dc'),
    description:
      'Scheduled and responsive pest control to protect your people, property and reputation.',
    features: [
      'General pest treatments',
      'Rodent control',
      'Termite inspections',
      'Scheduled pest-management programs',
      'Ongoing monitoring and reporting',
    ],
  },
  {
    id: 'property-maintenance',
    title: 'Comprehensive Property Maintenance & Repairs',
    shortTitle: 'Property Maintenance',
    icon: MdHandyman,
    image: unsplash('1562259929-b4e1fd3aef09'),
    description:
      'Reliable repairs and handyman services that keep your property safe, functional and presentable.',
    features: [
      'General and reactive repairs',
      'Handyman services',
      'Door, wall and fixture repairs',
      'Preventative maintenance inspections',
      'Scheduled maintenance programs',
    ],
  },
  {
    id: 'waste-management',
    title: 'Rubbish Removal & Waste Management Solutions',
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
    id: 'air-conditioning-hvac',
    title: 'Air Conditioning, Heating, Ventilation & HVAC Services',
    shortTitle: 'Air Conditioning & HVAC',
    icon: MdAcUnit,
    image: unsplash('1667983453881-4992fe86ab1b'),
    description:
      'Keeping your building comfortable and your systems efficient with scheduled HVAC servicing and repairs.',
    features: [
      'Air-conditioning installation and servicing',
      'Heating and ventilation systems',
      'Filter replacement',
      'Preventative maintenance',
      'Breakdown response and coordination',
    ],
  },
  {
    id: 'electrical-services',
    title: 'Electrical Installation, Maintenance & Repair Services',
    shortTitle: 'Electrical Services',
    icon: MdElectricalServices,
    image: unsplash('1621905251189-08b45d6a269e'),
    description:
      'Licensed electrical installation, maintenance and repair work across your whole property.',
    features: [
      'Electrical installations and upgrades',
      'Lighting repairs and replacement',
      'Power and data points',
      'Test and tag',
      'Fault finding and minor repairs',
    ],
  },
  {
    id: 'plumbing-services',
    title: 'Plumbing Installation, Maintenance & Repair Services',
    shortTitle: 'Plumbing Services',
    icon: MdPlumbing,
    image: unsplash('1676210133055-eab6ef033ce3'),
    description:
      'Fast, reliable plumbing installation, repairs and preventative maintenance to avoid costly downtime.',
    features: [
      'Plumbing installations and upgrades',
      'Tap and toilet repairs',
      'Blocked drains',
      'Leak detection',
      'Preventative plumbing maintenance',
    ],
  },
  {
    id: 'building-furnishings',
    title: 'Building Furnishings & Fit-Out Solutions',
    shortTitle: 'Furnishings & Fit-Out',
    icon: MdWeekend,
    image: unsplash('1693578616322-c8abe6c7393d'),
    description:
      'Supplying and installing quality furnishings, fixtures and fit-out solutions that lift comfort and appearance.',
    features: [
      'Furnishings, fixtures and interior fittings',
      'Complete fit-out solutions',
      'Supply and installation',
      'Comfort, accessibility and safety',
      'Improved overall presentation',
    ],
  },
  {
    id: 'interior-design',
    title: 'Building Interior Design & Space Planning',
    shortTitle: 'Interior Design',
    icon: MdDesignServices,
    image: unsplash('1770808250138-2ce5da80b312'),
    description:
      'Designing and transforming interiors into welcoming, functional and accessible spaces that work harder.',
    features: [
      'Interior design and space planning',
      'Resident rooms and accommodation',
      'Communal lounges and dining areas',
      'Reception and entry areas',
      'Staff facilities',
    ],
  },
  {
    id: 'electrical-appliances',
    title: 'Electrical Appliance Supply & Installation',
    shortTitle: 'Appliance Supply',
    icon: MdKitchen,
    image: unsplash('1632923565835-6582b54f2105'),
    description:
      'Reliable appliances supplied and installed for accommodation, commercial kitchens, laundries and communal areas.',
    features: [
      'Supply and installation',
      'Commercial kitchen equipment',
      'Laundry appliances',
      'Accommodation and communal area appliances',
      'Energy efficient and easy to use',
    ],
  },
  {
    id: 'furniture-supply',
    title: 'Commercial & Residential Furniture Supply, Design & Installation',
    shortTitle: 'Furniture Supply',
    icon: MdChair,
    image: unsplash('1564078516393-cf04bd966897'),
    description:
      'Customised furniture solutions designed, supplied and installed for commercial and residential spaces.',
    features: [
      'Ergonomic and accessible seating',
      'Dining furniture',
      'Bedroom furniture',
      'Storage units',
      'Communal area furnishings',
    ],
  },
  {
    id: 'building-renovations',
    title: 'Building Renovations, Refurbishments & Remodelling',
    shortTitle: 'Renovations',
    icon: MdConstruction,
    image: unsplash('1634586648651-f1fb9ec10d90'),
    description:
      'Full renovations, refurbishments and remodelling that modernise your property and add long-term value.',
    features: [
      'Full and partial renovations',
      'Refurbishments and remodelling',
      'Bathroom and kitchen upgrades',
      'Room reconfiguration',
      'Project management from start to finish',
    ],
  },
  // Not currently promoted. Set `hidden: false` to show one again.
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
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

/**
 * Central business details for NookFM.
 * TODO: replace the placeholder contact details below with NookFM's real ones.
 */
export const site = {
  name: 'NookFM',
  legalName: 'Nook Facility Management',
  tagline: 'Maintain - Protect - Manage',
  url: 'https://www.nookfm.com.au',
  domain: 'nookfm.com.au',
  phone: '1300 000 000', // TODO: real phone number
  phoneHref: 'tel:1300000000',
  email: 'info@nookfm.com.au', // TODO: confirm email
  addressLine1: 'Brisbane', // TODO: street address
  addressLine2: 'QLD, Australia',
  hours: 'Mon-Fri: 7:00am – 5:00pm', // TODO: confirm office hours
  facebook: '', // TODO: Facebook page URL (link hidden while empty)
  // EmailJS keys for the quote form. While these are empty the form opens
  // the visitor's email app instead, so no leads go to the wrong inbox.
  emailjs: {
    publicKey: '',
    serviceId: '',
    templateId: '',
  },
}

/**
 * Photos are served from the Unsplash CDN (free Unsplash licence).
 * To self-host, download them into /public and swap these for local paths.
 */
export const unsplash = (id: string, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`

export const photos = {
  hero: unsplash('1759272548449-7b689a81c8fb', 2000),
  team: unsplash('1787321280637-81ce957b60e7'),
  teamMobile: unsplash('1577199001468-44c049e7603f'),
  responseVan: unsplash('1558803116-b443d28fa878'),
  building: unsplash('1621831337128-35676ca30868'),
  crew: unsplash('1621905252507-b35492cc74b4'),
}

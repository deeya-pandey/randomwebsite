/**
 * Single source of truth for clinic facts.
 * Anything with `verified: false` MUST be confirmed with the owner before launch.
 */
export const clinic = {
  name: 'Nova Dental Care',
  legalName: 'Nova Dental Care Pvt. Ltd.',
  tagline: 'We love to see you smile',
  // Verified on Google Maps, Instagram and TikTok
  phones: [
    { display: '985-1455514', tel: '+9779851455514' },
    { display: '01-4533224', tel: '+97714533224' },
    { display: '982-8003464', tel: '+9779828003464' },
  ],
  // Confirmed on the clinic's own flyer (WhatsApp icon next to 9851455514)
  whatsapp: '9779851455514',
  whatsappVerified: true,
  address: {
    line: 'Gaushala–Ratopul Road',
    city: 'Kathmandu',
    region: 'Bagmati Province',
    postal: '44600',
    country: 'NP',
    plusCode: 'P85Q+4R Kathmandu',
  },
  geo: { lat: 27.7078104, lng: 85.3395584 },
  // Google Business Profile (opens the real listing, reviews included). CID taken from the listing's place id.
  mapsUrl: 'https://www.google.com/maps?cid=17449739734343971437',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=27.7078104,85.3395584',
  mapsEmbed: 'https://www.google.com/maps?q=Nova+Dental+Care+pvt.ltd%4027.7078104,85.3395584&z=17&output=embed',
  // Google lists only "opens 9:00 AM". Closing time and weekly days are NOT confirmed.
  hoursNote: 'Opens from 9:00 AM. Please call or WhatsApp to confirm today’s hours.',
  social: {
    instagram: 'https://www.instagram.com/nova.dentalcare555/',
    tiktok: 'https://www.tiktok.com/@nova.dental.care1',
  },
} as const

export const waLink = (text: string) =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`

/**
 * Services shown on the site. `confirmed: false` = typical general-dentistry
 * treatment, NOT yet confirmed by the clinic. The Services page shows a notice
 * while any are unconfirmed. Edit this list once the owner confirms.
 */
export const services = [
  {
    slug: 'check-ups-and-cleaning',
    name: 'Check-ups & cleaning',
    short: 'A thorough exam and professional scale and polish.',
    what: 'A routine examination of your teeth and gums, followed by a professional clean to remove plaque and tartar that brushing at home can miss.',
    who: 'Anyone who has not seen a dentist in the last six to twelve months, or who notices bleeding gums or bad breath.',
    involves: 'A short visual exam, gentle ultrasonic or hand scaling, polishing, and advice on keeping your teeth and gums healthy.',
    confirmed: false,
  },
  {
    slug: 'fillings',
    name: 'Fillings & cavity care',
    short: 'Repair of decayed teeth with tooth-coloured material.',
    what: 'Removing decayed areas of a tooth and restoring the shape with a filling so the tooth can work normally again.',
    who: 'People with tooth sensitivity, visible holes or dark spots, or pain when chewing sweet or cold food.',
    involves: 'Numbing the area where needed, cleaning out the decay, placing the filling material and checking your bite.',
    confirmed: false,
  },
  {
    slug: 'root-canal-treatment',
    name: 'Root canal treatment',
    short: 'Treatment to save a badly infected or damaged tooth.',
    what: 'A procedure that cleans the inside of a tooth when the nerve is inflamed or infected, so that the tooth can often be kept rather than removed.',
    who: 'People with lasting toothache, pain on biting, swelling near a tooth, or sensitivity that does not settle.',
    involves: 'Your dentist will examine the tooth, usually take an X-ray, and explain whether root canal treatment suits you and how many visits it may need.',
    confirmed: false,
  },
  {
    slug: 'teeth-whitening',
    name: 'Teeth whitening',
    short: 'Brighten the shade of your natural teeth.',
    what: 'A cosmetic treatment that lightens stains on natural teeth caused by tea, coffee, tobacco or ageing.',
    who: 'Adults with healthy teeth and gums who want a brighter smile. A check-up first is advised.',
    involves: 'An assessment of your teeth, a discussion of realistic results, then the whitening procedure. Results vary from person to person.',
    confirmed: false,
  },
  {
    slug: 'extractions',
    name: 'Tooth removal',
    short: 'Gentle removal of teeth that cannot be saved.',
    what: 'Removal of a tooth that is badly damaged, infected, or causing crowding, including wisdom teeth where needed.',
    who: 'People whose tooth cannot be repaired, or who have been advised to remove a problem tooth.',
    involves: 'Local anaesthetic, careful removal, and clear aftercare instructions so you can heal comfortably.',
    confirmed: false,
  },
  {
    slug: 'crowns-and-dentures',
    name: 'Crowns & dentures',
    short: 'Replace or protect damaged and missing teeth.',
    what: 'Crowns cover and strengthen a weakened tooth. Dentures replace one or several missing teeth.',
    who: 'People with heavily filled, cracked or missing teeth who want to chew and smile comfortably.',
    involves: 'An examination, impressions or scans, a fitting visit and adjustments. Your dentist will explain the options available.',
    confirmed: false,
  },
] as const

export const placeholderNote =
  'Treatment list shown is a typical general-dentistry range and is pending confirmation by the clinic.'

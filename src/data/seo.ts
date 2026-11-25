import { clinic } from './clinic'

export type RouteMeta = { path: string; title: string; description: string; lang?: 'en' | 'ne' }

const en: RouteMeta[] = [
  {
    path: '/',
    title: 'Dentist in Kathmandu, Ratopul | Nova Dental Care',
    description:
      'Nova Dental Care is a dental clinic on Gaushala–Ratopul Road, Kathmandu. Check-ups, fillings, root canal care and more. Call or WhatsApp to book.',
  },
  {
    path: '/services/',
    title: 'Dental Services in Kathmandu | Nova Dental Care',
    description:
      'Explore dental care at Nova Dental Care, Ratopul, Kathmandu: check-ups, fillings, root canal treatment, whitening and more, explained simply.',
  },
  {
    path: '/about/',
    title: 'About the Clinic | Nova Dental Care, Kathmandu',
    description:
      'Meet Nova Dental Care, a Kathmandu dental clinic near Gaushala and Ratopul focused on comfortable, clearly explained dental care.',
  },
  {
    path: '/contact/',
    title: 'Book an Appointment | Nova Dental Care, Kathmandu',
    description:
      'Request an appointment at Nova Dental Care, Gaushala–Ratopul Road, Kathmandu. Call, WhatsApp or send an inquiry. Directions and hours inside.',
  },
]

const ne: RouteMeta[] = [
  { path: '/ne/', title: 'काठमाडौँमा दन्त चिकित्सक, रातोपुल | नोभा डेन्टल केयर', description: 'नोभा डेन्टल केयर गौशाला–रातोपुल रोड, काठमाडौँमा रहेको दन्त क्लिनिक हो। जाँच, फिलिङ, रुट क्यानाल उपचार र थप। बुक गर्न फोन वा व्हाट्सएप गर्नुहोस्।' },
  { path: '/ne/services/', title: 'काठमाडौँमा दन्त सेवाहरू | नोभा डेन्टल केयर', description: 'रातोपुल, काठमाडौँको नोभा डेन्टल केयरमा जाँच, फिलिङ, रुट क्यानाल उपचार, ह्वाइटनिङ र थप सेवा सरल भाषामा।' },
  { path: '/ne/about/', title: 'क्लिनिकबारे | नोभा डेन्टल केयर, काठमाडौँ', description: 'गौशाला र रातोपुल नजिकै रहेको काठमाडौँको नोभा डेन्टल केयर: आरामदायी र स्पष्ट रूपमा बुझाइने दन्त उपचारमा केन्द्रित क्लिनिक।' },
  { path: '/ne/contact/', title: 'अपोइन्टमेन्ट बुक गर्नुहोस् | नोभा डेन्टल केयर, काठमाडौँ', description: 'गौशाला–रातोपुल रोड, काठमाडौँको नोभा डेन्टल केयरमा अपोइन्टमेन्टको अनुरोध गर्नुहोस्। फोन, व्हाट्सएप वा फारम। दिशानिर्देश र समय भित्र।' },
].map((r) => ({ ...r, lang: 'ne' as const }))

export const routes: RouteMeta[] = [...en.map((r) => ({ ...r, lang: 'en' as const })), ...ne]

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: clinic.name,
  legalName: clinic.legalName,
  telephone: clinic.phones[0].tel,
  address: {
    '@type': 'PostalAddress',
    streetAddress: clinic.address.line,
    addressLocality: clinic.address.city,
    addressRegion: clinic.address.region,
    postalCode: clinic.address.postal,
    addressCountry: clinic.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: clinic.geo.lat, longitude: clinic.geo.lng },
  hasMap: clinic.mapsUrl,
  sameAs: [clinic.social.instagram, clinic.social.tiktok],
}

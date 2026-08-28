
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'KTB Solar',
  description:
    'Solar PV and Battery Energy Storage System (BESS) engineering and design services for installers, EPCs, and developers across Canada and the United States.',
  url: 'https://ktbsolar.com',
  areaServed: ['Canada', 'United States'],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  serviceType: [
    'Solar PV System Design',
    'BESS Engineering',
    'Electrical Design',
    'Permitting Support',
  ],
}

export default organizationSchema

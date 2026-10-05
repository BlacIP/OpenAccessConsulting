const base = import.meta.env.BASE_URL;

export const contact = {
  phoneDisplay: '0806 686 1023',
  phoneHref: 'tel:+2348066861023',
  email: 'info@openaccessconsult.com',
  emailAlt: 'openaccessconsulting@gmail.com',
  addressLines: ['7 Asiata Solarin Crescent, off Kudirat Abiola Way', 'Olusosun Bus Stop, Oregun, Lagos'],
  hours: 'Mon–Fri, 9:00am–6:00pm',
};

export const trainingEnrolUrl = 'https://forms.gle/BcFQ6xgm26rvMYvG8';

export const training = {
  name: 'Intensive Hands-On HR Training',
  price: '₦120,000',
  duration: '12 weeks',
  schedule: 'Saturdays, 10am–1pm',
  format: 'Virtual',
  // Set to e.g. 'Starts 7 February 2027' once the next cohort is confirmed
  nextCohort: null as string | null,
};

// TODO(business): confirm these figures before production
export const stats = [
  { value: '13+', label: 'years serving Nigerian businesses' },
  { value: '500+', label: 'client partnerships delivered' },
  { value: '8', label: 'integrated HR service lines' },
  { value: '36 + FCT', label: 'states covered for verification' },
];

export const clients = [
  { name: 'Karflex Fisheries Limited', logo: `${base}karflex.png` },
  { name: 'SoftHealth', logo: `${base}softhealth.jpg` },
  { name: 'MoneyTronics Microfinance Bank', logo: `${base}monie-tronics.png` },
  { name: 'Infinity Microfinance Bank', logo: `${base}infinity-mfb.jpg` },
  { name: 'Lyceum College', logo: `${base}lyceum.png` },
  { name: 'Imperial Homes', logo: `${base}imperial-consult.png` },
];

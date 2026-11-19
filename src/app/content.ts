export type Lang = 'fi' | 'en';

export interface Fact {
  label: string;
  value: string;
}

export interface Project {
  name: string;
  domain: string;
  url: string;
  shot: string;
  shotAlt: string;
  started: string;
  tags: string[];
  desc: string;
}

export interface Service {
  n: string;
  title: string;
  desc: string;
}

export interface Job {
  when: string;
  role: string;
  org: string;
  /** Path to a white, transparent logo. Hurlumhei uses the text wordmark instead. */
  logo?: string;
  desc: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Content {
  lang: Lang;
  /** Path of this language version, used for links and hreflang. */
  path: string;
  meta: { title: string; description: string };
  langLabel: string;
  skip: string;
  nav: { services: string; projects: string; people: string; contact: string };
  heroKicker: string;
  heroTitleA: string;
  heroTitleB: string;
  heroLead: string;
  ctaContact: string;
  ctaServices: string;
  factsLabel: string;
  /** Label of the monthly status fact; the current MM/YYYY is appended in parentheses. */
  statusLabel: string;
  statusValue: string;
  /** Facts shown before and after the status fact. */
  factsBefore: Fact[];
  factsAfter: Fact[];
  servicesTitle: string;
  servicesLead: string;
  services: Service[];
  projectsTitle: string;
  startedLabel: string;
  projects: Project[];
  peopleTitle: string;
  personRole: string;
  personLead: string;
  personArea: string;
  personLangs: string;
  photoAlt: string;
  githubLabel: string;
  showCv: string;
  hideCv: string;
  experienceTitle: string;
  jobs: Job[];
  skillsTitle: string;
  skillGroups: SkillGroup[];
  contactTitle: string;
  contactLead: string;
  companyLabel: string;
  businessIdLabel: string;
  contactPersonLabel: string;
  areaLabel: string;
  areaValue: string;
  country: string;
  footerNote: string;
}

export const COMPANY = 'Hurlumhei Oy';
export const PERSON = 'Jarkko Peltola';
export const EMAIL = 'jarkko.peltola@hurlumhei.xyz';
export const PHONE = '+358 44 223 1235';
export const PHONE_HREF = 'tel:+358442231235';
export const GITHUB = 'https://github.com/rankkis';
export const BUSINESS_ID = '3287363-1';
export const SITE_URL = 'https://hurlumhei.xyz';

const STACK = ['Angular', 'NestJS', 'SSR'];

const LOGOS = {
  vincit: 'img/logo-vincit.webp',
  cgi: 'img/logo-cgi.webp',
  op: 'img/logo-op.webp',
  metropolia: 'img/logo-metropolia.webp',
};

const fi: Content = {
  lang: 'fi',
  path: '/',
  meta: {
    title: 'Hurlumhei Oy – ohjelmistokonsultointi',
    description:
      'Modernia ohjelmistokehitystä – jotta sinun ei tarvitse. Hurlumhei Oy rakentaa web-sovelluksia, auttaa arkkitehtuurissa ja tuo tekoälyagentit osaksi ohjelmistokehitystä.',
  },
  langLabel: 'Kieli',
  skip: 'Siirry sisältöön',
  nav: {
    services: 'Palvelut',
    projects: 'Sivuprojektit',
    people: 'Ihmiset',
    contact: 'Ota yhteyttä',
  },
  heroKicker: 'Hurlumhei Oy · ohjelmistokonsultointi',
  heroTitleA: 'Modernia ohjelmistokehitystä',
  heroTitleB: '– jotta sinun ei tarvitse.',
  heroLead:
    'Hurlumhei Oy on suomalainen ohjelmistokonsultointiyritys. Rakennamme web-sovelluksia, autamme arkkitehtuurissa ja tuomme tekoälyagentit osaksi ohjelmistokehitystä.',
  ctaContact: 'Ota yhteyttä',
  ctaServices: 'Mitä teemme',
  factsLabel: 'Yritys lyhyesti',
  statusLabel: 'Tilanne',
  statusValue: '100% varattu',
  factsBefore: [{ label: 'Perustettu', value: '07/2022' }],
  factsAfter: [
    { label: 'Sivuprojektit', value: '3 tuotannossa' },
    { label: 'Toiminta-alue', value: 'Etelä-Suomi' },
  ],
  servicesTitle: 'Palvelut',
  servicesLead: 'Asiakkaana yleensä tiimi, joka tarvitsee kokeneen tekijän nopeasti mukaan.',
  services: [
    {
      n: '01',
      title: 'Web-sovellukset',
      desc: 'Fullstack-kehitys taustajärjestelmistä käyttöliittymään ja takaisin.',
    },
    {
      n: '02',
      title: 'Konsultointi ja arkkitehtuuri',
      desc: 'Teknologiavalinnat, arkkitehtuuri ja koodikatselmoinnit tiimin tueksi.',
    },
    {
      n: '03',
      title: 'Agenttinen kehitys',
      desc: 'Tekoälyagentit osaksi tiimisi ohjelmistokehitystä: puoliautomaattiset prosessit, joissa AI tekee työtä ja ihminen pitää ohjat.',
    },
  ],
  projectsTitle: 'Sivuprojektit',
  startedLabel: 'Aloitettu',
  projects: [
    {
      name: 'Kaveritutka',
      domain: 'kaveritutka.app',
      url: 'https://kaveritutka.app',
      shot: 'img/kaveritutka.webp',
      shotAlt:
        'Kaveritutkan karttanäkymä: lähialueen leikkipuistot ja tieto siitä, onko niihin tulossa seuraa',
      started: '10/2025',
      tags: ['Yksityisyys edellä', ...STACK],
      desc: 'Auttaa vanhempia löytämään lapselle leikkiseuraa lähipuistosta.',
    },
    {
      name: 'popcore',
      domain: 'merchpoint.popcore.eu',
      url: 'https://merchpoint.popcore.eu',
      shot: 'img/popcore.webp',
      shotAlt: 'Merchpointin hallintanäkymä: tulevat keikat ja niiden verkkotilausten tila',
      started: '09/2026',
      tags: ['Pop up -verkkokauppa', ...STACK],
      desc: 'Ekosysteemi pop up -verkkokaupoille. Ensimmäinen sen päälle rakennettu kauppa on Merchpoint.',
    },
    {
      name: 'Milloin…',
      domain: 'milloin.xyz',
      url: 'https://milloin.xyz',
      shot: 'img/milloin.webp',
      shotAlt: 'Milloin…-palvelun etusivu: sähkön ja rahan milloin-kysymykset vastauksineen',
      started: '01/2026',
      tags: ['Pörssisähkö', 'Avoin API', ...STACK],
      desc: 'Milloin kannattaa ladata sähköauto? Milloin opintotuki maksetaan? Milloin sähkö on halpaa… ja paljon muuta sekä avoin API kehittäjille.',
    },
  ],
  peopleTitle: 'Ihmiset',
  personRole: 'Perustaja · ohjelmistokonsultti',
  personLead:
    'Takana lähes 20 vuotta finanssialan liiketoimintakriittisten järjestelmien kehitystä pääkaupunkiseudulla. Sivussa rakennan omia projekteja, koska koodaaminen on edelleen hauskaa.',
  personArea: 'Pääkaupunkiseutu · Lahti',
  personLangs: 'Suomi, englanti',
  photoAlt: 'Jarkko Peltola',
  githubLabel: 'GitHub-profiili (rankkis)',
  showCv: 'Näytä CV',
  hideCv: 'Piilota CV',
  experienceTitle: 'Kokemus',
  jobs: [
    {
      when: '07/2022 – nyt',
      role: 'Freelancer',
      org: 'Hurlumhei Oy',
      desc: 'Toimin osana sovelluskehitystiimiä suomalaisessa vakuutusalan yrityksessä.',
    },
    {
      when: '09/2016 – 07/2022',
      role: 'Solution Architect',
      org: 'Vincit Oy',
      logo: LOGOS.vincit,
      desc: 'Asiakasprojekteissa laaja-alaisia rooleja sovelluskehityksestä järjestelmäarkkitehtuuriin.',
    },
    {
      when: '06/2014 – 09/2016',
      role: 'Head of Development',
      org: 'CGI',
      logo: LOGOS.cgi,
      desc: 'Vastuullani oli verkkopalkka- ja verkkolaskualustojen kehitys. Kehitimme mikropalveluarkkitehtuuriin pohjautuvan alustan ennen kuin mikropalveluarkkitehtuuria oli keksitty.',
    },
    {
      when: '05/2012 – 06/2014',
      role: 'Ohjelmistokehittäjä',
      org: 'CGI',
      logo: LOGOS.cgi,
      desc: 'Laskutusalustan suunnittelu ja toteutus pienessä ketterässä tiimissä.',
    },
    {
      when: '05/2007 – 05/2012',
      role: 'Analyytikko, kehityspäällikkö',
      org: 'OP-Pohjola-ryhmä',
      logo: LOGOS.op,
      desc: 'SAP/HR-pohjaisen henkilöstöjärjestelmän määrittely, testaus ja koulutus, lopuksi järjestelmän tuoteomistajana.',
    },
    {
      when: '2010',
      role: 'Ohjelmistotekniikan insinööri (AMK)',
      org: 'Metropolia AMK',
      logo: LOGOS.metropolia,
      desc: 'Lisäksi Certified Scrum Master (2015).',
    },
  ],
  skillsTitle: 'Osaaminen',
  skillGroups: [
    { name: 'Frontend', items: ['Angular', 'RxJS', 'NgRx', 'Cypress'] },
    { name: 'Backend', items: ['Java', 'Reactor', 'NestJS', 'C#', 'Playwright'] },
    { name: 'Pilvi ja DevOps', items: ['Azure', 'Vercel', 'Supabase', 'Jenkins'] },
  ],
  contactTitle: 'Tehdäänkö jotain yhdessä?',
  contactLead: 'Kerro projektistasi, niin vastaan yleensä saman päivän aikana.',
  companyLabel: 'Yritys',
  businessIdLabel: 'Y-tunnus',
  contactPersonLabel: 'Yhteyshenkilö',
  areaLabel: 'Toiminta-alue',
  areaValue: 'Etelä-Suomi',
  country: 'Suomi',
  footerNote: 'Tehty Suomessa',
};

const en: Content = {
  lang: 'en',
  path: '/en',
  meta: {
    title: 'Hurlumhei Oy – software consulting',
    description:
      "Modern software development – so you don't have to. Hurlumhei Oy builds web applications, helps with architecture and brings AI agents into software development.",
  },
  langLabel: 'Language',
  skip: 'Skip to content',
  nav: {
    services: 'Services',
    projects: 'Side projects',
    people: 'People',
    contact: 'Get in touch',
  },
  heroKicker: 'Hurlumhei Oy · software consulting',
  heroTitleA: 'Modern software development',
  heroTitleB: "– so you don't have to.",
  heroLead:
    'Hurlumhei Oy is a Finnish software consultancy. We build web applications, help with architecture and bring AI agents into software development.',
  ctaContact: 'Get in touch',
  ctaServices: 'What we do',
  factsLabel: 'Company at a glance',
  statusLabel: 'Status',
  statusValue: '100% booked',
  factsBefore: [{ label: 'Founded', value: '07/2022' }],
  factsAfter: [
    { label: 'Side projects', value: '3 live' },
    { label: 'Area', value: 'Southern Finland' },
  ],
  servicesTitle: 'Services',
  servicesLead: 'Usually for a team that needs an experienced developer on board quickly.',
  services: [
    {
      n: '01',
      title: 'Web applications',
      desc: 'Full stack development from the backend to the user interface and back.',
    },
    {
      n: '02',
      title: 'Consulting and architecture',
      desc: 'Technology choices, architecture and code reviews to support your team.',
    },
    {
      n: '03',
      title: 'Agentic development',
      desc: 'AI agents as part of your software development: semi-automatic processes where AI does the work and people stay in control.',
    },
  ],
  projectsTitle: 'Side projects',
  startedLabel: 'Started',
  projects: [
    {
      name: 'Kaveritutka',
      domain: 'kaveritutka.app',
      url: 'https://kaveritutka.app',
      shot: 'img/kaveritutka.webp',
      shotAlt: 'The Kaveritutka map view: nearby playgrounds and whether anyone is coming',
      started: '10/2025',
      tags: ['Privacy first', ...STACK],
      desc: 'Helps parents find playmates for their kids at the nearby park.',
    },
    {
      name: 'popcore',
      domain: 'merchpoint.popcore.eu',
      url: 'https://merchpoint.popcore.eu',
      shot: 'img/popcore.webp',
      shotAlt: 'The Merchpoint admin view: upcoming gigs and the status of their online orders',
      started: '09/2026',
      tags: ['Pop-up commerce', ...STACK],
      desc: 'An ecosystem for pop-up web stores. The first store built on it is Merchpoint.',
    },
    {
      name: 'Milloin…',
      domain: 'milloin.xyz',
      url: 'https://milloin.xyz',
      shot: 'img/milloin.webp',
      shotAlt: 'The Milloin… front page: electricity and money questions with live answers',
      started: '01/2026',
      tags: ['Spot electricity', 'Public API', ...STACK],
      desc: 'When should you charge your EV? When is the student allowance paid? When is electricity cheap… and much more, plus a public API for developers.',
    },
  ],
  peopleTitle: 'People',
  personRole: 'Founder · software consultant',
  personLead:
    'Almost 20 years of building business-critical systems for the financial sector in the Helsinki region. On the side, I build my own projects, because coding is still fun.',
  personArea: 'Helsinki region · Lahti',
  personLangs: 'Finnish, English',
  photoAlt: 'Jarkko Peltola',
  githubLabel: 'GitHub profile (rankkis)',
  showCv: 'Show CV',
  hideCv: 'Hide CV',
  experienceTitle: 'Experience',
  jobs: [
    {
      when: '07/2022 – now',
      role: 'Freelancer',
      org: 'Hurlumhei Oy',
      desc: 'Working as part of a software development team at a Finnish insurance company.',
    },
    {
      when: '09/2016 – 07/2022',
      role: 'Solution Architect',
      org: 'Vincit Oy',
      logo: LOGOS.vincit,
      desc: 'Wide-ranging roles in client projects, from application development to system architecture.',
    },
    {
      when: '06/2014 – 09/2016',
      role: 'Head of Development',
      org: 'CGI',
      logo: LOGOS.cgi,
      desc: 'I was responsible for developing the e-payslip and e-invoicing platforms. We built a platform on microservice architecture before microservice architecture was invented.',
    },
    {
      when: '05/2012 – 06/2014',
      role: 'Software Developer',
      org: 'CGI',
      logo: LOGOS.cgi,
      desc: 'Designed and built a billing platform in a small agile team.',
    },
    {
      when: '05/2007 – 05/2012',
      role: 'Analyst, Development Manager',
      org: 'OP-Pohjola Group',
      logo: LOGOS.op,
      desc: 'Specified, tested and trained users on an SAP/HR-based HR system, finally as its product owner.',
    },
    {
      when: '2010',
      role: 'Bachelor of Engineering, Software Engineering',
      org: 'Metropolia UAS',
      logo: LOGOS.metropolia,
      desc: 'Also Certified Scrum Master (2015).',
    },
  ],
  skillsTitle: 'Skills',
  skillGroups: [
    { name: 'Frontend', items: ['Angular', 'RxJS', 'NgRx', 'Cypress'] },
    { name: 'Backend', items: ['Java', 'Reactor', 'NestJS', 'C#', 'Playwright'] },
    { name: 'Cloud and DevOps', items: ['Azure', 'Vercel', 'Supabase', 'Jenkins'] },
  ],
  contactTitle: "Let's build something together.",
  contactLead: 'Tell us about your project. We usually reply the same day.',
  companyLabel: 'Company',
  businessIdLabel: 'Business ID',
  contactPersonLabel: 'Contact person',
  areaLabel: 'Area',
  areaValue: 'Southern Finland',
  country: 'Finland',
  footerNote: 'Made in Finland',
};

export const CONTENT: Record<Lang, Content> = { fi, en };

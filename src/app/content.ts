export type Lang = 'fi' | 'en';

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
  nav: { projects: string; experience: string; skills: string; contact: string };
  status: string;
  eyebrow: string;
  heroTitleA: string;
  heroTitleB: string;
  heroLead: string;
  photoAlt: string;
  photoCaption: string;
  ctaProjects: string;
  ctaContact: string;
  projectsTitle: string;
  githubLabel: string;
  startedLabel: string;
  visit: string;
  projects: Project[];
  servicesTitle: string;
  services: Service[];
  experienceTitle: string;
  jobs: Job[];
  skillsTitle: string;
  skillGroups: SkillGroup[];
  contactTitle: string;
  contactLead: string;
  businessIdLabel: string;
  country: string;
  footerNote: string;
}

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
    title: 'Jarkko Peltola · Hurlumhei Oy – ohjelmistokonsultti',
    description:
      'Teen modernia ohjelmistokehitystä – jotta sinun ei tarvitse. Lähes 20 vuotta finanssialan liiketoimintakriittisten järjestelmien kehitystä.',
  },
  langLabel: 'Kieli',
  nav: {
    projects: 'Projektit',
    experience: 'Kokemus',
    skills: 'Osaaminen',
    contact: 'Yhteystiedot',
  },
  status: 'Asiakasprojekti käynnissä',
  eyebrow: 'Hurlumhei Oy · ohjelmistokonsultointi',
  heroTitleA: 'Teen modernia ohjelmistokehitystä',
  heroTitleB: '– jotta sinun ei tarvitse.',
  heroLead:
    'Olen Jarkko Peltola, ohjelmistokonsultti. Takana lähes 20 vuotta finanssialan liiketoimintakriittisten järjestelmien kehitystä pääkaupunkiseudulla. Sivussa rakennan omia projekteja, koska koodaaminen on edelleen hauskaa.',
  photoAlt: 'Jarkko Peltola',
  photoCaption: 'Pääkaupunkiseutu · Lahti',
  ctaProjects: 'Katso projektit',
  ctaContact: 'Ota yhteyttä',
  projectsTitle: 'Omat projektit',
  githubLabel: 'GitHub-profiili (rankkis)',
  startedLabel: 'Aloitettu',
  visit: 'Avaa',
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
      desc: 'Vastaukset arjen milloin-kysymyksiin: pörssisähkön halvimmat tunnit, Kelan ja veronpalautusten maksupäivät sekä avoin API kehittäjille.',
    },
  ],
  servicesTitle: 'Mitä teen',
  services: [
    {
      n: '/01',
      title: 'Web-sovellukset',
      desc: 'Full stack -kehitys käyttöliittymästä taustajärjestelmiin ja tuotantoon.',
    },
    {
      n: '/02',
      title: 'Konsultointi ja arkkitehtuuri',
      desc: 'Teknologiavalinnat, arkkitehtuuri ja koodikatselmoinnit tiimin tueksi.',
    },
    {
      n: '/03',
      title: 'Agenttinen kehitys',
      desc: 'Tuon tekoälyagentit osaksi tiimisi ohjelmistokehitystä: puoliautomaattiset prosessit, joissa AI tekee työtä ja ihminen pitää ohjat.',
    },
  ],
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
    { name: 'Kielet', items: ['Suomi (äidinkieli)', 'Englanti (sujuva)'] },
  ],
  contactTitle: 'Tehdäänkö jotain yhdessä?',
  contactLead: 'Kerro projektistasi, niin vastaan yleensä saman päivän aikana.',
  businessIdLabel: 'Y-tunnus',
  country: 'Suomi',
  footerNote: 'Tehty Suomessa',
};

const en: Content = {
  lang: 'en',
  path: '/en',
  meta: {
    title: 'Jarkko Peltola · Hurlumhei Oy – software consultant',
    description:
      "I do modern software development – so you don't have to. Almost 20 years of building business-critical systems for the financial sector.",
  },
  langLabel: 'Language',
  nav: { projects: 'Projects', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
  status: 'Currently on a client project',
  eyebrow: 'Hurlumhei Oy · software consulting',
  heroTitleA: 'I do modern software development',
  heroTitleB: "– so you don't have to.",
  heroLead:
    "I'm Jarkko Peltola, a software consultant. Almost 20 years of building business-critical systems for the financial sector in the Helsinki region. On the side, I build my own projects, because coding is still fun.",
  photoAlt: 'Jarkko Peltola',
  photoCaption: 'Helsinki region · Lahti',
  ctaProjects: 'See my projects',
  ctaContact: 'Get in touch',
  projectsTitle: 'My projects',
  githubLabel: 'GitHub profile (rankkis)',
  startedLabel: 'Started',
  visit: 'Visit',
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
      desc: 'Answers everyday "when" questions: the cheapest spot-electricity hours, Kela and tax refund payment dates, and a public API for developers.',
    },
  ],
  servicesTitle: 'What I do',
  services: [
    {
      n: '/01',
      title: 'Web applications',
      desc: 'Full stack development from the user interface to the backend and into production.',
    },
    {
      n: '/02',
      title: 'Consulting and architecture',
      desc: 'Technology choices, architecture and code reviews to support your team.',
    },
    {
      n: '/03',
      title: 'Agentic development',
      desc: 'I bring AI agents into your software development: semi-automatic processes where AI does the work and people stay in control.',
    },
  ],
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
    { name: 'Languages', items: ['Finnish (native)', 'English (fluent)'] },
  ],
  contactTitle: "Let's build something together.",
  contactLead: 'Tell me about your project. I usually reply the same day.',
  businessIdLabel: 'Business ID',
  country: 'Finland',
  footerNote: 'Made in Finland',
};

export const CONTENT: Record<Lang, Content> = { fi, en };

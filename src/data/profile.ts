// All copy for phanvugiap.com lives here. Facts come from the old site (legacy/index.html, last updated
// 2024-09-20) and from 4ptransform.org's src/data/author.ts (newer roles and talks, PO 2026-11-22).
// Don't add claims (numbers, clients, awards) that neither source holds; ask the Product Owner first.
// 4ptransform.org's author.ts is copied from this file: update here first, then there.

export const profile = {
  name: 'Phan Vu Giap',
  nameVi: 'Phan Vũ Giáp',
  // Shown under the name in the header logo on every page (PO 2026-11-23).
  tagline: 'Software is a book written in binary code. AI is a huge, continuously updated book.',
  headline: 'Founder & CEO of Beehexa. I help businesses automate their operations by connecting their software.',
  intro: [
    'I trained as a software engineer at Hanoi University of Technology and have been building software since 2003.',
    'In 2012 I founded Beehexa as a software outsourcing company. Today we are scaling HexaSync Automation Engine, which connects ERP, POS, CRM, accounting, e-commerce, e-marketplace, chat, data warehouse, DBMS, API and AI software to automate business processes for companies around the world.',
  ],
  bookCall: 'https://calendly.com/hexasync',
};

export const now = [
  {
    title: 'Beehexa',
    role: 'Founder & CEO, since 2012',
    text: 'The company behind HexaSync. We design, build and run integrations between business systems.',
    links: [{ label: 'beehexa.com', href: 'https://www.beehexa.com/' }],
  },
  {
    title: 'HexaSync Automation Engine',
    role: 'Innovator',
    text: 'An integration platform that connects ERP, POS, CRM, accounting, e-commerce, marketplace and chat applications to automate business processes.',
    links: [{ label: 'app.hexasync.com', href: 'https://app.hexasync.com/' }],
  },
  {
    title: '4P Transform',
    role: 'Author',
    text: 'A framework to simplify business innovation, built on four Ps: Product, Problem, People and Protocol.',
    links: [{ label: '4ptransform.org', href: 'https://4ptransform.org/' }],
  },
];

export const talks = [
  {
    date: 'May 2026',
    title: 'Automating O2O Business',
    event: 'BizTech 2026',
    href: 'https://www.beehexa.com/resources/slides/automating-o2o-business/',
  },
  {
    date: 'November 2023',
    title: 'The Fact of Data Management in the Digital Era',
    event: 'HUTECH',
    href: 'https://www.beehexa.com/resources/slides/data-management-digital-era/',
  },
  {
    date: 'July 2023',
    title: 'Digital Transformation for SMB',
    event: 'BizTech Vietnam 2023',
    href: 'https://www.beehexa.com/resources/slides/digital-transformation-for-smb/',
  },
  {
    date: 'December 2022',
    title: 'API Monetization',
    event: 'Vietnam Web Summit 2022',
    href: 'https://www.beehexa.com/resources/slides/api-monetization/',
  },
  {
    date: 'November 2019',
    title: 'Magento Integration in Practice',
    event: 'Meet Magento Japan 2019',
    href: 'https://meetmagento.jp/en/PhanVuGiap.html',
  },
  {
    date: 'July 2019',
    title: 'Accelerating Digital Transformation with Hybrid Integration Platform',
    event: 'Vietnam Mobile Day',
    href: 'https://www.slideshare.net/slideshow/accelerating-digital-transformation-with-hygrid-integration-platform/219495604',
  },
  {
    date: 'January 2019',
    title: 'Data Integration & Digital Transformation',
    event: 'ITLC Leader Club',
    href: 'https://www.slideshare.net/slideshow/data-integration-ddigital-transformation/133054621',
  },
  {
    date: 'February 2017',
    title: 'Speed Up Your Magento Website',
    event: '',
    href: 'https://www.slideshare.net/slideshow/speedup-magento-website/80440383',
  },
];

// Integration projects from the old site. Only Indmar has a public success story today; the Canva decks the
// old site linked to now ask for a login, so the others are listed without links.
export const integrations = [
  {
    customer: 'Indmar',
    systems: 'Magento 2 × Infor SyteLine',
    href: 'https://www.beehexa.com/resources/success-stories/indmar/',
  },
  { customer: 'Customplus Distribution', systems: 'Magento × Infor Enspire ERP' },
  { customer: 'Benchmark Technology Group', systems: 'Magento × Acumatica' },
  { customer: 'Fabric & Fringe Warehouse', systems: 'Online–offline (O2O) integration' },
];

export const connectors = [
  { label: 'Magento', href: 'https://www.beehexa.com/hexasync/profile/magento/' },
  { label: 'Shopify', href: 'https://www.beehexa.com/hexasync/profile/shopify/' },
  { label: 'BigCommerce', href: 'https://www.beehexa.com/hexasync/profile/bigcommerce/' },
  { label: 'Acumatica', href: 'https://www.beehexa.com/hexasync/profile/acumatica/' },
  {
    label: 'Microsoft Dynamics 365 Business Central',
    href: 'https://www.beehexa.com/hexasync/profile/microsoft-dynamics-365-business-central/',
  },
  { label: 'Infor SyteLine', href: 'https://www.beehexa.com/hexasync/profile/infor-syteline/' },
  { label: 'All connectors', href: 'https://www.beehexa.com/hexasync/connectors/' },
];

// Hands-on engineering before HexaSync, newest first, condensed from the old site.
export const career = [
  {
    group: 'Magento e-commerce',
    items: [
      { years: '2019', text: 'Technical lead, Magento CE 2.3.1 upgrade', site: 'bakesonline.com', href: 'https://www.bakesonline.com/' },
      { years: '2018', text: 'Technical lead, Magento EE to CE migration', site: 'Customplus Distributing' },
      { years: '2016–2017', text: 'Technical lead, Magento EE to CE migration', site: 'chutingstar.com', href: 'https://www.chutingstar.com/' },
      { years: '2017', text: 'Technical consultant, scaling Magento on AWS', site: 'canifa.com', href: 'https://canifa.com/' },
      { years: '2015', text: 'Speeding up a Magento store', site: 'giaytot.com', href: 'https://www.giaytot.com/' },
      { years: '2014–2015', text: 'Technical consultant, osCommerce to Magento migration', site: 'helidirect.com', href: 'https://www.helidirect.com/' },
      { years: '', text: 'Magento extensions: Revocation and Age Verification', site: 'Commercers' },
    ],
  },
  {
    group: 'PHP platforms',
    items: [
      { years: '2015', text: 'Technical consultant, speeding up one of the largest e-commerce sites in Vietnam', site: 'nguyenkim.com', href: 'https://www.nguyenkim.com/' },
      { years: '2015', text: 'Senior PHP developer, wholesale-cart.com to bcart.jp migration', site: 'bcart.jp', href: 'https://bcart.jp/' },
      { years: '2013', text: 'Senior PHP developer, a WordPress shopping cart plugin' },
      { years: '2010', text: 'Technical leader, Manage.NU online project management platform (Zend Framework, MySQL)' },
    ],
  },
  {
    group: 'Windows and .NET',
    items: [
      { years: '2015–2016', text: 'A Windows application that syncs Magento data with relational databases (.NET Entity Framework, Magento SOAP API)' },
      { years: '2015', text: 'A Windows application that syncs an Access database with a Magento store' },
      { years: '2008–2009', text: 'Project leader, school management system (SQL Server, .NET)' },
      { years: '2006', text: 'Project leader, context-sensitive spelling correction using a decision list algorithm' },
    ],
  },
];

export const certifications: { name: string; href?: string }[] = [
  {
    name: 'Google Cloud Generative AI Leader',
    href: 'https://www.credly.com/badges/91a10698-8da2-4fe8-a01c-4d58eed6223a',
  },
  { name: 'Magento Certified Developer' },
  { name: 'Magento Certified Developer Plus' },
  { name: 'Magento Certified Front End Developer' },
  { name: 'Magento Certified Solution Specialist' },
];

export const education = [
  { years: '2002–2007', text: 'Bachelor of Software Engineering, Hanoi University of Technology' },
  { years: '2012–2013', text: 'Graduate, The Founder Institute', href: 'https://fi.co/' },
];

export const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/georgephan' },
  { label: 'GitHub', href: 'https://github.com/giappv' },
  { label: 'Stack Exchange', href: 'https://stackexchange.com/users/3205201/phanvugiap' },
  { label: 'Magento Stack Exchange', href: 'https://magento.stackexchange.com/users/3009/phanvugiap' },
];

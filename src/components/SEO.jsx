import { Head } from 'vite-react-ssg';

const SITE_NAME = 'Rabin Babu Pyakurel';
const BASE_URL = 'https://rabinpyakurel.com.np';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rabin Babu Pyakurel',
  url: BASE_URL,
  jobTitle: 'Java Developer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kathmandu',
    addressCountry: 'NP',
  },
  sameAs: [
    'https://github.com/RabinPyakurel',
    'https://www.linkedin.com/in/rabinpyakurel',
  ],
};

const SEO = ({ title, description, path = '/', type = 'website' }) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Java Developer & Web Developer`;
  const pageDescription = description || 'Rabin Babu Pyakurel — Java Developer & Web Developer. Portfolio showcasing projects, skills, certifications, and resume.';
  const url = `${BASE_URL}${path}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content="Rabin Babu Pyakurel" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={`${BASE_URL}/me.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${BASE_URL}/me.jpg`} />

      {path === '/' && (
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      )}
    </Head>
  );
};

export default SEO;

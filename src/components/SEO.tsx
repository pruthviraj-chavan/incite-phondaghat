import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object;
}

const BASE_URL = 'https://incitecomputer.com';
const DEFAULT_TITLE = 'Incite Computer Phondaghat | महाराष्ट्र शासन मान्यताप्राप्त संगणक प्रशिक्षण केंद्र';
const DEFAULT_DESCRIPTION = 'Incite Computer Phondaghat - Government approved computer training institute offering MS-CIT, Typing, CCC, GCC-TBC courses. महाराष्ट्र शासन व MKCL मान्यताप्राप्त.';
const DEFAULT_KEYWORDS = 'Computer Classes Phondaghat, MKCL Course Phondaghat, Typing Classes Near Me, CCC Course, GCC-TBC, MS-CIT, Marathi Typing, English Typing, Sindhudurg Computer Institute, Phonda Computer Training';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd,
}: SEOProps) => {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | Incite Computer Phondaghat`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {canonical && <link rel="canonical" href={`${BASE_URL}${canonical}`} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={`${BASE_URL}${canonical}`} />}
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

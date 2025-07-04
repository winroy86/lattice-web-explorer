import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: 'website' | 'ScholarlyArticle' | 'BlogPosting';
  author?: string;
  keywords?: string[];
  url?: string;
  image?: string;
}

export const SEO = ({
  title = "Roy Winter's Cubic-Diamond-Lattice Theory of Everything",
  description = "Discrete-lattice physics framework unifying quantum mechanics and relativity through Planck-scale cubic-diamond lattice structures and pressure field dynamics.",
  type = 'website',
  author = 'Roy Winter',
  keywords = ['physics', 'theory of everything', 'lattice theory', 'quantum mechanics', 'relativity', 'discrete spacetime'],
  url = window.location.href,
  image = '/images/theory-preview.jpg'
}: SEOProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: author
    },
    url,
    image,
    keywords: keywords.join(', '),
    ...(type === 'ScholarlyArticle' && {
      abstract: description,
      publisher: {
        '@type': 'Organization',
        name: 'Roy Winter Research'
      }
    }),
    ...(type === 'BlogPosting' && {
      datePublished: new Date().toISOString(),
      publisher: {
        '@type': 'Organization',
        name: 'Roy Winter Research'
      }
    })
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type === 'website' ? 'website' : 'article'} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <title>Advocacia | Jean Oliveira</title>

      <meta name="description" content="Informações sobre Direito Empresarial e Consultoria Jurídica" />
        <meta name="keywords" content="Empresarial, Família, Contratos, Administrativo" />
        <meta name="author" content="Nome do Advogado ou Escritório" />
        
        <meta property="og:title" content="Minha Página Empresarial" />
        <meta property="og:description" content="Consultoria Jurídica especializada em Direito Administrativo." />
        <meta property="og:image" content="URL da imagem de visualização" />
        <meta property="og:url" content="https://www.advjcoliveira.com.br" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minha Página Empresarial" />
        <meta name="twitter:description" content="Consultoria Jurídica especializada em Direito administrativo." />
        <meta name="twitter:image" content="URL da imagem de visualização" />
        <script type="application/ld+json">

        {`
          {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Dr. Jean Carlos de Oliveira",
            "image": "https://www.seudominio.com/lawyer.jpg",
            "telephone": "+5541992417174",
            "email": "jcoliveira.advocacia@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Curitiba",
              "addressRegion": "PR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-25.4284",
              "longitude": "-49.2733"
            },
            "priceRange": "$$",
            "sameAs": [
              "https://www.linkedin.com/in/seuperfil",
              "https://lattes.cnpq.br/9170213078805571"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
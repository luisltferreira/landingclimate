export function SchemaOrg() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://climateweb.pt'
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Climate',
    alternateName: 'Climate Web',
    url: siteUrl,
    logo: `${siteUrl}/climate-logo.png`,
    description: 'Plataforma digital que liga pessoas e organizações a eventos ecológicos reais, promovendo impacto positivo e comunidade ativa.',
    email: 'luisferreira@climateweb.pt',
    sameAs: [
      'https://www.instagram.com/climate.pt/',
    ],
    foundingDate: '2024',
    award: 'Vencedores do Step Up to Start Up 2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PT',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Climate',
    url: siteUrl,
    description: 'Explora eventos ambientais, inscreve-te no voluntariado e faz parte de uma comunidade que quer mudar Portugal.',
    inLanguage: ['pt-PT', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Climate',
    applicationCategory: 'EnvironmentalApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </>
  )
}


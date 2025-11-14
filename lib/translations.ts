export type Language = 'pt' | 'en'

export const translations = {
  pt: {
    nav: {
      howItWorks: 'Como Funciona',
      forOrganizers: 'Para Organizadores',
      values: 'Valores',
      community: 'Comunidade',
    },
    hero: {
      title: 'Liga-te à ação que muda o planeta',
      description: 'Descobre eventos ambientais perto de ti, inscreve-te no voluntariado e faz parte de uma comunidade que quer mudar Portugal.',
      cta: 'Quero saber mais',
    },
    howItWorks: {
      title: 'Como Funciona',
      subtitle: 'Três passos simples para começares',
      step1: {
        title: 'Explora Eventos',
        description: 'Navega por eventos ambientais na tua zona e escolhe os que mais te interessam',
      },
      step2: {
        title: 'Inscreve-te',
        description: 'Regista-te num evento com um clique e recebe todas as informações necessárias',
      },
      step3: {
        title: 'Faz a Diferença',
        description: 'Participa e vê o impacto real da tua ação na comunidade e no planeta',
      },
    },
    forOrganizers: {
      title: 'É organizador ou empresa?',
      description: 'Publica os teus eventos, conecta-te com a nova geração voluntária e mede o impacto real das tuas ações. Temos tudo o que precisas para amplificar o teu trabalho.',
      cta: 'Começar agora',
    },
    values: {
      title: 'Os nossos valores',
      transparency: {
        title: 'Transparência',
        description: 'Todos os eventos e resultados são verificados e auditados pela nossa comunidade',
      },
      impact: {
        title: 'Impacto Positivo',
        description: 'Cada ação conta. Visualiza o impacto real do que tens feito',
      },
      community: {
        title: 'Comunidade Jovem',
        description: 'Rodeado de pessoas que partilham os mesmos valores e objetivos',
      },
    },
    testimonials: {
      title: 'O que dizem',
      subtitle: 'Histórias reais de quem está a fazer a diferença',
    },
    emailSignup: {
      title: 'Quer ser o primeiro a saber?',
      description: 'Inscreve-te para receber atualizações sobre o lançamento e eventos exclusivos',
      placeholder: 'O teu email aqui',
      button: 'Inscrever',
      success: 'Email registado com sucesso!',
    },
    footer: {
      tagline: 'Liga-te à ação que muda o planeta',
      contact: 'Contacto',
      poweredBy: 'Powered by jovens para mudar Portugal 🍃',
      copyright: 'Climate Web Lda. © 2025',
    },
  },
  en: {
    nav: {
      howItWorks: 'How It Works',
      forOrganizers: 'For Organizers',
      values: 'Values',
      community: 'Community',
    },
    hero: {
      title: 'Connect to the action that changes the planet',
      description: 'Discover environmental events near you, sign up for volunteering and be part of a community that wants to change Portugal.',
      cta: 'I want to know more',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three simple steps to get started',
      step1: {
        title: 'Explore Events',
        description: 'Browse environmental events in your area and choose the ones that interest you most',
      },
      step2: {
        title: 'Sign Up',
        description: 'Register for an event with one click and receive all the necessary information',
      },
      step3: {
        title: 'Make a Difference',
        description: 'Participate and see the real impact of your action on the community and the planet',
      },
    },
    forOrganizers: {
      title: 'Are you an organizer or company?',
      description: 'Publish your events, connect with the new volunteer generation and measure the real impact of your actions. We have everything you need to amplify your work.',
      cta: 'Get Started',
    },
    values: {
      title: 'Our Values',
      transparency: {
        title: 'Transparency',
        description: 'All events and results are verified and audited by our community',
      },
      impact: {
        title: 'Positive Impact',
        description: 'Every action counts. Visualize the real impact of what you have done',
      },
      community: {
        title: 'Young Community',
        description: 'Surrounded by people who share the same values and goals',
      },
    },
    testimonials: {
      title: 'What They Say',
      subtitle: 'Real stories from those making a difference',
    },
    emailSignup: {
      title: 'Want to be the first to know?',
      description: 'Sign up to receive updates about the launch and exclusive events',
      placeholder: 'Your email here',
      button: 'Subscribe',
      success: 'Email registered successfully!',
    },
    footer: {
      tagline: 'Connect to the action that changes the planet',
      contact: 'Contact',
      poweredBy: 'Powered by young people to change Portugal 🍃',
      copyright: 'Climate Web Lda. © 2025',
    },
  },
} as const


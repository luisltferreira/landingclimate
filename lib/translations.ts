export type Language = 'pt' | 'en'

export const translations = {
  pt: {
    nav: {
      howItWorks: 'Como Funciona',
      forOrganizers: 'Para Organizadores',
      values: 'Valores',
      community: 'Comunidade',
      recognition: 'Reconhecimento',
      faq: 'FAQ',
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
    recognition: {
      title: 'Reconhecidos pela Nossa Visão',
      award: '🏆 Vencedores do Step Up to Start Up 2024',
      description1: 'A Climate conquistou o primeiro lugar na edição inaugural do Step Up to Start Up, o programa de empreendedorismo para jovens mais reconhecido em Portugal.',
      description2: 'Fomos selecionados entre dezenas de projetos e apresentámos a nossa missão perante um júri composto por líderes empresariais de referência. O resultado: 30.000€ de prémio e mentorship para transformar a forma como Portugal age pelo ambiente.',
      description3: 'Este reconhecimento valida a força da nossa ideia e reforça o compromisso de criar impacto positivo, mensurável e real.',
    },
    emailSignup: {
      title: 'Quer ser o primeiro a saber?',
      description: 'Inscreve-te para receber atualizações sobre o lançamento e eventos exclusivos',
      placeholder: 'O teu email aqui',
      button: 'Inscrever',
      success: 'Email registado com sucesso!',
    },
    featuredIn: {
      title: 'Destaque em',
      logos: [
        { name: 'Funds People', src: '/logos/fundspeople.png', alt: 'Funds People' },
        { name: 'Instituto Rodrigo Guimarães', src: '/logos/irg.png', alt: 'Instituto Rodrigo Guimarães' },
        { name: 'O Jornal Económico', src: '/logos/jornaleconomico.png', alt: 'O Jornal Económico' },
        { name: 'Revista Empreendedor', src: '/logos/revistaempreendedor.png', alt: 'Revista Empreendedor' },
        { name: 'Step Up to Startup', src: '/logos/stepuptostartup.png', alt: 'Step Up to Startup' },
      ],
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Tens dúvidas? Encontra aqui as respostas',
      questions: [
        {
          question: 'O que é a Climate?',
          answer: 'A Climate é uma plataforma digital que liga pessoas e organizações a eventos ecológicos reais, promovendo impacto positivo e comunidade ativa.',
        },
        {
          question: 'Como posso participar em eventos?',
          answer: 'Basta registares-te na app ou site, explorares os eventos disponíveis perto de ti e inscreveres-te num clique, é simples e aberto a todos.',
        },
        {
          question: 'Tenho de pagar para participar?',
          answer: 'A participação nos eventos é gratuita, salvo indicação especial do organizador (por exemplo, workshops premium ou experiências exclusivas).',
        },
        {
          question: 'A Climate organiza eventos diretamente?',
          answer: 'Não. A Climate é apenas a plataforma, os eventos são criados e geridos pelos próprios organizadores. O nosso papel é facilitar a ligação e dinamizar a comunidade.',
        },
        {
          question: 'Que tipo de eventos encontro na Climate?',
          answer: 'Ações de voluntariado ambiental, limpezas, plantação de árvores, workshops, talks, jornadas ecológicas, atividades de teambuilding sustentável e muito mais.',
        },
      ],
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
      recognition: 'Recognition',
      faq: 'FAQ',
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
    recognition: {
      title: 'Recognized for Our Vision',
      award: '🏆 Winners of Step Up to Start Up 2024',
      description1: 'Climate won first place in the inaugural edition of Step Up to Start Up, Portugal\'s most recognized entrepreneurship program for young people.',
      description2: 'We were selected among dozens of projects and presented our mission before a jury composed of leading business leaders. The result: €30,000 prize and mentorship to transform how Portugal acts for the environment.',
      description3: 'This recognition validates the strength of our idea and reinforces our commitment to creating positive, measurable, and real impact.',
    },
    emailSignup: {
      title: 'Want to be the first to know?',
      description: 'Sign up to receive updates about the launch and exclusive events',
      placeholder: 'Your email here',
      button: 'Subscribe',
      success: 'Email registered successfully!',
    },
    featuredIn: {
      title: 'Featured In',
      logos: [
        { name: 'Funds People', src: '/logos/fundspeople.png', alt: 'Funds People' },
        { name: 'Instituto Rodrigo Guimarães', src: '/logos/irg.png', alt: 'Instituto Rodrigo Guimarães' },
        { name: 'O Jornal Económico', src: '/logos/jornaleconomico.png', alt: 'O Jornal Económico' },
        { name: 'Revista Empreendedor', src: '/logos/revistaempreendedor.png', alt: 'Revista Empreendedor' },
        { name: 'Step Up to Startup', src: '/logos/stepuptostartup.png', alt: 'Step Up to Startup' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Have questions? Find the answers here',
      questions: [
        {
          question: 'What is Climate?',
          answer: 'Climate is a digital platform that connects people and organizations to real ecological events, promoting positive impact and an active community.',
        },
        {
          question: 'How can I participate in events?',
          answer: 'Simply register on the app or website, explore available events near you, and sign up with one click. It\'s simple and open to everyone.',
        },
        {
          question: 'Do I have to pay to participate?',
          answer: 'Event participation is free, unless otherwise indicated by the organizer (for example, premium workshops or exclusive experiences).',
        },
        {
          question: 'Does Climate organize events directly?',
          answer: 'No. Climate is just the platform. Events are created and managed by the organizers themselves. Our role is to facilitate connections and energize the community.',
        },
        {
          question: 'What types of events can I find on Climate?',
          answer: 'Environmental volunteer actions, cleanups, tree planting, workshops, talks, ecological days, sustainable teambuilding activities, and much more.',
        },
      ],
    },
    footer: {
      tagline: 'Connect to the action that changes the planet',
      contact: 'Contact',
      poweredBy: 'Powered by young people to change Portugal 🍃',
      copyright: 'Climate Web Lda. © 2025',
    },
  },
} as const


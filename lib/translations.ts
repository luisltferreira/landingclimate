export type Language = 'pt' | 'en'

export const translations = {
  pt: {
    nav: {
      aboutUs: 'Quem Somos?',
    },
    aboutUs: {
      title: 'Quem somos',
      intro: 'A Climate nasceu de uma frustração simples: queríamos fazer voluntariado ambiental, mas era difícil encontrar onde, como e quando.',
      objective: 'O nosso papel é tirar a fricção do processo. Queremos ligar a tua vontade de agir a quem já está no terreno a trabalhar, sem voltas nem complicações.',
      vision: 'Viver num mundo em que participar em ações ecológicas é tão fácil, natural e frequente como abrir uma app de redes sociais.',
      history: {
        title: 'Como viemos parar aqui',
        paragraph1: 'A história é curta. Falamos muito sobre o clima, vemos as notícias e ficamos ansiosos. Mas quando decidíamos "ok, vou fazer alguma coisa este fim de semana", batíamos numa parede.',
        paragraph2: 'A informação estava espalhada: posts de Instagram perdidos, formulários que ninguém responde, sites que não funcionam no telemóvel. Nunca sabíamos se a ação era séria, se ia aparecer alguém ou se estávamos só a perder tempo.',
        paragraph3: 'Não inventámos o voluntariado. Decidimos apenas organizá-lo. Criámos uma plataforma que centraliza o que interessa: onde é, a que horas e o que é preciso fazer.',
        paragraph4: 'Em 2024, levámos esta ideia a concurso no Step Up to Start Up. O júri percebeu que não estávamos a brincar e ganhámos o 1.º lugar (e o financiamento) para transformar este plano numa ferramenta real.',
        paragraph5: 'Hoje estamos a construir a primeira versão da app e a falar com quem realmente percebe disto: as ONGs e os municípios. O objetivo é garantir que, quando tu chegares, tudo funciona.',
      },
      missionVision: {
        title: 'O que nos move',
        mission: {
          title: 'Missão',
          text: 'Tornar o voluntariado ambiental acessível, rápido e sem burocracias desnecessárias.',
        },
        vision: {
          title: 'Visão',
          text: 'Uma comunidade onde agir pelo planeta não é um evento especial, mas parte do dia a dia de qualquer jovem europeu.',
        },
        values: {
          title: 'Os nossos princípios',
          transparency: {
            title: 'Sem letras pequenas',
            text: 'Sabes quem organiza, o que vais fazer e para onde vai o teu esforço. Sem rodeios.',
          },
          impact: {
            title: 'Fazer, não só parecer',
            text: 'Não queremos ações para a fotografia. Queremos trabalho sujo, árvores plantadas e quilos de lixo recolhidos.',
          },
          community: {
            title: 'Gente como tu',
            text: 'Não somos uma corporação. Somos jovens a falar para jovens, com a mesma linguagem e as mesmas preocupações.',
          },
          action: {
            title: 'Mãos na massa',
            text: 'Menos manifestos, mais ação. A Climate serve para te tirar de casa e pôr-te no terreno.',
          },
          simplicity: {
            title: 'Não complicar',
            text: 'Se demoras mais de 2 minutos a inscrever-te, falhámos. A tecnologia serve para facilitar, não para estorvar.',
          },
          credibility: {
            title: 'Confiança',
            text: 'Só trabalhamos com organizações validadas. O teu tempo é valioso e não o vamos desperdiçar em iniciativas duvidosas.',
          },
        },
      },
      team: {
        title: 'Quem está a construir isto',
        description: 'Somos uma equipa pequena e teimosa. Acreditamos que a tecnologia pode e deve servir para resolver problemas reais, não apenas para nos manter colados ao ecrã.',
        founders: [
          {
            name: 'Luís Ferreira',
            role: 'Co-fundador',
            bio: 'A sua visão para a Climate nasceu da necessidade de um hub centralizado e credível para ações ecológicas. É responsável por garantir que a plataforma é a solução mais eficiente e transparente para mobilizar a nova geração.',
          },
          {
            name: 'Rodrigo Azevedo',
            role: 'Co-fundador',
            bio: 'Acredita que uma boa app pode tirar o voluntariado das folhas de Excel e dos grupos de WhatsApp e colocá-lo no bolso de toda a gente.',
          },
          {
            name: 'Santiago Cardoso',
            role: 'Co-fundador',
            bio: 'Passionado por produto, tecnologia e pessoas. Acredita que boas experiências digitais podem transformar a forma como nos envolvemos com causas ambientais.',
          },
        ],
        mentors: 'Não sabemos tudo, por isso rodeámo-nos de mentores e parceiros que nos ajudam a manter os pés no chão e o foco no que importa.',
      },
      achievements: {
        title: 'O que já fizemos (antes da app)',
        intro: 'Ainda não lançámos a app, mas não estivemos parados. Se estás a ler isto, já fazes parte do início.',
        subtitle: 'Até agora:',
        items: [
          'Vencemos a 1.ª edição do Step Up to Start Up 2024 (o prémio de 30.000€ está a pagar o desenvolvimento).',
          'Lançámos a nossa presença online para juntar os primeiros interessados.',
          'Estamos em conversações diretas com autarquias e ONGs para garantir que há eventos de qualidade no lançamento.',
          'Reunimos um grupo de teste pronto para partir tudo na primeira versão da app (para a podermos corrigir).',
        ],
        conclusion: 'Isto é só o aquecimento.',
      },
      next: {
        title: 'Próximos passos (e o teu papel)',
        subtitle: 'Nos próximos meses:',
        items: [
          'Vamos lançar os primeiros eventos-piloto (coisas pequenas, para testar).',
          'Abrir a app a um grupo restrito para encontrar bugs e melhorar a experiência.',
          'Afina o processo para organizadores e voluntários.',
          'Preparar a expansão para mais cidades em Portugal.',
        ],
        cta: {
          title: 'Como podes entrar agora:',
          organizer: {
            title: 'És organizador ou tens um projeto?',
            text: 'Usa a Climate para gerir inscrições e encontrar voluntários sem dores de cabeça.',
          },
          participant: {
            title: 'Queres só ajudar?',
            text: 'Junta-te à lista de espera. Prometemos que és o primeiro a saber quando abrirmos as portas.',
          },
        },
        conclusion: 'A Climate é a ferramenta. A ação é tua.',
      },
      links: {
        stepUp1: 'https://www.empreendedor.com/climate-vence-primeira-edicao-do-step-up-com-premio-de-30-mil-euros/',
        stepUp2: 'https://step-up.pt',
        cascais: 'https://ambiente.cascais.pt/pt/page/voluntariado-ambiental',
        ipdj: 'https://ipdj.gov.pt/voluntariado-jovem-para-a-natureza-e-florestas',
      },
    },
    hero: {
      title: 'Liga-te à ação que muda o planeta',
      titleBreak: 'Liga-te à ação que',
      titleBreak2: 'muda o planeta',
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
      title: 'Quero ser organizador!',
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
      action: {
        title: 'Ação real',
        description: 'Eventos práticos, no terreno, com resultados que se veem e se sentem.',
      },
      simplicity: {
        title: 'Simplicidade',
        description: 'Encontrar, escolher e participar em eventos ecológicos em poucos cliques, sem burocracias.',
      },
      credibility: {
        title: 'Credibilidade',
        description: 'Parcerias com organizações e projetos validados, para que saibas sempre onde estás a pôr a tua energia.',
      },
    },
    recognition: {
      title: 'Reconhecidos pela Nossa Visão',
      award: 'Vencedores do Step Up to Start Up 2024',
      description1: 'A Climate conquistou o primeiro lugar na edição inaugural do Step Up to Start Up, o programa de empreendedorismo para jovens mais reconhecido em Portugal.',
      description2: 'Fomos selecionados entre dezenas de projetos e apresentámos a nossa missão perante um júri composto por líderes empresariais de referência. O resultado: 30.000€ de prémio e mentorship para transformar a forma como Portugal age pelo ambiente.',
      description3: 'Este reconhecimento valida a força da nossa ideia e reforça o compromisso de criar impacto positivo, mensurável e real.',
      cta: 'Conhece a equipa',
    },
    emailSignup: {
      title: 'Queres ser o primeiro a saber?',
      description: 'Inscreve-te para receberes atualizações sobre o lançamento e eventos exclusivos',
      placeholder: 'O teu email aqui',
      button: 'Inscrever',
      success: 'Email registado com sucesso!',
    },
    featuredIn: {
      title: 'Apoiado por',
      logos: [
        { name: 'Instituto Rodrigo Guimarães', src: '/logos/irg.png', alt: 'Instituto Rodrigo Guimarães' },
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
          answer: 'Basta registares-te na app ou site, explorares os eventos disponíveis perto de ti e inscreveres-te num clique. É simples e aberto a todos.',
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
      poweredBy: 'Powered by jovens para mudar Portugal',
      copyright: 'Climate Web Lda. © 2025',
      treePlanting: {
        title: 'Deixa a tua marca',
        description: 'Planta uma árvore digital e faz parte do nosso bosque. Cada árvore representa um compromisso com o planeta.',
      },
    },
  },
  en: {
    nav: {
      aboutUs: 'About Us',
    },
    aboutUs: {
      title: 'Who we are',
      intro: 'Climate was born from a simple frustration: we wanted to do environmental volunteering, but it was hard to find where, how, and when.',
      objective: 'Our role is to remove friction from the process. We want to connect your will to act with those already working on the ground, without detours or complications.',
      vision: 'Living in a world where participating in ecological actions is as easy, natural, and frequent as opening a social media app.',
      history: {
        title: 'How we got here',
        paragraph1: 'The story is short. We talk a lot about climate, we see the news and get anxious. But when we decided "ok, I\'m going to do something this weekend", we hit a wall.',
        paragraph2: 'Information was scattered: lost Instagram posts, forms that no one responds to, websites that don\'t work on mobile. We never knew if the action was serious, if anyone would show up, or if we were just wasting time.',
        paragraph3: 'We didn\'t invent volunteering. We just decided to organize it. We created a platform that centralizes what matters: where it is, what time, and what needs to be done.',
        paragraph4: 'In 2024, we took this idea to the Step Up to Start Up competition. The jury understood we weren\'t playing around and we won 1st place (and the funding) to turn this plan into a real tool.',
        paragraph5: 'Today we are building the first version of the app and talking to those who really understand this: NGOs and municipalities. The goal is to ensure that when you arrive, everything works.',
      },
      missionVision: {
        title: 'What drives us',
        mission: {
          title: 'Mission',
          text: 'Make environmental volunteering accessible, fast, and without unnecessary bureaucracy.',
        },
        vision: {
          title: 'Vision',
          text: 'A community where acting for the planet is not a special event, but part of the daily life of any young European.',
        },
        values: {
          title: 'Our principles',
          transparency: {
            title: 'No fine print',
            text: 'You know who organizes, what you\'ll do, and where your effort goes. No detours.',
          },
          impact: {
            title: 'Do, don\'t just seem',
            text: 'We don\'t want actions for the photo. We want dirty work, trees planted, and kilos of trash collected.',
          },
          community: {
            title: 'People like you',
            text: 'We\'re not a corporation. We\'re young people talking to young people, with the same language and the same concerns.',
          },
          action: {
            title: 'Hands-on',
            text: 'Less manifestos, more action. Climate exists to get you out of the house and put you on the ground.',
          },
          simplicity: {
            title: 'Don\'t complicate',
            text: 'If it takes you more than 2 minutes to sign up, we\'ve failed. Technology serves to facilitate, not to hinder.',
          },
          credibility: {
            title: 'Trust',
            text: 'We only work with validated organizations. Your time is valuable and we won\'t waste it on questionable initiatives.',
          },
        },
      },
      team: {
        title: 'Who\'s building this',
        description: 'We are a small and stubborn team. We believe that technology can and should serve to solve real problems, not just to keep us glued to the screen.',
        founders: [
          {
            name: 'Luís Ferreira',
            role: 'Co-founder',
            bio: 'His vision for Climate was born from the need for a centralized and credible hub for ecological actions. He is responsible for ensuring that the platform is the most efficient and transparent solution to mobilize the new generation.',
          },
          {
            name: 'Rodrigo Azevedo',
            role: 'Co-founder',
            bio: 'Passionate about product, technology and people. Believes that good digital experiences can take volunteering out of spreadsheets, scattered groups and lost emails, and put it on the phone of those who want to participate.',
          },
          {
            name: 'Santiago Cardoso',
            role: 'Co-founder',
            bio: 'Passionate about product, technology and people. Believes that good digital experiences can transform how we engage with environmental causes.',
          },
        ],
        mentors: 'We don\'t know everything, so we surround ourselves with mentors and partners who help us keep our feet on the ground and focus on what matters.',
      },
      achievements: {
        title: 'What we\'ve done (before the app)',
        intro: 'We haven\'t launched the app yet, but we haven\'t been idle. If you\'re reading this, you\'re already part of the beginning.',
        subtitle: 'So far:',
        items: [
          'We won the 1st edition of Step Up to Start Up 2024 (the €30,000 prize is paying for development).',
          'We launched our online presence to gather the first interested people.',
          'We\'re in direct conversations with municipalities and NGOs to ensure there are quality events at launch.',
          'We\'ve gathered a test group ready to break everything in the first version of the app (so we can fix it).',
        ],
        conclusion: 'This is just the warm-up.',
      },
      next: {
        title: 'Next steps (and your role)',
        subtitle: 'In the coming months:',
        items: [
          'We\'ll launch the first pilot events (small things, to test).',
          'Open the app to a restricted group to find bugs and improve the experience.',
          'Fine-tune the process for organizers and volunteers.',
          'Prepare expansion to more cities in Portugal.',
        ],
        cta: {
          title: 'How you can get involved now:',
          organizer: {
            title: 'Are you an organizer or have a project?',
            text: 'Use Climate to manage registrations and find volunteers without headaches.',
          },
          participant: {
            title: 'Just want to help?',
            text: 'Join the waiting list. We promise you\'ll be the first to know when we open the doors.',
          },
        },
        conclusion: 'Climate is the tool. The action is yours.',
      },
      links: {
        stepUp1: 'https://www.empreendedor.com/climate-vence-primeira-edicao-do-step-up-com-premio-de-30-mil-euros/',
        stepUp2: 'https://step-up.pt',
        cascais: 'https://ambiente.cascais.pt/pt/page/voluntariado-ambiental',
        ipdj: 'https://ipdj.gov.pt/voluntariado-jovem-para-a-natureza-e-florestas',
      },
    },
    hero: {
      title: 'Connect to the action that changes the planet',
      titleBreak: 'Connect to the action that',
      titleBreak2: 'changes the planet',
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
      title: 'I want to be an organizer!',
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
      action: {
        title: 'Real Action',
        description: 'Practical events, on the ground, with results that can be seen and felt.',
      },
      simplicity: {
        title: 'Simplicity',
        description: 'Find, choose and participate in ecological events in a few clicks, without bureaucracy.',
      },
      credibility: {
        title: 'Credibility',
        description: 'Partnerships with validated organizations and projects, so you always know where you are putting your energy.',
      },
    },
    recognition: {
      title: 'Recognized for Our Vision',
      award: 'Winners of Step Up to Start Up 2024',
      description1: 'Climate won first place in the inaugural edition of Step Up to Start Up, Portugal\'s most recognized entrepreneurship program for young people.',
      description2: 'We were selected among dozens of projects and presented our mission before a jury composed of leading business leaders. The result: €30,000 prize and mentorship to transform how Portugal acts for the environment.',
      description3: 'This recognition validates the strength of our idea and reinforces our commitment to creating positive, measurable, and real impact.',
      cta: 'Meet the team',
    },
    emailSignup: {
      title: 'Want to be the first to know?',
      description: 'Sign up to receive updates about the launch and exclusive events',
      placeholder: 'Your email here',
      button: 'Subscribe',
      success: 'Email registered successfully!',
    },
    featuredIn: {
      title: 'Supported by',
      logos: [
        { name: 'Instituto Rodrigo Guimarães', src: '/logos/irg.png', alt: 'Instituto Rodrigo Guimarães' },
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
      poweredBy: 'Powered by young people to change Portugal',
      copyright: 'Climate Web Lda. © 2025',
      treePlanting: {
        title: 'Leave your mark',
        description: 'Plant a digital tree and be part of our forest. Each tree represents a commitment to the planet.',
      },
    },
  },
} as const


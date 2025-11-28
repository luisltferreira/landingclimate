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
      intro: 'Climate is a startup created by young people who got tired of seeing the will to change the world... stuck in the scroll.',
      objective: 'The goal is simple: make it easy, fast and transparent to connect those who, like you, want to act, with those who already organize real ecological actions on the ground.',
      vision: 'Living in a world where participating in ecological actions is as easy, natural, and frequent as opening a social media app.',
      history: {
        title: 'Our story',
        paragraph1: 'It all starts with a feeling you\'ve probably also felt: we talk more and more about climate, catastrophes, global warming, but when you want to "do something", it\'s hard to know where to start.',
        paragraph2: 'Events are scattered across loose posts, hard-to-find forms, stories that disappear. You don\'t always know if the initiative is credible, if people will show up, if it really makes a difference, or if you\'re just left with the feeling that you\'ve wasted time.',
        paragraph3: 'We decided to turn that frustration into a concrete solution: create a platform where you can discover ecological events near you, quickly understand what you\'ll do there, sign up in a few clicks and, in the end, see the real impact of your participation.',
        paragraph4: 'In 2024, this idea came off the paper and reached the stage: Climate won the 1st edition of Step Up to Start Up, receiving 30,000 euros to develop the MVP and start validating it with the community and with organizations that are already working on the ground.',
        paragraph5: 'Today we are building the first version of the app, talking to NGOs, companies, municipalities and environmental volunteering programs, and gathering the first members of the Climate community — people like you, who want to trade climate anxiety for climate action.',
      },
      missionVision: {
        title: 'Mission, vision and values',
        mission: {
          title: 'Mission',
          text: 'Facilitate your participation in real ecological actions, bringing together people, organizations and companies through a simple, transparent and human platform.',
        },
        vision: {
          title: 'Vision',
          text: 'To be the most intuitive, inspiring and accessible way to do environmental volunteering in Europe, starting in Portugal but thinking from the beginning of a community that knows no borders.',
        },
        values: {
          title: 'Values',
          transparency: {
            title: 'Transparency',
            text: 'You deserve to know who organizes the event, what will happen, how it\'s planned and what the expected impact is. Information should be clear, direct and accessible.',
          },
          impact: {
            title: 'Positive Impact',
            text: 'Each event on Climate must contribute in a real way to the environment or the community. We don\'t want symbolic actions just for the photo; we want results that are measured and felt.',
          },
          community: {
            title: 'Young Community',
            text: 'We believe that your generation has a central role in the ecological transition. Climate is designed for you, for your friends, for your language and for your daily life.',
          },
          action: {
            title: 'Real Action',
            text: 'Less empty speeches, more feet on the ground, hands in the earth, trash removed from where it shouldn\'t be, new trees growing. Climate exists to help you move from intention to practice.',
          },
          simplicity: {
            title: 'Simplicity',
            text: 'If it\'s complicated, it doesn\'t work. We want you to be able to find, choose and participate in ecological events in a few clicks, without bureaucracy, endless forms or confusing information.',
          },
          credibility: {
            title: 'Credibility',
            text: 'Your time counts. That\'s why we work with validated organizations and partners, so you can trust that the effort you make is well invested, both in terms of environmental impact and personal experience.',
          },
        },
      },
      team: {
        title: 'Who\'s behind',
        description: 'Behind Climate is a small, but very stubborn team, that believes technology and community can work together to create real impact.',
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
        mentors: 'At this initial stage, we surround ourselves with mentors and partners who help us make better decisions, learn fast and keep our feet grounded in data, real feedback and measurable impact.',
      },
      achievements: {
        title: 'What you\'ve already done with us, even before the app existed',
        intro: 'If you\'re reading this, you\'ve probably been through the landing page, thought about signing up or, with luck, already been part of the first tests.',
        subtitle: 'So far, we\'ve managed to:',
        items: [
          'Win the 1st edition of Step Up to Start Up 2024, with a prize of 30,000 euros that is funding Climate\'s development.',
          'Design and launch a first public version of the online presence, to start attracting interested people and organizations.',
          'Start conversations with NGOs, municipalities and environmental volunteering programs in Portugal, who are looking for better ways to involve young people in on-the-ground actions.',
          'Gather an initial base of curious people, testers and future ambassadors ready to try the platform as soon as it\'s ready.',
        ],
        conclusion: 'None of this is the final goal. It\'s just the first step.',
      },
      next: {
        title: 'What\'s next and where you come in',
        subtitle: 'In the coming months we will:',
        items: [
          'Launch the first pilot events in partnership with environmental organizations and local projects.',
          'Open access to an initial version of the app to a limited group of users, to test, listen to feedback and improve quickly.',
          'Refine the experience both for those who participate in events and for those who organize them, ensuring that Climate is useful on both sides.',
          'Prepare the ground for an Iberian expansion and, later, European, as we understand what works best.',
        ],
        cta: {
          title: 'If you see yourself in this, there are several ways to get involved now:',
          organizer: {
            title: 'Want to organize ecological events or already have a project on the ground?',
            text: 'You can use Climate to promote actions, find volunteers and measure the impact of your initiatives.',
          },
          participant: {
            title: 'Want to simply start participating?',
            text: 'You can join the initial community, receive news about events and be among the first people to test the app.',
          },
        },
        conclusion: 'Climate exists to help you transform intention into action. The rest we\'ll build together, step by step.',
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


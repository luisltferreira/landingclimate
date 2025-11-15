# Configuração do Google Analytics

Este projeto inclui integração com Google Analytics 4 (GA4) para rastrear eventos e interações dos utilizadores.

## 📊 O que está a ser rastreado:

### Eventos Automáticos:
- **Page views** - Rastreado automaticamente pelo GA4
- **Scroll depth** - Rastreado automaticamente

### Eventos Personalizados:
1. **Email Signup** - Quando alguém se inscreve no formulário
2. **CTA Clicks** - Cliques nos botões principais (Hero, For Organizers)
3. **Navigation Clicks** - Cliques nos links de navegação
4. **FAQ Opens** - Quando alguém abre uma pergunta no FAQ
5. **Language Changes** - Quando o utilizador muda de idioma (PT/EN)
6. **External Links** - Cliques em links externos (Instagram, Google Forms)

## 🔧 Como Configurar:

### 1. Criar uma Conta Google Analytics

1. Vai a https://analytics.google.com/
2. Cria uma conta (se ainda não tiveres)
3. Cria uma propriedade para o teu site
4. Seleciona "Web" como plataforma
5. Copia o **Measurement ID** (formato: `G-XXXXXXXXXX`)

### 2. Configurar no Vercel

1. Vai ao teu projeto no Vercel Dashboard
2. Settings → Environment Variables
3. Adiciona:
   ```
   Name: NEXT_PUBLIC_GA_ID
   Value: G-XXXXXXXXXX (o teu Measurement ID)
   ```
4. Seleciona os ambientes: Production, Preview, Development
5. Clica em Save

### 3. Redeploy

Após adicionar a variável, faz redeploy do projeto para que as alterações tenham efeito.

## 📈 Ver Dados:

1. Vai a https://analytics.google.com/
2. Seleciona a tua propriedade
3. Vai a **Reports** → **Realtime** para ver dados em tempo real
4. Vai a **Events** para ver os eventos personalizados

## 🔍 Eventos Disponíveis:

Todos os eventos estão definidos em `lib/analytics.ts`:

- `analytics.emailSignup(method)` - Rastreia subscrições
- `analytics.ctaClick(location)` - Rastreia cliques em CTAs
- `analytics.navClick(section)` - Rastreia navegação
- `analytics.faqOpen(question)` - Rastreia abertura de FAQ
- `analytics.languageChange(language)` - Rastreia mudança de idioma
- `analytics.externalLink(url)` - Rastreia links externos

## 💡 Notas:

- O Analytics só funciona se a variável `NEXT_PUBLIC_GA_ID` estiver configurada
- Se não estiver configurada, o componente não renderiza nada (não causa erros)
- Os eventos são enviados automaticamente para o Google Analytics
- Podes criar relatórios personalizados no GA4 baseados nestes eventos


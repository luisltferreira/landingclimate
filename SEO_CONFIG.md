# Configuração de SEO

Este projeto inclui otimizações completas de SEO implementadas.

## ✅ O que está implementado:

### 1. **Metadata Completa**
- Open Graph tags para partilhas no Facebook, LinkedIn, etc.
- Twitter Cards para partilhas no Twitter/X
- Metadata dinâmica com títulos e descrições
- Keywords otimizados
- Canonical URLs

### 2. **Schema.org (Structured Data)**
- Organization schema
- WebSite schema
- SoftwareApplication schema
- Melhora a exibição nos resultados de pesquisa do Google

### 3. **Sitemap e Robots.txt**
- Sitemap automático em `/sitemap.xml`
- Robots.txt em `/robots.txt`
- Configurado para permitir indexação

### 4. **Configuração do Site URL**

Para que o SEO funcione corretamente, configura a variável de ambiente:

**No Vercel:**
1. Vai a Settings → Environment Variables
2. Adiciona:
   ```
   NEXT_PUBLIC_SITE_URL=https://teu-dominio.vercel.app
   ```
   ou
   ```
   NEXT_PUBLIC_SITE_URL=https://climateweb.pt
   ```

**Localmente (.env.local):**
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📊 Verificar SEO

### Ferramentas úteis:
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **Google Search Console**: Para monitorizar indexação

## 🔍 O que verificar:

1. ✅ Sitemap acessível em `https://teu-dominio.com/sitemap.xml`
2. ✅ Robots.txt acessível em `https://teu-dominio.com/robots.txt`
3. ✅ Schema.org válido (testar com Rich Results Test)
4. ✅ Open Graph funcionando (testar com Facebook Debugger)
5. ✅ Twitter Cards funcionando (testar com Twitter Validator)

## 📝 Notas:

- O sitemap é gerado automaticamente pelo Next.js
- O robots.txt é gerado automaticamente pelo Next.js
- Os Schema.org scripts são injetados no HTML
- As imagens Open Graph devem ter pelo menos 1200x630px para melhor resultado


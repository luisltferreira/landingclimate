# Configuração do Mailchimp

## Passos para configurar:

1. **Criar conta no Mailchimp** (se ainda não tiveres)
   - Vai a https://mailchimp.com/
   - Cria uma conta gratuita

2. **Criar uma Audience (Lista)**
   - No dashboard do Mailchimp, vai a "Audience"
   - Cria uma nova Audience
   - Guarda o **Audience ID** (encontra-se em: Audience > Settings > Audience name and defaults)

3. **Obter a API Key**
   - Vai a Account > Extras > API keys
   - Cria uma nova API key
   - Copia a chave completa (formato: `xxxxx-us1` ou similar)

4. **Configurar variáveis de ambiente**
   - Cria um ficheiro `.env.local` na raiz do projeto
   - Adiciona:
   ```
   MAILCHIMP_API_KEY=sua-api-key-aqui
   MAILCHIMP_AUDIENCE_ID=seu-audience-id-aqui
   ```

5. **Reiniciar o servidor**
   - Para as alterações terem efeito, reinicia o servidor de desenvolvimento

## Nota:
- Se não configurares as variáveis, o formulário ainda funciona mas apenas regista no console (modo desenvolvimento)
- Os emails serão adicionados diretamente à tua Audience no Mailchimp
- O status padrão é 'subscribed' (podes mudar para 'pending' para double opt-in)


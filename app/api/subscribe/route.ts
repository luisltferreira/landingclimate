import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validar email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Verificar se as variáveis de ambiente estão configuradas
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
    const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID

    if (!mailchimpApiKey || !mailchimpAudienceId) {
      console.error('Mailchimp não configurado. Verifica as variáveis de ambiente.')
      // Em desenvolvimento, apenas logar
      console.log('Novo email subscrito (dev):', email)
      return NextResponse.json(
        { success: true, message: 'Email registado com sucesso!' },
        { status: 200 }
      )
    }

    // Extrair o server prefix da API key (formato: xxxxx-us1, xxxxx-us2, etc.)
    const parts = mailchimpApiKey.split('-')
    const serverPrefix = parts[parts.length - 1] // Pega a última parte (us1, us2, etc.)
    const mailchimpUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`

    // Adicionar membro ao Mailchimp
    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${mailchimpApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed', // ou 'pending' para double opt-in
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      // Se o email já existe, consideramos sucesso
      if (data.title === 'Member Exists') {
        return NextResponse.json(
          { success: true, message: 'Email já está registado!' },
          { status: 200 }
        )
      }
      
      throw new Error(data.detail || 'Erro ao adicionar ao Mailchimp')
    }

    return NextResponse.json(
      { success: true, message: 'Email registado com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao processar subscrição:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erro ao processar subscrição' },
      { status: 500 }
    )
  }
}


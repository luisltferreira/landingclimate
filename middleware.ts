import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  // Detectar domínio e definir idioma padrão
  let defaultLanguage = 'pt'
  
  if (hostname.includes('.eu')) {
    defaultLanguage = 'en'
  } else if (hostname.includes('.pt')) {
    defaultLanguage = 'pt'
  }
  
  // Criar resposta
  const response = NextResponse.next()
  const languageCookie = request.cookies.get('language')
  
  // Se não existe cookie, definir baseado no domínio
  if (!languageCookie) {
    response.cookies.set('language', defaultLanguage, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 ano
      sameSite: 'lax',
    })
  } else {
    // Se o cookie existe, verificar se corresponde ao domínio atual
    // Se o usuário mudou de domínio, atualizar para o idioma do novo domínio
    const currentDomainLanguage = hostname.includes('.eu') ? 'en' : 'pt'
    
    // Se o cookie não corresponde ao domínio, atualizar (primeira visita no novo domínio)
    if (languageCookie.value !== currentDomainLanguage) {
      // Opcional: manter preferência do usuário ou seguir domínio
      // Por padrão, vamos seguir o domínio na primeira visita
      response.cookies.set('language', currentDomainLanguage, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
      })
    }
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}


// Utility functions for tracking events

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Predefined event trackers
export const analytics = {
  // Email signup
  emailSignup: (method: 'form' | 'cta') => {
    trackEvent('email_signup', 'engagement', method)
  },

  // CTA clicks
  ctaClick: (location: string) => {
    trackEvent('cta_click', 'engagement', location)
  },

  // Navigation
  navClick: (section: string) => {
    trackEvent('navigation', 'engagement', section)
  },

  // FAQ
  faqOpen: (question: string) => {
    trackEvent('faq_open', 'engagement', question)
  },

  // External links
  externalLink: (url: string) => {
    trackEvent('external_link', 'outbound', url)
  },

      // Language change
      languageChange: (language: 'pt' | 'en') => {
        trackEvent('language_change', 'preference', language)
      },

      // Tree planting
      treePlanted: (totalTrees: number) => {
        trackEvent('tree_planted', 'engagement', 'digital_tree', totalTrees)
      },
    }

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
    dataLayer?: any[]
  }
}


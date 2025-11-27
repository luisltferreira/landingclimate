import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import ForOrganizers from '@/components/for-organizers'
import ValueHighlights from '@/components/value-highlights'
import Recognition from '@/components/recognition'
import dynamic from 'next/dynamic'

// Lazy load components below the fold for better initial page load
const FeaturedIn = dynamic(() => import('@/components/featured-in'), {
  loading: () => <div className="py-8 sm:py-12 md:py-16" />,
})
const FAQ = dynamic(() => import('@/components/faq'), {
  loading: () => <div className="py-12 sm:py-16 md:py-20" />,
})
const EmailSignup = dynamic(() => import('@/components/email-signup'), {
  loading: () => <div className="py-12 sm:py-16 md:py-20" />,
})
const Footer = dynamic(() => import('@/components/footer'))

export default function Home() {
  return (
    <main className="bg-[#191919]">
      <Navigation />
      <Hero />
      <HowItWorks />
      <ForOrganizers />
      <ValueHighlights />
      <Recognition />
      <FAQ />
      <EmailSignup />
      <FeaturedIn />
      <Footer />
    </main>
  )
}

import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import ForOrganizers from '@/components/for-organizers'
import ValueHighlights from '@/components/value-highlights'
import Testimonials from '@/components/testimonials'
import EmailSignup from '@/components/email-signup'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <HowItWorks />
      <ForOrganizers />
      <ValueHighlights />
      <Testimonials />
      <EmailSignup />
      <Footer />
    </main>
  )
}

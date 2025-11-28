import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import dynamic from 'next/dynamic'

// Lazy load all components below the fold for better initial page load
const HowItWorks = dynamic(() => import('@/components/how-it-works'), {
  loading: () => (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#191919] min-h-[400px]">
      <div className="max-w-6xl mx-auto animate-pulse">
        <div className="h-12 bg-[#2a2a2a] rounded w-64 mx-auto mb-8"></div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-[#2a2a2a] rounded-2xl"></div>
          ))}
        </div>
      </div>
    </section>
  ),
})

const ForOrganizers = dynamic(() => import('@/components/for-organizers'), {
  loading: () => (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#191919] min-h-[300px]">
      <div className="max-w-5xl mx-auto animate-pulse">
        <div className="h-80 bg-[#2a2a2a] rounded-2xl"></div>
      </div>
    </section>
  ),
})

const ValueHighlights = dynamic(() => import('@/components/value-highlights'), {
  loading: () => (
    <section className="py-12 sm:py-16 md:py-20 px-0 bg-[#191919] min-h-[400px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 animate-pulse">
        <div className="h-12 bg-[#2a2a2a] rounded w-64 mx-auto mb-8"></div>
      </div>
    </section>
  ),
})

const Recognition = dynamic(() => import('@/components/recognition'), {
  loading: () => (
    <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-[#191919] min-h-[300px]">
      <div className="max-w-6xl mx-auto animate-pulse">
        <div className="h-64 bg-[#2a2a2a] rounded-2xl"></div>
      </div>
    </section>
  ),
})

const FAQ = dynamic(() => import('@/components/faq'), {
  loading: () => (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#191919] min-h-[500px]">
      <div className="max-w-4xl mx-auto animate-pulse">
        <div className="h-12 bg-[#2a2a2a] rounded w-64 mx-auto mb-8"></div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-24 bg-[#2a2a2a] rounded-xl"></div>
          ))}
        </div>
      </div>
    </section>
  ),
})

const EmailSignup = dynamic(() => import('@/components/email-signup'), {
  loading: () => (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#d5ffa1] min-h-[300px]">
      <div className="max-w-2xl mx-auto animate-pulse">
        <div className="h-12 bg-[#191919]/20 rounded w-64 mx-auto mb-8"></div>
        <div className="h-16 bg-[#191919]/20 rounded-lg"></div>
      </div>
    </section>
  ),
})

const FeaturedIn = dynamic(() => import('@/components/featured-in'), {
  loading: () => (
    <section className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 bg-[#191919] min-h-[100px]">
      <div className="max-w-6xl mx-auto animate-pulse">
        <div className="h-16 bg-[#2a2a2a] rounded w-48 mx-auto"></div>
      </div>
    </section>
  ),
})

const Footer = dynamic(() => import('@/components/footer'), {
  loading: () => (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-[#191919] min-h-[200px]">
      <div className="max-w-6xl mx-auto animate-pulse">
        <div className="h-32 bg-[#2a2a2a] rounded"></div>
      </div>
    </footer>
  ),
})

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

'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EmailSignup from '@/components/email-signup'
import { useLanguage } from '@/contexts/language-context'
import { Target, Eye, Users, Zap, MousePointerClick, BadgeCheck, CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

function FounderCard({ founder, photoPath, index, isRevealed }: { 
  founder: { name: string; role: string; bio: string }
  photoPath: string
  index: number
  isRevealed: boolean
}) {
  const [imgSrc, setImgSrc] = useState(photoPath)
  
  return (
    <div 
      className={`p-6 sm:p-8 bg-[#2a2a2a] rounded-2xl border border-[#d5ffa1]/30 hover:border-[#d5ffa1] transition-all duration-500 hover-lift group ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
    >
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#d5ffa1]/30 group-hover:border-[#d5ffa1] transition-colors duration-300">
        <Image
          src={imgSrc}
          alt={founder.name}
          fill
          className="object-cover"
          onError={() => {
            // Fallback to placeholder if image doesn't exist
            setImgSrc('/placeholder-user.jpg')
          }}
        />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center group-hover:text-[#d5ffa1] transition-colors">
        {founder.name}
      </h3>
      <span className="inline-block w-full text-center px-3 py-1 rounded-full bg-[#d5ffa1]/10 text-[#d5ffa1] text-xs font-bold uppercase tracking-wider mb-4">
        {founder.role}
      </span>
      <p className="text-sm sm:text-base text-white leading-relaxed text-center">
        {founder.bio}
      </p>
    </div>
  )
}

export default function AboutUs() {
  const { t } = useLanguage()
  const { ref: heroRef, isRevealed: isHeroRevealed } = useScrollReveal()
  const { ref: historyRef, isRevealed: isHistoryRevealed } = useScrollReveal()
  const { ref: missionRef, isRevealed: isMissionRevealed } = useScrollReveal()
  const { ref: teamRef, isRevealed: isTeamRevealed } = useScrollReveal()
  const { ref: achievementsRef, isRevealed: isAchievementsRevealed } = useScrollReveal()
  const { ref: nextRef, isRevealed: isNextRevealed } = useScrollReveal()

  return (
    <main className="bg-[#191919] min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/videos/about-us-poster.jpg"
            style={{ 
              filter: 'brightness(0.6) contrast(1.15) saturate(1.1)',
              transform: 'scale(1.05)',
            }}
          >
            <source src="/videos/about-us-background.mp4" type="video/mp4" />
            <source src="/videos/about-us-background.webm" type="video/webm" />
            {/* Fallback para navegadores que não suportam vídeo */}
            <div className="absolute inset-0 bg-[#191919]"></div>
          </video>
          
          {/* Overlay escuro gradiente para melhorar legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
          
          {/* Overlay com cor da marca para manter identidade visual */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d5ffa1]/10 via-transparent to-[#d5ffa1]/15"></div>
          
          {/* Overlay radial para criar foco no centro */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.4) 100%)'
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#d5ffa1] rounded-full opacity-8 blur-3xl animate-float mix-blend-soft-light"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#d5ffa1] rounded-full opacity-6 blur-3xl animate-float mix-blend-soft-light" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#d5ffa1] rounded-full opacity-5 blur-3xl animate-float mix-blend-soft-light" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10" ref={heroRef}>
          <div className={`transition-all duration-700 ${isHeroRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-10 text-center leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
              {t.aboutUs.title}
            </h1>
            <div className="bg-[#191919]/70 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-[#d5ffa1]/40 shadow-2xl">
              <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-6 text-center drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
                {t.aboutUs.intro}
              </p>
              <p className="text-lg sm:text-xl text-white leading-relaxed mb-6 text-center drop-shadow-[0_2px_15px_rgba(0,0,0,0.7)]">
                {t.aboutUs.objective}
              </p>
              <p className="text-lg sm:text-xl text-[#d5ffa1] font-semibold leading-relaxed text-center drop-shadow-[0_2px_15px_rgba(0,0,0,0.7)]">
                {t.aboutUs.vision}
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-20">
          <a 
            href="#history" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 hover:bg-white/30 hover:border-[#d5ffa1]/60 transition-all duration-300 group shadow-lg"
            aria-label="Scroll down"
            onClick={(e) => {
              e.preventDefault()
              const historySection = document.getElementById('history')
              if (historySection) {
                historySection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <ChevronDown size={18} className="text-white animate-bounce group-hover:text-[#d5ffa1]" />
          </a>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#191919] relative">
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#d5ffa1]/30 to-transparent"></div>
        <div className="max-w-4xl mx-auto" ref={historyRef}>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-14 text-center transition-all duration-700 ${isHistoryRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.aboutUs.history.title}
          </h2>
          
          <div className="relative border-l-2 border-[#d5ffa1]/30 pl-8 sm:pl-12 ml-4 sm:ml-6 space-y-12">
            {[
              t.aboutUs.history.paragraph1,
              t.aboutUs.history.paragraph2,
              t.aboutUs.history.paragraph3,
              t.aboutUs.history.paragraph4,
              t.aboutUs.history.paragraph5
            ].map((content, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-700 ${isHistoryRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute -left-[41px] sm:-left-[57px] top-1 w-5 h-5 bg-[#191919] border-2 border-[#d5ffa1] rounded-full z-10"></div>
                <p className="text-lg sm:text-xl text-white leading-relaxed">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto" ref={missionRef}>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16 text-center transition-all duration-700 ${isMissionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.aboutUs.missionVision.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16 sm:mb-20">
            {/* Mission */}
            <div className={`bg-[#2a2a2a] p-8 rounded-2xl border border-[#d5ffa1]/30 hover:border-[#d5ffa1] transition-all duration-300 hover-lift ${isMissionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-100`}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#d5ffa1] mb-4 flex items-center gap-3">
                <Target className="w-8 h-8" />
                {t.aboutUs.missionVision.mission.title}
              </h3>
              <p className="text-lg text-white leading-relaxed">
                {t.aboutUs.missionVision.mission.text}
              </p>
            </div>

            {/* Vision */}
            <div className={`bg-[#2a2a2a] p-8 rounded-2xl border border-[#d5ffa1]/30 hover:border-[#d5ffa1] transition-all duration-300 hover-lift ${isMissionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-200`}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#d5ffa1] mb-4 flex items-center gap-3">
                <Eye className="w-8 h-8" />
                {t.aboutUs.missionVision.vision.title}
              </h3>
              <p className="text-lg text-white leading-relaxed">
                {t.aboutUs.missionVision.vision.text}
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className={`text-2xl sm:text-3xl font-bold text-white mb-8 text-center transition-all duration-700 ${isMissionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t.aboutUs.missionVision.values.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: Eye, key: 'transparency' },
                { icon: Target, key: 'impact' },
                { icon: Users, key: 'community' },
                { icon: Zap, key: 'action' },
                { icon: MousePointerClick, key: 'simplicity' },
                { icon: BadgeCheck, key: 'credibility' }
              ].map((item, index) => {
                const Icon = item.icon
                // @ts-ignore
                const valueContent = t.aboutUs.missionVision.values[item.key]
                return (
                  <div 
                    key={item.key} 
                    className={`p-6 sm:p-8 border border-[#d5ffa1]/30 rounded-xl transition-all duration-500 hover-lift hover:bg-[#2a2a2a] hover:border-[#d5ffa1] group will-change-transform ${isMissionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#d5ffa1] rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-[#d5ffa1]/20">
                      <Icon size={24} className="sm:w-7 sm:h-7 text-[#191919]" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#d5ffa1] transition-colors">
                      {valueContent.title}
                    </h4>
                    <p className="text-sm sm:text-base text-white leading-relaxed group-hover:text-[#d5ffa1] transition-colors">
                      {valueContent.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#d5ffa1]/30 to-transparent"></div>
        <div className="max-w-4xl mx-auto" ref={teamRef}>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-10 text-center transition-all duration-700 ${isTeamRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.aboutUs.team.title}
          </h2>
          <p className={`text-lg sm:text-xl text-white font-medium leading-relaxed mb-12 text-center max-w-2xl mx-auto transition-all duration-700 delay-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] ${isTeamRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.aboutUs.team.description}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {t.aboutUs.team.founders.map((founder, index) => {
              // Generate photo path based on name
              const photoPath = `/${founder.name.toLowerCase().replace(/\s+/g, '-')}.jpg`
              
              return (
                <FounderCard
                  key={index}
                  founder={founder}
                  photoPath={photoPath}
                  index={index}
                  isRevealed={isTeamRevealed}
                />
              )
            })}
          </div>
          
          <div className={`bg-[#2a2a2a]/80 backdrop-blur-sm p-6 rounded-xl border border-[#d5ffa1]/30 text-center transition-all duration-700 delay-400 ${isTeamRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-white leading-relaxed italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              "{t.aboutUs.team.mentors}"
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto" ref={achievementsRef}>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-10 text-center transition-all duration-700 ${isAchievementsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.aboutUs.achievements.title}
          </h2>
          <p className={`text-lg sm:text-xl text-white leading-relaxed mb-10 text-center max-w-2xl mx-auto transition-all duration-700 delay-100 ${isAchievementsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.aboutUs.achievements.intro}
          </p>
          
          <div className={`bg-[#2a2a2a] rounded-2xl p-8 sm:p-10 border border-[#d5ffa1]/30 transition-all duration-700 delay-200 ${isAchievementsRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-[#d5ffa1] mb-8 border-b border-[#d5ffa1]/30 pb-4">
              {t.aboutUs.achievements.subtitle}
            </h3>
            <ul className="space-y-6 mb-8">
              {t.aboutUs.achievements.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <CheckCircle2 className="w-6 h-6 text-[#d5ffa1] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-lg text-white leading-relaxed flex-1 group-hover:text-[#d5ffa1] transition-colors">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-xl text-[#d5ffa1] font-bold text-center pt-4 border-t border-[#d5ffa1]/30">
              {t.aboutUs.achievements.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#d5ffa1]/30 to-transparent"></div>
        <div className="max-w-4xl mx-auto" ref={nextRef}>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 text-center transition-all duration-700 ${isNextRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.aboutUs.next.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className={`transition-all duration-700 delay-100 ${isNextRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h3 className="text-xl sm:text-2xl font-bold text-[#d5ffa1] mb-6 flex items-center gap-3">
                <ArrowRight className="w-6 h-6" />
                {t.aboutUs.next.subtitle}
              </h3>
              <ul className="space-y-4">
                {t.aboutUs.next.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-1.5 h-1.5 bg-[#d5ffa1] rounded-full mt-2.5 group-hover:scale-150 transition-transform"></div>
                    <p className="text-lg text-white leading-relaxed group-hover:text-[#d5ffa1] transition-colors">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`bg-[#d5ffa1] rounded-2xl p-8 text-[#191919] shadow-xl transition-all duration-700 delay-200 hover-lift ${isNextRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-2xl font-bold text-[#191919] mb-6 border-b border-[#191919]/20 pb-4">
                {t.aboutUs.next.cta.title}
              </h3>
              <div className="space-y-6">
                <div className="group cursor-default">
                  <h4 className="text-lg font-bold text-[#191919] mb-2 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    <Zap size={20} className="text-[#191919]" />
                    {t.aboutUs.next.cta.organizer.title}
                  </h4>
                  <p className="text-base text-[#191919] leading-relaxed opacity-90">
                    {t.aboutUs.next.cta.organizer.text}
                  </p>
                </div>
                <div className="group cursor-default">
                  <h4 className="text-lg font-bold text-[#191919] mb-2 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    <Users size={20} className="text-[#191919]" />
                    {t.aboutUs.next.cta.participant.title}
                  </h4>
                  <p className="text-base text-[#191919] leading-relaxed opacity-90">
                    {t.aboutUs.next.cta.participant.text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className={`text-xl sm:text-2xl text-white font-bold text-center leading-relaxed transition-all duration-700 delay-300 ${isNextRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.aboutUs.next.conclusion}
          </p>
        </div>
      </section>

      {/* Email Signup Section */}
      <EmailSignup />

      <Footer />
    </main>
  )
}

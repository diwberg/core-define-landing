'use client'

import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import FacebookPixel, { useFacebookPixel } from './components/FacebookPixel'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false)
  const { trackLead, trackClick, trackInitiateCheckout } = useFacebookPixel()

  const handleCtaClick = async () => {
    setIsLoading(true)
    
    // Track Facebook Pixel events
    trackLead()
    trackClick('cta-button')
    trackInitiateCheckout()
    
    // Simulate redirect to checkout or payment page
    // In a real application, this would redirect to your payment processor
    setTimeout(() => {
      alert('Redirecionando para a página de pagamento...\n\nEm uma implementação real, isso levaria para o checkout.')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Facebook Pixel */}
        <FacebookPixel />
        
        {/* Hero Section */}
        <Hero onCtaClick={handleCtaClick} />
        
        {/* Features Section */}
        <Features />
        
        {/* Results Section - New carousel with before/after photos */}
        <Results onCtaClick={handleCtaClick} />
        
        {/* Testimonials Section - Keeping the original testimonials */}
        <Testimonials onCtaClick={handleCtaClick} />
        
        {/* About Section */}
        <About />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Final CTA Section */}
        <CTA onCtaClick={handleCtaClick} />
        
        {/* Loading overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-pink-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-700">Processando sua inscrição...</p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Cookie Banner */}
      <CookieBanner />
    </>
  )
}

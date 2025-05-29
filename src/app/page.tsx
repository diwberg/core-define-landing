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

  const redirectToCheckout = (url: string) => {
    // Try to open in new tab first (better UX for desktop)
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      
      // If popup was blocked or failed, fallback to same tab redirect
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = url
      }
    } catch (error) {
      // Fallback for any errors
      console.warn('Failed to open in new tab, redirecting in same tab:', error)
      window.location.href = url
    }
  }

  const handleCtaClick = async () => {
    setIsLoading(true)
    
    // Track Facebook Pixel events
    trackLead()
    trackClick('cta-button')
    trackInitiateCheckout()
    
    // Redirect to payment page with proper error handling
    setTimeout(() => {
      setIsLoading(false)
      redirectToCheckout('https://pay.hotmart.com/G99078584W')
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
              <p className="text-gray-700">Redirecionando para pagamento...</p>
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

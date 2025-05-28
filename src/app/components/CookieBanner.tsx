'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Cookie, X, Settings, Check } from 'lucide-react'
import Link from 'next/link'

const COOKIE_CONSENT_KEY = 'cookieConsent'

interface CookieConsent {
  accepted: boolean
  essential: boolean
  analytics: boolean
  marketing: boolean
  timestamp: number
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    accepted: false,
    essential: true, // Always true
    analytics: true,
    marketing: true,
    timestamp: Date.now()
  })

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (savedConsent) {
      const parsed = JSON.parse(savedConsent)
      setConsent(parsed)
      setShowBanner(false)
    } else {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const saveConsent = (newConsent: CookieConsent) => {
    const consentWithTimestamp = {
      ...newConsent,
      timestamp: Date.now()
    }
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentWithTimestamp))
    setConsent(consentWithTimestamp)
    setShowBanner(false)
    setShowSettings(false)

    // Initialize tracking based on consent
    if (newConsent.analytics && typeof window !== 'undefined') {
      // Initialize Google Analytics if accepted
      console.log('Analytics cookies accepted - GA would be initialized here')
    }
    
    if (newConsent.marketing && typeof window !== 'undefined') {
      // Initialize Facebook Pixel if accepted
      console.log('Marketing cookies accepted - Facebook Pixel would be initialized here')
    }
  }

  const acceptAll = () => {
    saveConsent({
      accepted: true,
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    })
  }

  const acceptEssentialOnly = () => {
    saveConsent({
      accepted: true,
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    })
  }

  const saveCustomSettings = () => {
    saveConsent({
      ...consent,
      accepted: true
    })
  }

  const updateConsent = (type: keyof CookieConsent, value: boolean) => {
    setConsent(prev => ({
      ...prev,
      [type]: value
    }))
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-2xl border">
                
                {/* Simple Banner View */}
                {!showSettings && (
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Cookie className="w-6 h-6 text-orange-600" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          🍪 Utilizamos cookies para melhorar sua experiência
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          Utilizamos cookies essenciais para o funcionamento do site e cookies opcionais 
                          para análise e personalização. Você pode escolher quais cookies aceitar.{' '}
                          <Link 
                            href="/politica-de-privacidade#cookies" 
                            className="text-pink-600 hover:text-pink-700 underline"
                          >
                            Saiba mais
                          </Link>
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            onClick={acceptAll}
                            className="bg-pink-600 hover:bg-pink-700 text-white"
                          >
                            <Check className="w-4 h-4 mr-2" />
                            Aceitar Todos
                          </Button>
                          
                          <Button
                            onClick={acceptEssentialOnly}
                            variant="outline"
                            className="border-gray-300"
                          >
                            Apenas Essenciais
                          </Button>
                          
                          <Button
                            onClick={() => setShowSettings(true)}
                            variant="outline"
                            className="border-gray-300"
                          >
                            <Settings className="w-4 h-4 mr-2" />
                            Personalizar
                          </Button>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => acceptEssentialOnly()}
                        className="text-gray-400 hover:text-gray-600 p-1"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Detailed Settings View */}
                {showSettings && (
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Configurações de Cookies
                      </h3>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      
                      {/* Essential Cookies */}
                      <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900">Cookies Essenciais</h4>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Sempre ativo
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Necessários para o funcionamento básico do site (navegação, segurança, formulários).
                          </p>
                        </div>
                        <div className="ml-4">
                          <div className="w-12 h-6 bg-green-500 rounded-full flex items-center px-1">
                            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                          </div>
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">Cookies de Análise</h4>
                          <p className="text-sm text-gray-600">
                            Nos ajudam a entender como os visitantes interagem com o site (Google Analytics).
                          </p>
                        </div>
                        <div className="ml-4">
                          <button
                            onClick={() => updateConsent('analytics', !consent.analytics)}
                            className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                              consent.analytics ? 'bg-pink-500' : 'bg-gray-300'
                            }`}
                          >
                            <div 
                              className={`w-4 h-4 bg-white rounded-full transition-transform ${
                                consent.analytics ? 'translate-x-6' : 'translate-x-0'
                              }`}
                            ></div>
                          </button>
                        </div>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">Cookies de Marketing</h4>
                          <p className="text-sm text-gray-600">
                            Utilizados para personalizar anúncios e medir campanhas (Facebook Pixel).
                          </p>
                        </div>
                        <div className="ml-4">
                          <button
                            onClick={() => updateConsent('marketing', !consent.marketing)}
                            className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                              consent.marketing ? 'bg-pink-500' : 'bg-gray-300'
                            }`}
                          >
                            <div 
                              className={`w-4 h-4 bg-white rounded-full transition-transform ${
                                consent.marketing ? 'translate-x-6' : 'translate-x-0'
                              }`}
                            ></div>
                          </button>
                        </div>
                      </div>
                      
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                      <Button
                        onClick={saveCustomSettings}
                        className="bg-pink-600 hover:bg-pink-700 text-white"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Salvar Preferências
                      </Button>
                      
                      <Button
                        onClick={acceptAll}
                        variant="outline"
                        className="border-gray-300"
                      >
                        Aceitar Todos
                      </Button>
                      
                      <Button
                        onClick={acceptEssentialOnly}
                        variant="outline"
                        className="border-gray-300"
                      >
                        Apenas Essenciais
                      </Button>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-4">
                      Você pode alterar suas preferências a qualquer momento através da nossa{' '}
                      <Link 
                        href="/politica-de-privacidade#cookies" 
                        className="text-pink-600 hover:text-pink-700 underline"
                      >
                        Política de Cookies
                      </Link>
                    </p>
                  </div>
                )}
                
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Hook to check cookie consent
export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null)

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (savedConsent) {
      setConsent(JSON.parse(savedConsent))
    }
  }, [])

  return consent
} 
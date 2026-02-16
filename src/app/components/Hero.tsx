'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown, Star } from 'lucide-react'
import { trackClick } from './FacebookPixel'
import { useAptabase } from '@aptabase/react'
import { useEffect } from 'react'

interface HeroProps {
  onCtaClick: () => void
}

export default function Hero({ onCtaClick }: HeroProps) {
  const { trackEvent } = useAptabase()

  // Track section view when component mounts
  useEffect(() => {
    try {
      trackEvent('section_view', { section: 'hero' })
    } catch (error) {
      console.error('❌ Error sending Hero section_view event:', error)
    }
  }, [trackEvent])

  const scrollToFeatures = () => {
    trackEvent('scroll_to_features', { source: 'hero' })
    const featuresSection = document.getElementById('features')
    featuresSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCtaClick = () => {
    trackClick('hero_cta_button')
    trackEvent('cta_click', {
      button: 'hero_main',
      section: 'hero',
      text: 'Quero o Desafio 3.0'
    })
    onCtaClick()
  }

  return (
    <section className="py-5 relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-1 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                Versão 3.0 - Agora Disponível
                <Star className="w-4 h-4 fill-current" />
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transforme seu{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Core
              </span>{' '}
              em 21 Dias
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 mb-4"
            >
              <strong>Versão 3.0 do Desafio Core Define</strong>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-700 mb-8"
            >
              Resultados visíveis ou seu dinheiro de volta.
              <br />
              <span className="font-semibold text-pink-600">Garantia de satisfação de 7 dias!</span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <Button
                onClick={handleCtaClick}
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
              >
                Quero o Desafio 3.0
              </Button>

              <p className="text-sm text-gray-500 text-center">
                ⚡ Vagas limitadas - Início em 09/06/2025
              </p>
            </motion.div>

            {/* Scroll indicator - Only on desktop */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              onClick={scrollToFeatures}
              className="hidden lg:flex flex-col items-center lg:items-start text-gray-400 hover:text-gray-600 transition-colors group"
            >
              <span className="text-sm mb-2">Descubra os benefícios</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative flex justify-center lg:justify-end">
              {/* Main Image with animations */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img
                    src="/hero.png"
                    alt="Transformação Core Define - Antes e Depois"
                    width={450}
                    height={450}
                    className="w-full max-w-md h-auto"
                  />
                </motion.div>
              </motion.div>

              {/* Floating elements around the image */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full opacity-80 shadow-lg hidden lg:block"
              />

              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-80 shadow-lg hidden lg:block"
              />

              {/* Sparkle effects */}
              <motion.div
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.5
                }}
                className="absolute top-1/4 -left-8 w-8 h-8 hidden lg:block"
              >
                <Star className="w-full h-full text-yellow-400 fill-current" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [0, 1, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1.5
                }}
                className="absolute top-3/4 -right-6 w-6 h-6 hidden lg:block"
              >
                <Star className="w-full h-full text-pink-400 fill-current" />
              </motion.div>

              {/* Results badge overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-600">21 dias</div>
                  <div className="text-xs text-gray-600">para transformar</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex lg:hidden justify-center mt-12"
        >
          <button
            onClick={scrollToFeatures}
            className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors group"
          >
            <span className="text-sm mb-2">Descubra os benefícios</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
} 
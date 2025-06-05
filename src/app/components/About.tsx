'use client'

import { motion } from 'framer-motion'
import { Award, Users, Heart, Target } from 'lucide-react'
import Image from 'next/image'
import { useAptabase } from '@aptabase/react'
import { useEffect } from 'react'

export default function About() {
  const { trackEvent } = useAptabase()

  // Track section view when component mounts
  useEffect(() => {
    trackEvent('section_view', { section: 'about' })
  }, [trackEvent])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative"
                  >
                    <Image
                      src="/photo.png"
                      alt="Amandha - Especialista em Core e Fortalecimento"
                      width={450}
                      height={450}
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Target className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                >
                  Conheça{' '}
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Amandha
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl text-pink-600 font-semibold mb-6"
                >
                  Criadora do Método Core Define
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4 text-gray-700 leading-relaxed"
              >
                <p className="text-lg">
                  <strong>Mãe, fisioterapeuta e especialista em transformação corporal</strong>, 
                  Amandha dedicou sua carreira a ajudar milhares de mulheres a reconquistarem 
                  sua autoestima e confiança através de um método revolucionário.
                </p>
                
                <p className="text-lg">
                  Após sua própria jornada de transformação pós-maternidade, ela desenvolveu 
                  o Core Define - um sistema que já impactou positivamente a vida de mais de 
                  <strong className="text-pink-600"> 1.000 mulheres</strong> em todo o Brasil e Europa.
                </p>
                
                <p className="text-lg">
                  &ldquo;Acredito que toda mãe merece se sentir forte, confiante e linda. 
                  O Core Define não é apenas sobre exercícios - é sobre despertar a mulher 
                  poderosa que existe dentro de você.&rdquo;
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">+1.000</div>
                  <div className="text-sm text-gray-600">Mulheres Transformadas</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">6+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                
                <div className="text-center col-span-2 md:col-span-1">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="pt-6 border-t border-gray-200"
              >
                <h4 className="font-semibold text-gray-900 mb-3">Formação & Certificações:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fisioterapia - Faculdade Estácio - GO</li>
                  <li>• Especialização em Tecnica Hipopressiva</li>
                  <li>• Certificação Internacional em Core Training</li>
                  <li>• Especialização em reestruturação abdominal, Pré e Pós-Parto</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
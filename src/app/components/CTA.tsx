'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, Gift, Shield, Zap, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

interface CTAProps {
  onCtaClick: () => void
}

export default function CTA({ onCtaClick }: CTAProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 29,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Urgency timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm font-medium mb-4">
              🔥 OFERTA LIMITADA
            </Badge>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">⏰ Esta oferta expira em:</h3>
              <div className="flex justify-center gap-4 text-2xl md:text-3xl font-bold">
                <div className="bg-white/20 rounded-lg p-3 min-w-[70px]">
                  <div>{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs opacity-75">HORAS</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 min-w-[70px]">
                  <div>{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs opacity-75">MIN</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 min-w-[70px]">
                  <div>{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs opacity-75">SEG</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              Última Chance!
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-6">
              Inscreva-se agora e receba{' '}
              <strong className="text-yellow-300">BÔNUS EXCLUSIVOS</strong>
            </p>
          </motion.div>

          {/* Bonus section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Gift className="w-6 h-6 text-yellow-300" />
              <h3 className="text-2xl font-bold">BÔNUS EXCLUSIVOS - APENAS HOJE!</h3>
              <Gift className="w-6 h-6 text-yellow-300" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                                     <h4 className="font-bold mb-2">E-book: &ldquo;Receitas Fit para Mulheres&rdquo; (R$ 47)</h4>
                  <p className="text-sm opacity-90">30 receitas práticas e saudáveis para complementar sua transformação</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold mb-2">Planilha de Acompanhamento (R$ 27)</h4>
                  <p className="text-sm opacity-90">Monitore seus progressos e conquiste suas metas de forma organizada</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold mb-2">Acesso VIP ao Grupo (R$ 67)</h4>
                  <p className="text-sm opacity-90">Mentorias exclusivas e suporte direto com especialistas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-bold mb-2">Afiliação para comissão (R$ 97)</h4>
                  <p className="text-sm opacity-90">
                    Direito ao link de afiliado para comissão nas vendas do produto
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-center">
                <p className="text-lg opacity-75 line-through">Valor total dos bônus: R$ 238,00</p>
                <p className="text-2xl font-bold text-yellow-300">HOJE: 100% GRÁTIS!</p>
              </div>
            </div>
          </motion.div>

          {/* Price section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="text-center">
              <p className="text-lg opacity-75 line-through mb-2">De R$ 335,00</p>
              <div className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-yellow-300">R$ 97,00</span>
                <span className="text-lg opacity-75 ml-2">à vista</span>
              </div>
              <p className="text-xl">ou 3x de R$ 35,00 sem juros</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 p-6 md:px-12 md:py-6 text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 w-full md:w-auto max-w-md mx-auto"
            >
              <Zap className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              <span className="text-center leading-tight whitespace-normal">
                GARANTIR MINHA TRANSFORMAÇÃO AGORA!
              </span>
            </Button>
            
            <p className="text-sm opacity-75 mt-4">
              🔒 Pagamento 100% seguro • Acesso imediato
            </p>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm opacity-90"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Garantia de 7 dias</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>+1.000 mulheres transformadas</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Acesso imediato</span>
            </div>
          </motion.div>

          {/* Last chance message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-red-500/20 border border-red-300/30 rounded-xl"
          >
            <p className="text-lg font-semibold">
              ⚠️ ATENÇÃO: Apenas <strong>12 vagas</strong> restantes para esta turma!
            </p>
            <p className="text-sm opacity-90 mt-2">
              Não perca esta oportunidade única de transformar sua vida. 
              Não deixe sua transformação para depois.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
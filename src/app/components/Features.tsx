'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Users, Target, Shield, Heart, Zap } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: "Treinos de apenas 10 minutos",
    description: "Exercícios rápidos e eficazes que cabem na sua rotina corrida de mãe",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Heart,
    title: "Para mães iniciantes",
    description: "Orientações passo a passo especialmente criadas para quem está começando",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Users,
    title: "Comunidade exclusiva",
    description: "Grupo privado com suporte ao vivo e motivação entre participantes",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Garantia total",
    description: "Resultados visíveis em 21 dias ou seu dinheiro de volta sem questionamentos",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Resultados comprovados",
    description: "Mais de 5.000 mães já transformaram seus corpos com nosso método",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Energia renovada",
    description: "Sinta-se mais disposta e confiante no seu dia a dia",
    color: "from-yellow-500 to-amber-500"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher o{' '}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Core Define 3.0?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um método testado e aprovado por milhares de mães que conquistaram o corpo dos sonhos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action section within features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pronta para sua transformação?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de mães que já mudaram suas vidas em apenas 21 dias
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <Shield className="w-5 h-5" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-medium">
                <Users className="w-5 h-5" />
                <span>+5.000 mães transformadas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
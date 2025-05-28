'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: "Maria Silva",
    age: 34,
    result: "Perdi 8cm de cintura em 21 dias",
    text: "Nunca imaginei que conseguiria resultados tão rápidos! O Core Define 3.0 mudou minha vida. Agora tenho energia para brincar com meus filhos e me sinto linda novamente.",
    image: "/testimonial-1.jpg",
    stars: 5
  },
  {
    name: "Ana Rodrigues",
    age: 28,
    result: "De 42 para 38 do manequim",
    text: "Estava desesperada depois da segunda gravidez. Em apenas 3 semanas consegui voltar a usar minhas roupas favoritas! O método é incrível e realmente funciona.",
    image: "/testimonial-2.jpg",
    stars: 5
  },
  {
    name: "Juliana Costa",
    age: 31,
    result: "5kg eliminados sem sofrimento",
    text: "O que mais me impressionou foi a facilidade. Apenas 10 minutos por dia e consegui resultados que nunca havia alcançado antes. Recomendo para todas as mães!",
    image: "/testimonial-3.jpg",
    stars: 5
  },
  {
    name: "Carla Mendes",
    age: 29,
    result: "Barriga chapada em 3 semanas",
    text: "Depois de tentar várias dietas e exercícios, finalmente encontrei algo que funciona. Meu marido não para de elogiar minha nova silhueta!",
    image: "/testimonial-4.jpg",
    stars: 5
  }
]

interface TestimonialsProps {
  onCtaClick: () => void
}

export default function Testimonials({ onCtaClick }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Resultados{' '}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Reais
            </span>{' '}
            de Mães Reais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que milhares de mães estão dizendo sobre sua transformação
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
            
            <div className="flex justify-center items-center mt-6 gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full p-0"
              >
                ‹
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full p-0"
              >
                ›
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Seja a próxima história de sucesso!
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Mais de 5.000 mães já transformaram seus corpos e suas vidas. 
              <br />
              <strong>Agora é a sua vez!</strong>
            </p>
            
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Garantir Minha Vaga Agora
            </Button>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 estrelas • +5.000 mães satisfeitas</span>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.age} anos</p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex gap-1 mb-2">
            {[...Array(testimonial.stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="font-bold text-pink-600 text-sm mb-2">
            {testimonial.result}
          </p>
        </div>
        
        <div className="relative">
          <Quote className="w-8 h-8 text-pink-200 absolute -top-2 -left-2" />
          <p className="text-gray-600 text-sm leading-relaxed italic pl-6">
            &ldquo;{testimonial.text}&rdquo;
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 
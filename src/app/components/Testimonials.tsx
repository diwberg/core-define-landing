'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Star, Quote, Eye } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: "Larissa Maris",
    age: 32,
    result: "Senti muita diferença em cada exercício",
    text: `Bom dia! Amandha, quero agradecer todo o carinho e atenção conosco, nos ensinando, motivando, cuidando e sanando nossas dúvidas! Eu não consegui acompanhar direitinho o desafio, mas irei terminá-lo. Senti muita diferença em cada exercício que fui fazendo. Minha disposição e humor desde que retornei para as atividades físicas são outras e os exercícios que vc nos ensinou me ajudaram a sentir mais firmeza nessa região abdominal que antes eu estava sentindo mais frouxa.
          Que Deus abençoe seu trabalho e que vc continue o realizando da forma genuína que o faz!
          Sucesso! Bom domingo a todos!`,
    image: "/testimonial/test-1.jpeg",
    stars: 5
  },
  {
    name: "Geovanna Bessa",
    age: 29,
    result: "Já estou sentindo uma diferença na minha barriga e cintura",
    text: `Bom dia meninas, uma relato aqui pra
VCS
Eu não tenho conseguido fazer os treinos de core todos os dias, mais qnd consigo faço dois dias pra compensar um pouco, mas mesmo não seguindo certinho já estou sentindo uma diferença na minha barriga e cintura, eu tenho a famosa pochete por usar calça baixa na adolescência, estou sentindo q ela diminuiu, estou tão feliz e tão grata a @Amandha por esse desafio, estou aprendendo bastante e quero continuar fazendo o treino de core mesmo depois q o desafio acabar`,
    image: "/testimonial/test-2.jpeg",
    stars: 5
  },
  {
    name: "Laís",
    age: 34,
    result: "É simplesmente incrível poder fazer tanto em tão pouco tempo",
    text: `Eu tenho feito o Desafio core define e estou amando! Estou encantada pelo treino de core, é simplesmente incrível poder fazer tanto em tão pouco tempo.
Acabei de fazer os 20 min de aula e tô toda trêmula estava parada desde
janeiro sem fazer atividade, criança pequena em casa e tudo o mais.... Enfim, tô amando! Muito grata pela sua vida! Você é incrível`,
    image: "/testimonial/test-3.jpeg",
    stars: 5
  },
  {
    name: "Jady Andrade",
    age: 33,
    result: "Priorizar o cuidado com o corpo não tem sido fácil para mim.",
    text: `Quero dizer que
priorizar o cuidado com o corpo não tem sido fácil para mim. Mas o desafio tem me dado mais consciência da importância de abrir mão de outras coisas e parar em meio a tantas demandas diárias e fazer algo que somente pode ser realizado por mim mesma. Obrigada @Amandha por todo incentivo e aulas maravilhosas.`,
    image: "/testimonial/test-4.jpeg",    
stars: 5
  },
  {
    name: "Jacira Andrade",
    age: 58,
    result: "Com 58 anos comecei a aprender coisas sobre o meu corpo que eu nem imaginava",
    text: `Ola! Comecei esse lindo desafio de core define!! E confesso que pra foi um divisor de águas com 58 anos
comecei a aprender coisas sobre o meu corpo que eu nem imaginava , agora
respiro com mais consciente! Estou atenta a ativação do meu abdómen e região pelvica!! Venho experimentando sensações maravilhosas!!! Eu sofria com uma dor constante no braço direito ja a mais de 2 anos, o médico ja havia me encaminhado pra tomar uma injeção de steroid, foi quando a Amandha trouxe esse maravilhoso desafio! E bum!!!!! Minha dor no braço praticamente sumiu!!!! Sinto muito mais disposição no trabalho!! Minha vida sexual deu um up!!! Gratidão me define! Gratidão por essa fisioterapeuta competente e tão graciosa!! Deus te abençoe Amandha!! Vc tem feito a diferença!!!!!`,
    image: "/testimonial/test-5.jpeg",    
stars: 5
  },
  {
    name: "Kauane",
    age: 26,
    result: "A cada treino senti que consegui me superar",
    text: `Bom dia meninas, esqueci de vim antes
Mas queria deixar meu comentário sobre os 21 dias de core define.
Que treinos em , me senti desafiada,
a cada treino senti que consegui me superar assim vendo que tenho capacidade de evoluir. Como são treinos gravados me ajudou com minha rotina corrida e com horários quebrados durante a semana, achei que não veria resultados já que eu fazia a noite e a maioria fazia pela manhã e de jejum, e me surpreendi em 10 dias de treino, pois já comecei a ver os resultados.`,
    image: "/testimonial/test-6.jpeg",    
stars: 5
  },
]

interface TestimonialsProps {
  onCtaClick: () => void
}

// Função para truncar texto
const truncateText = (text: string, maxLength: number = 150) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
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
            de Mulheres Reais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que estão dizendo sobre suas transformações
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
              Mais de 1.000 mulheres já transformaram seus corpos e suas vidas. 
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
              <span>4.9/5 estrelas • +1.000 mulheres satisfeitas</span>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const isLongText = testimonial.text.length > 150

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
            &ldquo;{truncateText(testimonial.text)}&rdquo;
          </p>
        </div>

        {/* Botão para ver mais se o texto for longo */}
        {isLongText && (
          <div className="mt-4 flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-pink-600 border-pink-200 hover:bg-pink-50 hover:border-pink-300"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Ver depoimento completo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                    Depoimento Completo
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-3 md:space-y-6">
                  {/* Header do modal */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.age} anos</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Imagem da transformação */}
                  <div className="relative w-full h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`Transformação de ${testimonial.name}`}
                      fill
                      className="object-contain"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 
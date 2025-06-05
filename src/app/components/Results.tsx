'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useAptabase } from '@aptabase/react'

const results = [
  {
    id: 1,
    name: "Erika",
    age: 34,
    time: "30 dias",
    image: "/results/result-1.jpg",
    description: "Mãe de 3 filhos, conseguiu retomar a autoestima após a gravidez"
  },
  {
    id: 2,
    name: "Lilian", 
    age: 28,
    time: "30 dias",
    image: "/results/result-2.jpg",
    description: "Primeira vez fazendo exercícios, surpreendeu-se com os resultados"
  },
  {
    id: 3,
    name: "Ilcelia",
    age: 36,
    time: "21 dias", 
    image: "/results/result-3.jpg",
    description: "Recuperou a confiança para usar roupas que gosta"
  },
  {
    id: 4,
    name: "Laís",
    age: 34,
    time: "21 dias",
    image: "/results/result-4.jpg",
    description: "Voltou a se exercitar depois de crises de pânico"
  },
  {
    id: 5,
    name: "Laís",
    age: 34,
    time: "21 dias",
    image: "/results/result-5.jpg",
    description: "Transformou completamente sua relação com o exercício"
  },
  {
    id: 6,
    name: "Laís",
    age: 34,
    time: "21 dias",
    image: "/results/result-6.jpg",
    description: "Vive recebendo elogios do marido"
  },
  {
    id: 7,
    name: "Geovanna",
    age: 29,
    time: "21 dias",
    image: "/results/result-7.jpg",
    description: "Ela não acreditou no resultado que teve em apenas 21 dias"
  },
  {
    id: 8,
    name: "Geovanna",
    age: 29,
    time: "21 dias",
    image: "/results/result-8.jpeg",
    description: "Ela sentiu o abdômen mais forte e menos distendido"
  },
  {
    id: 9,
    name: "Andreia",
    age: 30,
    time: "21 dias",
    image: "/results/result-9.jpg",
    description: "Se sentiu muito mais disposta e com mais energia"
  },
  {
    id: 10,
    name: "Laís",
    age: 34,
    time: "21 dias",
    image: "/results/result-10.jpg",
    description: "Sentiu mais disposição, desenvolvimento corporal e mais animo"
  },
  {
    id: 11,
    name: "Andreia",
    age: 30,
    time: "21 dias",
    image: "/results/result-20.jpeg",
    description: "Sentiu o abdômen mais firme e menos distendido"
  },
  {
    id: 12,
    name: "Andreia",
    age: 30,
    time: "21 dias",
    image: "/results/result-21.jpeg",
    description: "Segunda edição do desafio e percebeu muitas melhoras posturais"
  },
  {
    id: 13,
    name: "Jady",
    age: 33,
    time: "21 dias",
    image: "/results/result-22.jpeg",
    description: "Sente mais conciencia corporal e controle do core ao fazer tarefas do dia a dia"
  },
  {
    id: 14,
    name: "Ilcelia",
    age: 36,
    time: "21 dias",
    image: "/results/result-23.jpeg",
    description: "Segundo desafio e agora se sente pronta para começar na academia"
  },
  {
    id: 15,
    name: "Jady",
    age: 33,
    time: "21 dias",
    image: "/results/result-24.jpeg",
    description: "Percebeu, pela primeira vez, como o posicionamento do abdômen e das costelas transformou a forma como ela enxerga o próprio corpo."
  },
  {
    id: 16,
    name: "Kauane",
    age: 26,
    time: "21 dias",
    image: "/results/result-25.jpeg",
    description: "Se sentiu super desafiada nos treinos, mas percebeu o quanto era capaz de evoluir mesmo com a rotina puxada e horários quebrados."
  },
  {
    id: 17,
    name: "Kauane",
    age: 26,
    time: "21 dias",
    image: "/results/result-26.jpeg",
    description: "Achou que não veria resultado por treinar à noite, diferente da maioria, mas em apenas 10 dias já começou a notar mudanças no corpo!"
  },
  {
    id: 18,
    name: "Kauane",
    age: 26,
    time: "21 dias",
    image: "/results/result-27.jpeg",
    description: "Se surpreendeu com a própria constância e disse que, mesmo achando que não conseguiria acompanhar, viu que é possível sim ter resultados"
  },
  
]

interface ResultsProps {
  onCtaClick: () => void
}

export default function Results({ onCtaClick }: ResultsProps) {
  const { trackEvent } = useAptabase()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Track section view when component mounts
  useEffect(() => {
    trackEvent('section_view', { section: 'results' })
  }, [trackEvent])

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextResult = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length)
    trackEvent('results_navigation', { 
      section: 'results',
      action: 'next',
      result_index: (currentIndex + 1) % results.length,
      result_name: results[(currentIndex + 1) % results.length].name
    })
  }

  const prevResult = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)
    trackEvent('results_navigation', { 
      section: 'results',
      action: 'previous',
      result_index: (currentIndex - 1 + results.length) % results.length,
      result_name: results[(currentIndex - 1 + results.length) % results.length].name
    })
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
    trackEvent('results_autoplay_pause', { section: 'results' })
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
    trackEvent('results_autoplay_resume', { section: 'results' })
  }

  const handleResultsCtaClick = () => {
    trackEvent('cta_click', { 
      button: 'results_section', 
      section: 'results',
      text: 'Quero Minha Transformação Agora'
    })
    onCtaClick()
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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
              Comprovados
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja as transformações reais de mulheres que mudaram suas vidas em apenas 21 dias
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative px-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ResultCard result={results[currentIndex]} />
            
            {/* Navigation */}
            <div className="flex justify-center items-center mt-12 gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={prevResult}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full p-0 flex-shrink-0"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
              
              <div className="flex gap-2">
                {results.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={nextResult}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full p-0 flex-shrink-0"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <span>{isAutoPlaying ? 'Reprodução automática' : 'Pausado'}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Auto-rotating Carousel */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main carousel container */}
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {results.map((result) => (
                  <div key={result.id} className="w-full flex-shrink-0">
                    <div className="flex justify-center">
                      <ResultCard result={result} />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={prevResult}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full p-0 flex-shrink-0"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
              
              <div className="flex gap-2">
                {results.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={nextResult}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full p-0 flex-shrink-0"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span>{isAutoPlaying ? 'Reprodução automática ativa' : 'Pausado - mova o mouse para continuar'}</span>
              </div>
            </div>
          </motion.div>
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
              Sua transformação começa hoje!
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se a essas mulheres incríveis e conquiste o corpo que você sempre sonhou.
              <br />
              <strong>Resultados garantidos ou seu dinheiro de volta!</strong>
            </p>
            
            <Button
              onClick={handleResultsCtaClick}
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto max-w-sm mx-auto"
            >
              Quero Minha Transformação Agora
            </Button>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <span>✨ Mais de 1.000 mulheres já transformaram suas vidas</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function ResultCard({ result }: { result: typeof results[0] }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md md:max-w-2xl mx-auto">
      <CardContent className="p-0">
        
        {/* Before/After Combined Image */}
        <div className="relative w-full aspect-[4/3] md:aspect-[3/2] bg-gray-100 overflow-hidden">
          <Image
            src={result.image}
            alt={`Transformação de ${result.name} - Antes e Depois`}
            fill
            className="object-contain w-full h-full"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
          {/* Name overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-bold text-lg">{result.name}</h4>
            <p className="text-sm opacity-90">{result.age} anos • {result.time}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          
          <p className="text-sm text-gray-600 italic">
            &ldquo;{result.description}&rdquo;
          </p>
        </div>
        
      </CardContent>
    </Card>
  )
} 
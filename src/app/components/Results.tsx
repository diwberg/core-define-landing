'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, TrendingDown, Clock, Target } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const results = [
  {
    id: 1,
    name: "Maria Silva",
    age: 32,
    time: "21 dias",
    image: "/results/result-1.jpg",
    metrics: {
      weight: "-5,2 kg",
      waist: "-8 cm",
      body_fat: "-4,1%"
    },
    description: "Mãe de 2 filhos, conseguiu retomar a autoestima após a gravidez"
  },
  {
    id: 2,
    name: "Ana Rodrigues", 
    age: 28,
    time: "21 dias",
    image: "/results/result-2.jpg",
    metrics: {
      weight: "-4,8 kg",
      waist: "-6 cm",
      body_fat: "-3,7%"
    },
    description: "Primeira vez fazendo exercícios, surpreendeu-se com os resultados"
  },
  {
    id: 3,
    name: "Juliana Costa",
    age: 35,
    time: "21 dias", 
    image: "/results/result-3.jpg",
    metrics: {
      weight: "-6,1 kg",
      waist: "-10 cm",
      body_fat: "-5,2%"
    },
    description: "Recuperou a confiança para usar roupas que gosta"
  },
  {
    id: 4,
    name: "Carla Mendes",
    age: 30,
    time: "21 dias",
    image: "/results/result-4.jpg",
    metrics: {
      weight: "-3,9 kg",
      waist: "-7 cm",
      body_fat: "-3,2%"
    },
    description: "Conseguiu definir o abdômen que sempre sonhou"
  },
  {
    id: 5,
    name: "Patricia Lima",
    age: 29,
    time: "21 dias",
    image: "/results/result-5.jpg",
    metrics: {
      weight: "-5,7 kg",
      waist: "-9 cm",
      body_fat: "-4,8%"
    },
    description: "Transformou completamente sua relação com o exercício"
  }
]

interface ResultsProps {
  onCtaClick: () => void
}

export default function Results({ onCtaClick }: ResultsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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
  }

  const prevResult = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
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
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ResultCard result={results[currentIndex]} />
            
            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={prevResult}
                className="w-12 h-12 rounded-full p-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {results.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={nextResult}
                className="w-12 h-12 rounded-full p-0"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-4">
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
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      <div className="lg:col-span-2">
                        <ResultCard result={result} />
                      </div>
                      <div className="space-y-6">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Transformação Incrível!
                          </h3>
                          <p className="text-gray-600">
                            {result.description}
                          </p>
                        </div>
                        
                        {/* Metrics highlight */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                            <div className="font-bold text-pink-600 text-lg">{result.metrics.weight}</div>
                            <div className="text-xs text-gray-600">Peso perdido</div>
                          </div>
                          <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                            <div className="font-bold text-purple-600 text-lg">{result.metrics.waist}</div>
                            <div className="text-xs text-gray-600">Cintura reduzida</div>
                          </div>
                          <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                            <div className="font-bold text-green-600 text-lg">{result.metrics.body_fat}</div>
                            <div className="text-xs text-gray-600">Gordura eliminada</div>
                          </div>
                        </div>
                      </div>
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
                className="w-12 h-12 rounded-full p-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {results.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={nextResult}
                className="w-12 h-12 rounded-full p-0"
              >
                <ChevronRight className="w-5 h-5" />
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

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-6 h-6 text-pink-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">-5,5kg</div>
            <div className="text-gray-600">Perda média de peso</div>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">-8cm</div>
            <div className="text-gray-600">Redução média da cintura</div>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">21</div>
            <div className="text-gray-600">Dias para transformação</div>
          </div>
        </motion.div>

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
              onClick={onCtaClick}
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Quero Minha Transformação Agora
            </Button>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <span>✨ Mais de 5.000 mulheres já transformaram suas vidas</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function ResultCard({ result }: { result: typeof results[0] }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-0">
        
        {/* Before/After Combined Image */}
        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
          <Image
            src={result.image}
            alt={`Transformação de ${result.name} - Antes e Depois`}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Name overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-bold text-lg">{result.name}</h4>
            <p className="text-sm opacity-90">{result.age} anos • {result.time}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center bg-pink-50 rounded-lg p-3">
              <div className="font-bold text-pink-600">{result.metrics.weight}</div>
              <div className="text-xs text-gray-600">Peso</div>
            </div>
            <div className="text-center bg-purple-50 rounded-lg p-3">
              <div className="font-bold text-purple-600">{result.metrics.waist}</div>
              <div className="text-xs text-gray-600">Cintura</div>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-3">
              <div className="font-bold text-green-600">{result.metrics.body_fat}</div>
              <div className="text-xs text-gray-600">Gordura</div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 italic">
            &ldquo;{result.description}&rdquo;
          </p>
        </div>
        
      </CardContent>
    </Card>
  )
} 
import { Metadata } from 'next'
import { Heart, DollarSign, Users, MessageCircle, ArrowRight, Star, Gift, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { trackAffiliatePageView, trackAffiliateClick } from '@/app/components/FacebookPixel'

export const metadata: Metadata = {
  title: 'Programa de Afiliadas - Core Define',
  description: 'Ganhe uma renda extra indicando o Core Define. 25% de comissão em cada venda. Exclusivo para alunas das primeiras edições.',
}

export default function AfiliadosPage() {
  useEffect(() => {
    // Track affiliate page view
    trackAffiliatePageView()
  }, [])

  const handleAffiliateClick = () => {
    trackAffiliateClick()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Back to Home Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full font-medium text-sm hover:bg-white hover:text-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Exclusivo para Alunas Core Define
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Programa de <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Afiliadas</span>
            <br />Core Define
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Já pensou em ganhar um extra indicando algo que você ama? Transforme sua experiência em renda!
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-pink-100">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">25% de Comissão</h3>
                <p className="text-gray-600">R$21,60 por venda</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Exclusivo</h3>
                <p className="text-gray-600">Para alunas das primeiras edições</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Produto de Valor</h3>
                <p className="text-gray-600">R$97 - Transformação real</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Você que já viveu o Core Define sabe...
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Não é só um desafio de treinos. É sobre transformação, autocuidado e presença.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Transformação Real</h3>
                    <p className="text-gray-600">Você viveu na pele os resultados do Core Define</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Autocuidado Genuíno</h3>
                    <p className="text-gray-600">Sabe o valor de cuidar de si mesma com presença</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Comunidade Especial</h3>
                    <p className="text-gray-600">Faz parte de um grupo seleto de mulheres transformadas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Agora imagina ajudar outras mulheres a viverem isso...
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                E ainda ganhar por isso? 💖
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
                <p className="text-gray-800 font-medium">
                  &ldquo;Um jeito leve, verdadeiro e cheio de propósito de gerar uma renda extra com algo que já é parte da sua história.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como Funciona o Programa
            </h2>
            <p className="text-xl text-gray-600">
              Simples, transparente e lucrativo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ganhos por Venda</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Valor do Core Define:</span>
                  <span className="font-bold text-gray-900">R$ 97,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sua comissão (25%):</span>
                  <span className="font-bold text-pink-600 text-xl">R$ 21,60</span>
                </div>
                <div className="border-t pt-3">
                  <p className="text-sm text-gray-500">
                    Pagamento automático a cada venda confirmada
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Como Compartilhar</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Receba seu link personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Compartilhe nas suas redes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Inspire outras mulheres</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Receba por cada venda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bora Juntas? 🌿
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Se quiser participar, me responde e te mando tudo certinho pra começar
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-lg">
                <MessageCircle className="w-6 h-6" />
                <span>Você compartilha, inspira e recebe por isso</span>
              </div>
            </div>
            
            <a 
              href="https://app-vlc.hotmart.com/affiliate-recruiting/view/3951D99078605"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAffiliateClick}
              className="inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              Quero Participar!
              <ArrowRight className="w-6 h-6" />
            </a>
            
            <p className="text-sm mt-6 opacity-75">
              Se precisar de ajuda, contate-nos pelo WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg">
            💖 <strong>Exclusivo para alunas das primeiras edições do Core Define</strong>
          </p>
          <p className="text-gray-500 mt-2">
            Um programa feito com carinho para quem já viveu a transformação
          </p>
        </div>
      </section>
    </div>
  )
} 
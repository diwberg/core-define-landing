'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página inicial
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Termos de Uso
            </h1>
            <p className="text-lg text-gray-600">
              Última atualização: 20 de dezembro de 2024
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8"
          >
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ao acessar e usar o programa Core Define 3.0, você concorda em cumprir e estar 
                vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes 
                termos, não deve usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                2. Descrição do Serviço
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  O Core Define 3.0 é um programa de exercícios online de 21 dias focado no 
                  fortalecimento do core, especialmente desenvolvido para mães. O programa inclui:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vídeos de exercícios diários de aproximadamente 10 minutos</li>
                  <li>Guias de nutrição e alimentação saudável</li>
                  <li>Acesso a grupo exclusivo de apoio</li>
                  <li>Materiais complementares e bônus</li>
                  <li>Suporte via chat durante o período do programa</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                3. Compra e Pagamento
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>Preço:</strong> O investimento no Core Define 3.0 é de R$ 97,00 à vista 
                  ou parcelado em até 3x sem juros no cartão de crédito.
                </p>
                <p>
                  <strong>Pagamento:</strong> Aceitamos cartões de crédito, débito e PIX. 
                  O processamento é feito através de plataformas seguras e certificadas.
                </p>
                <p>
                  <strong>Acesso:</strong> Após a confirmação do pagamento, você receberá 
                  automaticamente o acesso à plataforma via e-mail em até 2 horas.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                4. Política de Garantia e Cancelamento
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>Garantia de 60 dias:</strong> Oferecemos garantia incondicional de 
                  satisfação por 60 dias. Se não ficar satisfeita com os resultados, 
                  devolvemos 100% do valor pago.
                </p>
                <p>
                  <strong>Como solicitar reembolso:</strong> Entre em contato conosco via 
                  e-mail (contato@coredefine.com.br) ou WhatsApp dentro do prazo de garantia.
                </p>
                <p>
                  <strong>Processamento:</strong> O reembolso será processado em até 7 dias 
                  úteis após a solicitação.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                5. Uso Apropriado
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Você concorda em usar o programa apenas para fins pessoais e não deve:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Compartilhar seu acesso com terceiros</li>
                  <li>Reproduzir, distribuir ou vender o conteúdo</li>
                  <li>Fazer engenharia reversa dos materiais</li>
                  <li>Usar o conteúdo para fins comerciais sem autorização</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                6. Disclaimer Médico
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed font-medium">
                  <strong>IMPORTANTE:</strong> Este programa não substitui o acompanhamento médico. 
                  Antes de iniciar qualquer programa de exercícios, consulte seu médico, 
                  especialmente se você tem condições pré-existentes, está grávida ou 
                  passou por cirurgia recente.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                7. Limitação de Responsabilidade
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O Core Define não se responsabiliza por lesões, danos ou problemas de saúde 
                que possam ocorrer durante a realização dos exercícios. A participação no 
                programa é por sua conta e risco.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                8. Propriedade Intelectual
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Todo o conteúdo do programa, incluindo vídeos, textos, imagens e materiais, 
                são propriedade exclusiva do Core Define e estão protegidos por direitos autorais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                9. Alterações nos Termos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação. 
                O uso continuado do serviço constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                10. Contato
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>Para dúvidas sobre estes termos, entre em contato:</p>
                <p><strong>E-mail:</strong> contato@coredefine.com.br</p>
                <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
                <p><strong>Horário de atendimento:</strong> Segunda a sexta, 9h às 18h</p>
              </div>
            </section>

          </motion.div>

          {/* Back to home button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para a página inicial
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  )
} 
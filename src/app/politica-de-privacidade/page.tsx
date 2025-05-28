'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Cookie } from 'lucide-react'

export default function PoliticaDePrivacidade() {
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
              Política de Privacidade
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
                <Shield className="w-6 h-6 text-blue-500" />
                1. Compromisso com sua Privacidade
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O Core Define está comprometido em proteger sua privacidade e dados pessoais. 
                Esta política explica como coletamos, usamos, armazenamos e protegemos suas 
                informações quando você usa nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-green-500" />
                2. Informações que Coletamos
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <h3 className="font-semibold text-lg">Informações Pessoais:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Número de telefone/WhatsApp</li>
                  <li>Data de nascimento</li>
                  <li>Informações de pagamento (processadas por terceiros seguros)</li>
                </ul>
                
                <h3 className="font-semibold text-lg mt-6">Informações de Uso:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dados de navegação no site</li>
                  <li>Interações com o conteúdo</li>
                  <li>Progresso no programa</li>
                  <li>Preferências e configurações</li>
                  <li>Endereço IP e dados do dispositivo</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-purple-500" />
                3. Como Usamos suas Informações
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer acesso ao programa Core Define 3.0</li>
                  <li>Processar pagamentos e gerenciar sua conta</li>
                  <li>Enviar conteúdo do programa e comunicações importantes</li>
                  <li>Oferecer suporte ao cliente</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Enviar newsletters e ofertas (apenas com seu consentimento)</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-red-500" />
                4. Compartilhamento de Informações
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>Não vendemos</strong> suas informações pessoais para terceiros. 
                  Podemos compartilhar dados apenas nas seguintes situações:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Com processadores de pagamento (PagSeguro, Mercado Pago, etc.)</li>
                  <li>Com provedores de e-mail marketing (apenas com consentimento)</li>
                  <li>Para cumprir obrigações legais ou ordens judiciais</li>
                  <li>Para proteger nossos direitos e segurança</li>
                  <li>Com seu consentimento explícito</li>
                </ul>
              </div>
            </section>

            <section id="cookies">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Cookie className="w-6 h-6 text-orange-500" />
                5. Política de Cookies
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência 
                  em nosso site. Os cookies são pequenos arquivos armazenados em seu dispositivo.
                </p>
                
                <h3 className="font-semibold text-lg">Tipos de Cookies que Utilizamos:</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Cookies Essenciais</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Necessários para o funcionamento básico do site (login, carrinho, etc.)
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Cookies de Análise</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Nos ajudam a entender como os visitantes usam o site (Google Analytics)
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Cookies de Marketing</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Utilizados para personalizar anúncios e medir campanhas (Facebook Pixel)
                    </p>
                  </div>
                </div>
                
                <p className="text-sm bg-blue-50 p-4 rounded-lg">
                  <strong>Controle de Cookies:</strong> Você pode aceitar ou recusar cookies 
                  através do banner em nosso site. Também pode configurar seu navegador para 
                  bloquear cookies, mas isso pode afetar a funcionalidade do site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-gray-600" />
                6. Segurança dos Dados
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Implementamos medidas de segurança para proteger suas informações:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Criptografia SSL/TLS para transmissão de dados</li>
                  <li>Armazenamento seguro em servidores protegidos</li>
                  <li>Acesso restrito às informações pessoais</li>
                  <li>Monitoramento regular de segurança</li>
                  <li>Backup regular dos dados</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-indigo-500" />
                7. Seus Direitos (LGPD)
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Acesso:</strong> Saber quais dados temos sobre você</li>
                  <li><strong>Correção:</strong> Corrigir dados incorretos ou incompletos</li>
                  <li><strong>Exclusão:</strong> Solicitar a remoção de seus dados</li>
                  <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                  <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
                  <li><strong>Informação:</strong> Saber com quem compartilhamos seus dados</li>
                </ul>
                
                <p className="bg-green-50 p-4 rounded-lg text-sm">
                  <strong>Como exercer seus direitos:</strong> Entre em contato conosco através do 
                  e-mail contato@coredefine.com.br ou WhatsApp (11) 99999-9999.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-yellow-500" />
                8. Retenção de Dados
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Mantemos suas informações apenas pelo tempo necessário:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Dados de cadastro:</strong> Enquanto sua conta estiver ativa</li>
                  <li><strong>Dados de pagamento:</strong> 5 anos (exigência fiscal)</li>
                  <li><strong>Dados de marketing:</strong> Até você cancelar a inscrição</li>
                  <li><strong>Cookies:</strong> Conforme configuração específica de cada tipo</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-teal-500" />
                9. Transferência Internacional
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Alguns de nossos prestadores de serviços (como Google Analytics e Facebook) 
                podem estar localizados fora do Brasil. Garantimos que essas transferências 
                cumprem os padrões de proteção de dados exigidos pela LGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-red-600" />
                10. Alterações nesta Política
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta política periodicamente. Notificaremos você sobre 
                mudanças significativas por e-mail ou através de aviso em nosso site. 
                Recomendamos revisar esta página regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-pink-500" />
                11. Contato e DPO
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Para questões sobre privacidade e proteção de dados:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>E-mail:</strong> privacidade@coredefine.com.br</p>
                  <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
                  <p><strong>Horário:</strong> Segunda a sexta, 9h às 18h</p>
                  <p><strong>Encarregado de Dados (DPO):</strong> Amandha Silva</p>
                </div>
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
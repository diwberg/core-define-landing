'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "Qual é o meu investimento no Core Define 3.0?",
    answer: "O investimento no Core Define 3.0 é de apenas R$ 97,00 à vista ou 3x de R$ 35,00 no cartão. Um valor simbólico para uma transformação que mudará sua vida para sempre. Considerando que uma única aula particular custa mais que isso, é um investimento incrível em você mesma."
  },
  {
    question: "Preciso de equipamentos ou academia?",
    answer: "Não! O Core Define 3.0 foi desenvolvido para ser feito em casa, sem equipamentos. Você só precisa de um tapetinho (que pode ser uma toalha) e seu próprio peso corporal. Os exercícios são funcionais e utilizam apenas o peso do seu corpo para gerar resultados incríveis."
  },
  {
    question: "Como funciona o acesso ao conteúdo?",
    answer: "Após a confirmação do pagamento, você recebe imediatamente um e-mail com seus dados de acesso à plataforma exclusiva. Todo o conteúdo fica disponível 24h por dia durante os 21 dias do desafio, podendo ser acessado pelo celular, tablet ou computador."
  },
  {
    question: "Sou iniciante, conseguirei acompanhar?",
    answer: "Sim! O Core Define 3.0 foi especialmente criado para mães iniciantes. Todos os exercícios possuem versões adaptadas e progressões graduais. Começamos do básico e evoluímos juntas. Você nunca estará sozinha - temos uma comunidade incrível para te apoiar!"
  },
  {
    question: "Quanto tempo por dia preciso dedicar?",
    answer: "Apenas 10 minutos por dia! Sabemos que a rotina de mãe é corrida, por isso criamos treinos super eficazes que cabem na sua agenda. Você pode fazer pela manhã antes dos filhos acordarem, à noite ou em qualquer momento livre do seu dia."
  },
  {
    question: "E se eu não conseguir resultados?",
    answer: "Oferecemos garantia incondicional de 30 dias! Se por qualquer motivo você não ficar satisfeita com os resultados, devolvemos 100% do seu dinheiro, sem perguntas, sem burocracias. Sua satisfação é nossa prioridade absoluta."
  },
  {
    question: "Como funciona o suporte durante o desafio?",
    answer: "Você terá acesso ao nosso grupo exclusivo no Telegram onde nossa equipe e outras participantes estarão prontas para te ajudar. Além disso, fazemos lives semanais para esclarecer dúvidas e manter a motivação em alta!"
  },
  {
    question: "Posso fazer mesmo sendo mãe recente?",
    answer: "Recomendamos aguardar a liberação médica (geralmente após 40 dias do parto normal ou 60 dias da cesárea). Com a liberação médica, nossos exercícios são perfeitamente seguros e benéficos para o fortalecimento do core pós-parto. Sempre consulte seu médico antes de iniciar qualquer programa de exercícios."
  }
]

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Perguntas Frequentes
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tire suas{' '}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Dúvidas
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respondemos as principais perguntas que as mães fazem sobre o Core Define 3.0
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-white rounded-lg shadow-sm border-0 px-6 mb-4"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-600 transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Nossa equipe está pronta para te ajudar! Entre em contato conosco pelo WhatsApp 
                e tire todas as suas dúvidas antes de começar sua transformação.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  💬 Falar no WhatsApp
                </button>
                <span className="text-sm opacity-80">
                  Respondemos em até 5 minutos
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
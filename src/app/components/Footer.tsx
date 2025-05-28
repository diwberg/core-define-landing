'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, MessageCircle, Mail, MapPin, Heart } from 'lucide-react'

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=100094384980011',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/amandha1/',
    color: 'hover:text-pink-600'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/5599982602003',
    color: 'hover:text-green-600'
  }
]

const footerLinks = [
  {
    title: 'Programa',
    links: [
      { name: 'Sobre o Core Define', href: '/#about' },
      { name: 'Como Funciona', href: '/#features' },
      { name: 'Depoimentos', href: '/#testimonials' },
      { name: 'Perguntas Frequentes', href: '/#faq' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Termos de Uso', href: '/termos-de-uso' },
      { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
      { name: 'Política de Cookies', href: '/politica-de-privacidade#cookies' },
      { name: 'Cancelamento', href: '/termos-de-uso#cancelamento' }
    ]
  },
  {
    title: 'Suporte',
    links: [
      { name: 'Central de Ajuda', href: '/#faq' },
      { name: 'Contato', href: 'mailto:contato@cuidandodemim.org' },
      { name: 'WhatsApp', href: 'https://wa.me/5599982602003' },
      { name: 'Área do Aluno', href: 'https://hotmart.com/pt-br/club/cuidandodemim' }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Core Define
              </h3>
              <p className="text-gray-400 mt-2">
                Transformando vidas através do fortalecimento do core
              </p>
            </div>
            
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pink-400" />
                <span className="text-sm">contato@cuidandodemim.org</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span className="text-sm">Brasil</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-pink-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-green-400 mb-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <h4 className="font-bold text-lg">Garantia de 7 Dias</h4>
            </div>
            <p className="text-gray-300 text-center text-sm">
              Experimente o Core Define 3.0 por 7 dias. Se não ficar satisfeita, 
              devolvemos 100% do seu dinheiro, sem perguntas!
            </p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2025 Cuidando de Mim. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-pink-400 fill-current" />
              <span>para mulheres incríveis</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-300">
              Este produto não substitui o acompanhamento médico. Consulte sempre um profissional de saúde 
              antes de iniciar qualquer programa de exercícios.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 
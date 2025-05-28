import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programa de Afiliadas - Core Define',
  description: 'Ganhe uma renda extra indicando o Core Define. 25% de comissão em cada venda. Exclusivo para alunas das primeiras edições.',
}

export default function AfiliadosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
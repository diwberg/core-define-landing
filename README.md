# Core Define Landing Page 3.0

Uma landing page de alta conversão para o **Desafio Core Define 21 Dias v3.0**, criada com Next.js 15, TypeScript, Tailwind CSS, ShadCN UI e Framer Motion.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **ShadCN UI** - Componentes acessíveis e personalizáveis
- **Framer Motion** - Animações e transições suaves
- **Lucide React** - Ícones SVG otimizados

## 📁 Estrutura do Projeto

```
core-define-landing/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Hero.tsx           # Seção principal com CTA
│   │   │   ├── Features.tsx       # Benefícios e características
│   │   │   ├── Testimonials.tsx   # Depoimentos de clientes
│   │   │   ├── About.tsx          # Sobre a Amandha
│   │   │   ├── FAQ.tsx            # Perguntas frequentes
│   │   │   ├── CTA.tsx            # Chamada final para ação
│   │   │   └── FacebookPixel.tsx  # Integração Facebook Pixel
│   │   ├── page.tsx               # Página principal
│   │   ├── layout.tsx             # Layout raiz
│   │   └── globals.css            # Estilos globais
│   ├── components/
│   │   └── ui/                    # Componentes ShadCN UI
│   └── lib/
│       └── utils.ts               # Utilitários
├── public/
│   └── grid.svg                   # Padrão de fundo decorativo
└── README.md
```

## ⚡ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <seu-repositorio>
cd core-define-landing
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o Facebook Pixel
Edite o arquivo `src/app/components/FacebookPixel.tsx`:
```typescript
// Substitua 'YOUR_PIXEL_ID_HERE' pelo seu ID real do Facebook Pixel
const FACEBOOK_PIXEL_ID = 'SEU_ID_DO_PIXEL'
```

### 4. Execute o projeto
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a landing page.

## 🎨 Características da Landing Page

### ✨ Componentes Principais

#### 1. **Hero Section**
- Headline impactante com animação
- Proposta de valor clara
- CTA principal com hover effects
- Timer/contador de urgência
- Animações Framer Motion (fade-in + slide-up)

#### 2. **Features Section**
- 6 benefícios principais em cards
- Animações on-scroll (whileInView)
- Ícones coloridos e gradientes
- Layout responsivo (grid)

#### 3. **Testimonials**
- 4 depoimentos reais de clientes
- Carousel para mobile
- Grid para desktop
- Sistema de avaliação por estrelas
- CTA secundário integrado

#### 4. **About Section**
- Apresentação da Amandha
- Credibilidade e autoridade
- Estatísticas de sucesso
- Formação e certificações
- Animações de fade-in

#### 5. **FAQ Section**
- 8 perguntas frequentes
- Componente Accordion (ShadCN)
- Respostas detalhadas
- CTA adicional para suporte

#### 6. **Final CTA**
- Urgência com countdown timer
- Bônus exclusivos detalhados
- Preço destacado
- Garantias e confiança
- Indicadores de escassez

### 📱 Responsividade

- **Mobile-first design**
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Componentes adaptativos
- Navegação otimizada para touch

### 🎭 Animações

- **Framer Motion** para todas as animações
- Scroll-triggered animations (`whileInView`)
- Hover effects nos botões e cards
- Loading states
- Micro-interações

### 📊 Facebook Pixel Integration

```typescript
// Eventos rastreados automaticamente:
trackLead()              // Quando usuário demonstra interesse
trackClick()             // Cliques nos CTAs
trackInitiateCheckout()  // Início do processo de compra
trackPageView()          // Visualização da página
```

### 🎯 Copywriting Persuasivo

- **Gatilhos de urgência**: "Vagas limitadas", "Oferta expira em"
- **Prova social**: "+5.000 mães transformadas"
- **Garantias**: "30/60 dias ou seu dinheiro de volta"
- **Benefícios emocionais**: Foco na transformação de vida
- **CTAs orientados a resultado**: "Garantir Minha Transformação"

## 🛠️ Personalização

### Cores do Tema
```css
/* Cores principais definidas no Tailwind */
Pink: #ec4899 (pink-600)
Purple: #7c3aed (purple-600)
Gray: Tons neutros para texto
```

### Modificar Conteúdo
1. **Textos**: Edite diretamente nos componentes
2. **Imagens**: Substitua os placeholders em `/public/`
3. **Cores**: Modifique o `tailwind.config.js`
4. **Animações**: Ajuste os parâmetros do Framer Motion

### Adicionar Novas Seções
1. Crie um novo componente em `src/app/components/`
2. Importe e adicione ao `page.tsx`
3. Mantenha o padrão de animações e responsividade

## 📈 Otimizações de Performance

- **Lazy loading** de imagens
- **Code splitting** automático (Next.js)
- **SEO otimizado** com metadados completos
- **Fonts otimizadas** (Google Fonts)
- **Imagens responsivas** com Next.js Image

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 📋 Checklist de Deploy

- [ ] Configurar Facebook Pixel ID real
- [ ] Adicionar imagens reais dos depoimentos
- [ ] Configurar domínio personalizado
- [ ] Testar formulários de contato
- [ ] Verificar analytics
- [ ] Otimizar imagens
- [ ] Testar em dispositivos reais
- [ ] Configurar redirects para checkout

## 🎯 Métricas de Conversão

### KPIs para Monitorar:
- Taxa de conversão geral
- Scroll depth (profundidade de rolagem)
- Tempo na página
- Cliques nos CTAs
- Taxa de abandono

### Facebook Pixel Events:
- `PageView` - Visualizações da página
- `Lead` - Interesse demonstrado
- `InitiateCheckout` - Início do checkout
- `Purchase` - Compra concluída

## 📞 Suporte

Para dúvidas sobre implementação ou customização, consulte:
- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do ShadCN UI](https://ui.shadcn.com)
- [Documentação do Framer Motion](https://www.framer.com/motion)

---

**Desenvolvido com ❤️ para o sucesso do Core Define 3.0**

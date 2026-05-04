# Personal Link Hub

Um site pessoal estilo "link hub" com design high-end, futurista e minimalista, focado em identidade digital premium.

## 🎨 Características

- **Design Dark Absoluto**: Tema preto profundo com glassmorphism elegante
- **Animações Fluidas**: Microinterações suaves e transições sofisticadas
- **Cursor Customizado**: Cursor interativo que reage ao hover
- **Background Animado**: Gradiente animado com partículas flutuantes
- **Layout Responsivo**: Design adaptável para todos os dispositivos
- **Áudio Ambiente**: Sistema de música ambiente com controle de volume

## 🛠️ Tecnologias

- **React 18** - Framework principal
- **Vite** - Build tool e development server
- **Tailwind CSS** - Framework de estilização
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Biblioteca de ícones

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd personal-link-hub
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 📁 Estrutura do Projeto

```
personal-link-hub/
├── public/
│   └── audio/
│       └── ambient-music.mp3  # Adicione sua música ambiente aqui
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx
│   │   ├── AudioPlayer.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── LinkButton.jsx
│   │   └── MainCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎧 Configurando a Música Ambiente

1. Adicione seu arquivo de música em `public/audio/ambient-music.mp3`
2. O componente `AudioPlayer` controlará automaticamente a reprodução
3. Use o botão no canto inferior direito para controlar a reprodução e volume

## 🎨 Personalização

### Alterar Links e Informações

Edite o arquivo `src/components/MainCard.jsx`:

```jsx
const links = [
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    url: 'https://github.com/seu-usuario',
    color: 'from-gray-600 to-gray-800'
  },
  // ... adicione mais links
];
```

### Alterar Nome e Subtítulo

No mesmo arquivo, modifique:

```jsx
<motion.h1 className="text-4xl font-bold mb-2">
  Seu Nome
</motion.h1>
<motion.p className="text-gray-400 text-sm font-light tracking-wider">
  Sua Especialidade • Sua Paixão • Seu Foco
</motion.p>
```

### Personalizar Cores

Edite `tailwind.config.js` para ajustar as cores do tema:

```js
theme: {
  extend: {
    colors: {
      'dark-bg': '#000000',
      'dark-surface': '#0a0a0a',
      'glass': 'rgba(10, 10, 10, 0.7)',
      'glass-border': 'rgba(255, 255, 255, 0.1)',
    },
  },
}
```

## 📱 Comandos Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa linting do código

## 🌟 Destaques do Design

- **Glassmorphism**: Efeito de vidro com backdrop-filter blur
- **Gradiente Animado**: Background com movimento suave e contínuo
- **Partículas Flutuantes**: Elementos sutis que dão profundidade
- **Microinterações**: Feedback visual em todos os elementos interativos
- **Design Responsivo**: Experiência perfeita em qualquer dispositivo

## 🚀 Deploy

O projeto está pronto para deploy em plataformas como:

- Vercel
- Netlify
- GitHub Pages
- Qualquer serviço de hosting estático

## 📄 Licença

Este projeto está sob licença MIT. Sinta-se à vontade para usar e modificar conforme necessário.

---

Criado com ❤️ usando tecnologias modernas de desenvolvimento web.

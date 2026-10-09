# Personal HUD & Link Hub
---
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/2794101c-7550-4369-9213-98c3d1bf0e6a" />

---

Plataforma de identidade digital e hub de conexoes de alta performance, construida sobre uma interface escura (deep dark) minimalista com estetica HUD/cyber. Utiliza renderizacao grafica nativa em Canvas para simulacao de ondas dinamicas em glassmorphism, tipografia precisa, iconografia vetorial autentica e arquitetura baseada em React e Tailwind CSS.

---

## Visao Geral

O projeto foi concebido para fornecer uma experiencia de usuario fluida, estavel e visualmente sofisticada sem a necessidade de runtimes 3D externos pesados. O foco reside na combinacao de design de interface de alto padrao, microinteracoes refinadas e otimizacao de renderizacao.

### Principais Pilares Tecnicos

- **Dynamic Glassmorphic Wave Engine**: Renderizacao em Canvas 2D a 60 FPS com multiplas camadas harmonicas de ondas em tons de preto e grafite. Cada onda aplica gradientes de profundidade vertical e destaque de crista simulando refração de vidro, reagindo organicamente ao cursor do usuario via interpolacao fisica.
- **Identidade Vetorial Autentica**: Emprego de logotipos oficiais atraves do Simple Icons (`react-icons/si`), garantindo fidelidade de proporcao e identidade de marca (GitHub, Instagram, LinkedIn, Counter-Strike e SoundCloud) com iluminacao sutil correspondente a cada servico no hover.
- **Microinteracoes e Estado de Movimento**: Transicoes coordenadas com Framer Motion, cursor customizado com rastreamento baseado em `requestAnimationFrame` e degradacao suave para dispositivos de toque.
- **Player de Audio Integrado**: Controlador de audio ambiente com loop continuo, gerenciamento de estado desacoplado, controle de volume proporcional e suporte a mudo instantaneo.
- **Clean Architecture & Zero Bloat**: Ausencia de bibliotecas proprietarias de renderizacao de terceiros, garantindo tempo de carregamento inferior a 300ms em ambientes de producao.

---

## Stack Tecnologica

| Camada | Tecnologia | Proposito |
| :--- | :--- | :--- |
| Framework | React 18 | Declaratividade de componentes e ciclo de vida |
| Bundler & Tooling | Vite 4 | Hot Module Replacement (HMR) e empacotamento otimizado |
| Estilizacao | Tailwind CSS 3 & PostCSS | Utilitarios atomicos e design tokens escuros |
| Animacoes | Framer Motion | Orquestracao de entrada, transicoes e escala |
| Iconografia | Simple Icons & Lucide React | Logotipos autenticos e glifos funcionais |
| Renderizacao Grafica | HTML5 Canvas API | Simulacao procedimental de ondas em tempo real |

---

## Arquitetura de Diretorios

```
hud_pessoal/
├── public/
│   ├── audio/
│   │   └── ambient-music.wav     # Faixa de audio ambiente
│   ├── images/
│   │   ├── aug1.jpg              # Asset de avatar do perfil
│   │   └── bg.jpg                # Imagem de fundo cosmica em alta resolucao
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Cursor.jsx            # Cursor interativo com deteccao de estados
│   │   └── Player.jsx            # Interface e controle do player de audio
│   ├── App.jsx                   # Estrutura central e configuracao dos cartoes
│   ├── index.css                 # Folha de estilos global, tokens e reset
│   └── main.jsx                  # Ponto de entrada da aplicacao React
├── index.html                    # Documento HTML raiz
├── package.json                  # Manifesto de dependencias e scripts
├── tailwind.config.js            # Configuracao do sistema de design Tailwind
└── vite.config.js                # Configuracao de build e observacao do servidor
```

---

## Execucao Local

### Pre-requisitos

- Node.js versao 18.x ou superior
- NPM versao 9.x ou superior

### Procedimento

1. Clone o repositorio:
```bash
git clone https://github.com/augdev1/hud_pessoal.git
cd hud_pessoal
```

2. Instale as dependencias do projeto:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O servidor sera inicializado no endereco padrao `http://localhost:5173`.

---

## Scripts Disponiveis

- `npm run dev`: Executa a aplicacao em modo de desenvolvimento com hot-reloading ativo.
- `npm run build`: Compila e minifica a aplicacao para producao no diretorio `dist/`.
- `npm run preview`: Executa localmente o bundle gerado no diretorio de producao.
- `npm run lint`: Avalia o codigo fonte contra as regras configuradas de ESLint.

---

## Parametrizacao e Customizacao

### Cartoes e Conexoes

Os perfis e links estao centralizados no array `links` em `src/App.jsx`. Cada item segue o contrato:

```javascript
{
  label: 'Nome do Servico',
  handle: '@identificador',
  category: 'Categoria',
  url: 'https://...',
  icon: <ComponenteIcone />,
  iconBg: 'classes-tailwind-icone',
  accentColor: '#hex',
  glowClass: 'classes-tailwind-hover',
  badgeBg: 'classes-tailwind-badge'
}
```

### Parametros da Simulacao de Ondas

Os coeficientes fisicos e de renderizacao das ondas podem ser calibrados em `src/components/GlassWaves.jsx`:

- `baseY`: Posicionamento vertical base de cada camada (0.0 a 1.0).
- `speed`: Velocidade angular de oscilacao.
- `amplitude`: Amplitude de deslocamento em pixels.
- `frequency`: Frequencia fundamental da onda.
- `strokeColor`: Luminosidade da borda de refracao na crista.
- `fillGradient`: Paradas de cor e opacidade simulando a translucidez de vidro.

---

## Licenca

Distribuido sob a licenca MIT. Consulte o arquivo de licencamento para mais detalhes.

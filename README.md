# Portfólio de Fotografia

Portfólio profissional de fotografia desenvolvido com HTML5, CSS3 e JavaScript, seguindo os requisitos de desenvolvimento web e design responsivo.

## 📋 Sobre o Projeto

Este projeto é um portfólio online para apresentação de trabalhos fotográficos, organizados em projetos temáticos. O site foi desenvolvido com foco em:
- Design responsivo para diferentes dispositivos
- Estrutura semântica HTML5
- Estilização moderna com CSS3
- Interatividade com JavaScript

## 📁 Estrutura do Projeto

```
portifolio fotos/
├── index.html          # Página principal com estrutura semântica
├── style.css           # Estilos responsivos e paleta de cores
├── app.js              # Lógica de carregamento de imagens e interações
├── images/             # Pasta principal de imagens
│   ├── entre-montanhas/       # Fotos do projeto "Entre Montanhas"
│   ├── agua-em-movimento/     # Fotos do projeto "Água em Movimento"
│   ├── silencios-natureza/     # Fotos do projeto "Silêncios da Natureza"
│   └── hero-bg.jpg            # Imagem de fundo da seção hero
└── README.md           # Este arquivo de documentação
```

## ✅ Requisitos Atendidos

### Regras de Estilo (CSS)

✅ **Layout responsivo (ajustável para celular)**
- Media queries implementadas para tablet (968px) e mobile (768px e 480px)
- Menu hambúrguer para dispositivos móveis
- Imagens e textos adaptáveis com `clamp()` para diferentes tamanhos de tela
- Grid e Flexbox utilizados para layouts flexíveis

✅ **Paleta de cores definida**
- Tema escuro (fundo preto #000000)
- Texto branco (#ffffff) para contraste adequado
- Cores secundárias definidas em variáveis CSS

✅ **Tipografia harmoniosa (fontes legíveis)**
- Fonte Inter do Google Fonts (pesos: 300, 400, 500, 600, 700)
- Tamanhos de fonte responsivos com `clamp()`
- Line-height adequado (1.6-1.8) para legibilidade
- Hierarquia tipográfica clara (títulos, subtítulos, corpo)

✅ **Uso adequado de margin, padding e alinhamento**
- Sistema de espaçamento consistente com variáveis CSS
- Alinhamento centralizado para títulos e descrições
- Margens e paddings proporcionais em todas as seções
- Espaçamento adequado entre elementos

✅ **Bordas e sombras (opcional)**
- Bordas sutis no header e elementos de navegação
- Sombras aplicadas em cards e elementos interativos
- Efeitos de hover com transições suaves

✅ **Flexbox ou Grid (pelo menos um)**
- **Flexbox**: Utilizado no header, navegação, hero section e footer
- **Grid**: Utilizado na seção de clientes para layout em colunas responsivo
- Combinação de ambos para máxima flexibilidade

### Regras de Estrutura (HTML)

✅ **Uso correto de tags semânticas**
- `<header>` - Cabeçalho com logo e navegação
- `<nav>` - Menu de navegação com âncoras internas
- `<main>` - Conteúdo principal do site
- `<section>` - Seções temáticas (Hero, Projetos, Sobre, Destaques, Clientes, Contato)
- `<article>` - Cada projeto individual dentro da seção de projetos
- `<footer>` - Rodapé do site

✅ **Menu de navegação funcional (âncoras internas)**
- Links de navegação com âncoras (#inicio, #projetos, #sobre, etc.)
- Scroll suave implementado com jQuery
- Menu responsivo com toggle para mobile
- Fechamento automático do menu ao clicar em link (mobile)

✅ **Organização limpa e indentada do código**
- Indentação consistente (2 espaços)
- Estrutura hierárquica clara
- Separação lógica de seções
- Nomenclatura descritiva de classes

✅ **Comentários no código explicando partes importantes**
- Comentários em HTML explicando cada seção
- Comentários em CSS organizando blocos de estilos
- Comentários em JavaScript explicando funções principais
- Documentação inline para facilitar manutenção

### Entrega

✅ **Pasta contendo:**
- `index.html` - Página principal
- `style.css` - Arquivo de estilos
- Pasta `images/` com as imagens usadas
  - `images/entre-montanhas/` - Fotos do projeto "Entre Montanhas"
  - `images/agua-em-movimento/` - Fotos do projeto "Água em Movimento"
  - `images/silencios-natureza/` - Fotos do projeto "Silêncios da Natureza"
  - `images/hero-bg.jpg` - Imagem de fundo do hero

## 📸 Como Adicionar Fotos

### Método 1: Carregamento Automático (Recomendado)

1. **Organize suas fotos nas pastas corretas:**
   - `images/entre-montanhas/` - Para fotos do projeto "Entre Montanhas"
   - `images/agua-em-movimento/` - Para fotos do projeto "Água em Movimento"
   - `images/silencios-natureza/` - Para fotos do projeto "Silêncios da Natureza"

2. **Nomeie suas fotos seguindo o padrão:**
   - `img01.jpg`, `img02.jpg`, `img03.jpg`, etc.
   - Ou `img01.png`, `img02.png`, etc.
   - Formatos suportados: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

3. **O sistema carregará automaticamente** todas as imagens numeradas encontradas nas pastas.

### Método 2: Lista Manual (Para controle total)

1. Abra o arquivo `app.js`

2. Na configuração `galleryConfig`, especifique manualmente as imagens:
```javascript
entreMontanhas: {
    folder: 'images/entre-montanhas/',
    containerId: 'entreMontanhasGallery',
    images: ['minha-foto-1.jpg', 'minha-foto-2.jpg', 'retrato-3.png']
}
```

3. Você pode usar qualquer nome de arquivo, não precisa seguir o padrão `img01.jpg`

### Imagem de Fundo do Hero

A seção inicial (hero) usa uma imagem de fundo. Para adicionar sua foto:

1. Coloque uma foto na pasta `images/` com o nome `hero-bg.jpg`
2. Ou altere o nome no arquivo `style.css` (linha 268) para o nome da sua imagem
3. A imagem será exibida em tela cheia com um overlay escuro para melhor legibilidade do texto

### Foto da Seção Sobre

A seção "Sobre" exibe uma foto da fotógrafa ao lado do texto:

1. Coloque sua foto na pasta `images/` com o nome `sobre-foto.jpg`
2. Ou altere o nome no arquivo `index.html` (linha 64) para o nome da sua imagem
3. A foto será exibida ao lado do texto em desktop e acima do texto em mobile (layout responsivo)

## 🎨 Personalização

### Editar Textos

Abra `index.html` e edite:
- Título do portfólio (linha 20)
- Título e subtítulo do hero (linhas 46-47)
- Textos dos projetos (seção projetos)
- Texto "Sobre" (seção sobre)
- Lista de destaques (seção destaques)
- Lista de clientes (seção clientes)
- Informações de contato (seção contato)

### Alterar Cores

Edite as variáveis CSS em `style.css` (linhas 8-30):
```css
:root {
    --color-primary: #000000;
    --color-text: #ffffff;
    /* ... outras cores ... */
}
```

### Adicionar Novos Projetos

1. Adicione um novo item no menu em `index.html` (se necessário)
2. Crie uma nova seção de projeto dentro de `#projetos`
3. Adicione a configuração em `app.js` no objeto `galleryConfig`
4. Crie a pasta correspondente em `images/`

## 🚀 Funcionalidades

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Menu hambúrguer para mobile
- ✅ Galeria de fotos com carrossel (Glide.js)
- ✅ Lightbox ao clicar nas imagens
- ✅ Animações suaves de scroll
- ✅ Carregamento automático de imagens
- ✅ Navegação suave entre seções
- ✅ Estrutura semântica HTML5
- ✅ Acessibilidade (aria-labels, navegação por teclado)

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com variáveis CSS, Flexbox, Grid
- **JavaScript (ES6+)** - Lógica e interatividade
- **jQuery** - Animações e manipulação do DOM
- **Glide.js** - Carrossel de imagens
- **Google Fonts (Inter)** - Tipografia

## 📱 Responsividade

O site é totalmente responsivo e foi testado em:
- **Desktop**: 1920px, 1440px, 1280px
- **Tablet**: 968px e abaixo
- **Mobile**: 768px, 480px e abaixo

### Breakpoints:
- Tablet: `max-width: 968px`
- Mobile: `max-width: 768px`
- Mobile pequeno: `max-width: 480px`

## 📝 Seções do Site

1. **Hero** - Banner principal com imagem de fundo
2. **Projetos** - Três projetos fotográficos:
   - Entre Montanhas
   - Água em Movimento
   - Silêncios da Natureza
3. **Sobre** - Texto sobre a fotógrafa
4. **Destaques** - Lista de prêmios e reconhecimentos
5. **Clientes & Colaborações** - Lista organizada por categorias
6. **Contato** - Informações de contato

## 🔧 Como Usar

1. Clone ou baixe o projeto
2. Adicione suas fotos nas pastas correspondentes
3. Personalize os textos em `index.html`
4. Ajuste as cores em `style.css` se desejar
5. Abra `index.html` no navegador

---
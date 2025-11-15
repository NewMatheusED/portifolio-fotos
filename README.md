# Portfólio de Fotografia

Portfólio responsivo para estudante de fotografia, desenvolvido com HTML, CSS e JavaScript.

## Estrutura do Projeto

```
portifolio fotos/
├── index.html          # Página principal
├── style.css           # Estilos responsivos
├── app.js              # Lógica e animações
├── images/             # Pasta principal de imagens
│   ├── retratos/       # Fotos de retratos
│   ├── paisagens/      # Fotos de paisagens
│   └── eventos/        # Fotos de eventos
└── README.md           # Este arquivo
```

## Como Adicionar Fotos

### Método 1: Carregamento Automático (Recomendado para início)

1. **Organize suas fotos nas pastas corretas:**
   - `images/retratos/` - Para fotos de retratos
   - `images/paisagens/` - Para fotos de paisagens
   - `images/eventos/` - Para fotos de eventos

2. **Nomeie suas fotos seguindo o padrão:**
   - `img01.jpg`, `img02.jpg`, `img03.jpg`, etc.
   - Ou `img01.png`, `img02.png`, etc.
   - Formatos suportados: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

3. **O sistema carregará automaticamente** todas as imagens numeradas encontradas nas pastas.

### Método 2: Lista Manual (Recomendado para controle total)

1. Abra o arquivo `app.js`

2. Na configuração `galleryConfig`, especifique manualmente as imagens:
```javascript
retratos: {
    folder: 'images/retratos/',
    containerId: 'retratosGallery',
    images: ['minha-foto-1.jpg', 'minha-foto-2.jpg', 'retrato-3.png']
}
```

3. Você pode usar qualquer nome de arquivo, não precisa seguir o padrão `img01.jpg`

### Imagem de Fundo do Hero

A seção inicial (hero) usa uma imagem de fundo. Para adicionar sua foto:

1. Coloque uma foto na pasta `images/` com o nome `hero-bg.jpg`
2. Ou altere o nome no arquivo `style.css` (linha 156) para o nome da sua imagem
3. A imagem será exibida em tela cheia com um overlay escuro para melhor legibilidade do texto

## Personalização

### Editar Textos

Abra `index.html` e edite:
- Título do portfólio (linha 11 e 40)
- Subtítulo do hero (linha 41)
- Descrições das seções (linhas 48, 57, 66)
- Texto "Sobre" (linhas 75-82)
- Informações de contato (linhas 91-92)

### Alterar Cores

Edite as variáveis CSS em `style.css` (linhas 7-16):
```css
:root {
    --color-primary: #1a1a1a;
    --color-secondary: #666;
    /* ... outras cores ... */
}
```

### Adicionar Novas Seções

1. Adicione um novo item no menu em `index.html`
2. Crie uma nova seção de galeria
3. Adicione a configuração em `app.js` no objeto `galleryConfig`
4. Crie a pasta correspondente em `images/`

## Funcionalidades

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Menu hambúrguer para mobile
- ✅ Galeria de fotos com lightbox
- ✅ Animações suaves de scroll
- ✅ Carregamento automático de imagens
- ✅ Navegação suave entre seções

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e Grid/Flexbox)
- JavaScript (ES6+)
- jQuery (para animações)
- Google Fonts (Inter)
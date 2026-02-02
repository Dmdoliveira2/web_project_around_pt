# 🗺️ Around The U.S.

Around The U.S. é um projeto web interativo que apresenta galeria de cartões com imagens de locais icônicos, com funcionalidades de edição de perfil, adição/remoção de cartões e modal popup. O projeto demonstra habilidades em HTML, CSS modular (BEM), JavaScript moderno com módulos ES6, validação de formulários e manipulação do DOM.

**Link do Site:** 🔗 [https://dmdoliveira2.github.io/web_project_around_pt/](https://dmdoliveira2.github.io/web_project_around_pt/)

---

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido como um exercício de desenvolvimento web frontend, focando em:
- Estrutura HTML semântica
- CSS modular e organizado com metodologia BEM
- JavaScript ES6+ com módulos e classes
- Manipulação interativa do DOM
- Validação de formulários
- Componentes reutilizáveis

O objetivo é demonstrar domínio sobre desenvolvimento web estático com interatividade progressiva.

---

## 📌 Funcionalidades

✅ **Perfil de Usuário:**
- Exibição de avatar, nome e descrição do usuário
- Botão para editar informações do perfil
- Modal popup para edição de dados

✅ **Galeria de Cartões:**
- Exibição dinâmica de cartões com imagens
- Botão para adicionar novos cartões
- Ícone de coração para marcar/desmarcar como favorito
- Botão para deletar cartões

✅ **Modal Popup:**
- Abertura e fechamento de modais
- Validação em tempo real de formulários
- Fechar popup ao clicar no overlay (fundo escuro)
- Fechar popup com a tecla ESC

✅ **Validação de Formulários:**
- Validação de campos obrigatórios
- Validação de comprimento mínimo e máximo
- Mensagens de erro personalizadas
- Desabilitação do botão de submit quando inválido

✅ **Design Responsivo:**
- Layout adaptável para diferentes tamanhos de tela
- Estrutura flexível usando CSS Grid e Flexbox

---

## 🧱 Tecnologias Utilizadas

| Tecnologia | Uso |
|-----------|-----|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização e layout responsivo |
| **JavaScript ES6+** | Lógica interativa, módulos e classes |
| **BEM** | Metodologia de nomenclatura CSS |
| **GitHub Pages** | Hospedagem gratuita |

---

## 📁 Estrutura do Projeto

```
web_project_around_pt/
│
├── 📄 index.html                    # Arquivo principal HTML
├── 📄 README.md                     # Documentação do projeto
│
├── 📁 pages/
│   └── index.css                    # Arquivo CSS principal que importa todos os estilos
│
├── 📁 blocks/                       # Estilos componentizados (metodologia BEM)
│   ├── page.css                     # Estilos globais da página
│   ├── header.css                   # Estilos do cabeçalho
│   ├── content.css                  # Estilos do conteúdo principal
│   ├── footer.css                   # Estilos do rodapé
│   ├── profile.css                  # Estilos da seção de perfil
│   ├── cards.css                    # Estilos da galeria de cartões
│   ├── card.css                     # Estilos de cada cartão individual
│   └── popup.css                    # Estilos do modal popup
│
├── 📁 scripts/                      # Scripts JavaScript (módulos)
│   ├── index.js                     # Arquivo principal, importa módulos e inicializa app
│   ├── card.js                      # Classe Card para criar cartões dinamicamente
│   ├── FormValidator.js             # Classe para validar formulários
│   ├── ultils.js                    # Funções utilitárias (abrir/fechar modais)
│   └── validade.js                  # Lógica de validação de campos
│
├── 📁 images/                       # Imagens do projeto
│   ├── logo.svg                     # Logo do site
│   ├── avatar.jpg                   # Avatar do perfil
│   └── [outras imagens...]
│
├── 📁 vendor/                       # Bibliotecas externas
│   ├── normalize.css                # CSS reset para compatibilidade
│   ├── fonts.css                    # Declaração de fontes customizadas
│   └── fonts/                       # Arquivos de fonte
│
└── 📁 .git/                         # Controle de versão Git
```

---

## 📄 Descrição dos Arquivos Principais

### HTML (`index.html`)
Estrutura da página com:
- **Header:** Logo do site
- **Main:** Seção de perfil (avatar, nome, botões de edição/adicionar)
- **Galeria:** Container para cartões dinâmicos
- **Footer:** Rodapé com copyright
- **Modal:** Popup para editar perfil

### JavaScript

#### `index.js` (Arquivo Principal)
- Importa as classes `Card` e `FormValidator`
- Define array inicial de cartões (`initialCards`)
- Renderiza cartões na página
- Configura validadores de formulários
- Gerencia eventos dos botões de edição e adição

**Estrutura:**
```javascript
import Card from './card.js';
import FormValidator from './FormValidator.js';
import { openModal, closeModal } from './utils.js';

const initialCards = [
  { name: "Local", link: "URL da imagem" },
  // ...mais cartões
];

// Renderiza cartões iniciais
// Configura validadores
// Adiciona event listeners
```

#### `card.js` (Classe Card)
Cria e gerencia elementos HTML dos cartões dinamicamente.

**Métodos principais:**
- `constructor(data, selector)`: Inicializa o cartão com dados
- `_createCardElement()`: Cria a estrutura HTML do cartão
- `toggleLike()`: Marcar/desmarcar como favorito (adiciona/remove classe)
- `removeCard()`: Deleta o cartão do DOM
- `getCardElement()`: Retorna o elemento HTML para inserção na página

**Uso:**
```javascript
const card = new Card(cardData, '.cards__list');
const cardElement = card.getCardElement();
cardList.appendChild(cardElement);
```

#### `FormValidator.js` (Classe FormValidator)
Valida formulários em tempo real com feedback visual.

**Métodos principais:**
- `constructor(settings, formElement)`: Inicializa com configurações de validação
- `enableValidation()`: Ativa listeners de validação em todos os inputs
- `_validateInput(inputElement)`: Valida um campo específico
- `_toggleButtonState()`: Ativa/desativa botão submit baseado na validade

**Configurações:**
```javascript
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
```

#### `ultils.js` (Utilitários)
Funções auxiliares para gerenciar modais.

**Funções:**
- `openModal(modal)`: Abre modal com evento de fechar por ESC
- `closeModal(modal)`: Fecha modal e remove listeners
- `handleEscapeKey(evt)`: Fecha modal ao pressionar ESC
- `handleOverlayClick(evt)`: Fecha modal ao clicar fora

#### `validade.js` (Validação)
Define regras e mensagens de validação.

**Contém:**
- Regras de tamanho mínimo e máximo
- Mensagens de erro personalizadas
- Expressões regulares para tipos específicos

### CSS (Metodologia BEM)

Organização modular com Blocos, Elementos e Modificadores:

#### `blocks/page.css`
- Estilos globais
- Classes utilitárias (`.page__section`)
- Variáveis CSS (cores, tipografia)

#### `blocks/header.css`
- Logo do site (`.header`, `.header__logo`)

#### `blocks/profile.css`
- Avatar, nome, descrição do usuário
- Botões de edição e adição
- Classes: `.profile`, `.profile__image`, `.profile__title`, `.profile__edit-button`, etc.

#### `blocks/cards.css`
- Grid da galeria de cartões
- Layout responsivo
- Classe: `.cards__list`

#### `blocks/card.css`
- Estilos de cada cartão
- Imagem, título, botões
- Estados (hover, ativo)
- Classes: `.card`, `.card__image`, `.card__title`, `.card__like-button`, `.card__delete-button`

#### `blocks/popup.css`
- Modal e overlay
- Formulário e inputs
- Animações de abertura/fechamento
- Classe `.popup_is-opened` ativa o modal

#### `blocks/content.css`, `blocks/footer.css`
- Estilos específicos de seções

#### `vendor/normalize.css`
- CSS reset para compatibilidade cross-browser

#### `vendor/fonts.css`
- Importação e declaração de fontes customizadas

---

## 🛠️ Como Rodar Localmente

### 1. Clone o Repositório
```bash
git clone https://github.com/dmdoliveira2/web_project_around_pt.git
```

### 2. Acesse a Pasta
```bash
cd web_project_around_pt
```

### 3. Abra no Navegador
**Opção A:** Duplo-clique no arquivo `index.html`

**Opção B:** Use um servidor local (recomendado para módulos ES6)
```bash
# Com Python 3
python -m http.server 8000

# Com Python 2
python -m SimpleHTTPServer 8000

# Com Node.js (http-server)
npx http-server
```

Depois acesse `http://localhost:8000`

---

## 🎯 Fluxo de Interação

1. **Carregar Página:** Os cartões iniciais são renderizados dinamicamente via `initialCards`
2. **Editar Perfil:** Clique no botão de edição, preencha nome e descrição, clique "Salvar"
3. **Adicionar Cartão:** Clique no botão "+", insira nome do local e URL da imagem
4. **Marcar como Favorito:** Clique no ícone de coração (muda de cor)
5. **Deletar Cartão:** Clique no ícone de lixeira (remove da página)
6. **Fechar Modal:** Clique no X, no fundo escuro, ou pressione ESC

---

## 🔧 Como Customizar

### Adicionar Novos Cartões
Edite o array `initialCards` em scripts/index.js:

```javascript
const initialCards = [
  {
    name: "Nome do Local",
    link: "https://url-da-imagem.jpg",
  },
  {
    name: "Outro Local",
    link: "https://url-outra-imagem.jpg",
  },
  // ... adicione mais cartões
];
```

### Alterar Estilos
Modifique os arquivos CSS em `blocks/`:
- Cores em `page.css`
- Layout de cartões em `cards.css`
- Estilos do popup em `popup.css`

### Ajustar Validação
Configure as regras em scripts/FormValidator.js:
```javascript
const validationConfig = {
  // ... configurações
};
```

---

## 📱 Responsividade

O projeto usa **CSS Grid e Flexbox** para adaptar-se a diferentes dispositivos:
- **Desktop (1024px+):** 3 colunas de cartões
- **Tablet (768px-1023px):** 2 colunas
- **Mobile (<768px):** 1 coluna

Breakpoints podem ser ajustados em blocks/cards.css

---

## 🎨 Design System

**Cores Principais:**
- Preto: `#000000`
- Branco: `#FFFFFF`
- Cinza: `#545454`
- Cinza claro: `#EFEFEF`
- Verde (ativo): `#00FF00` (para like)

**Tipografia:**
- Fonte: Inter (importada em `vendor/fonts.css`)
- Tamanhos: 12px a 54px conforme contexto
- Pesos: 400 (normal), 500 (semi-bold), 700 (bold)

---

## 🐛 Resolução de Problemas

### Módulos ES6 não funcionam ao abrir arquivo direto
- Solução: Use um servidor local (veja seção "Como Rodar Localmente")

### Validação não funciona
- Verifique se `FormValidator.js` está sendo importado em `index.js`
- Confirme que os seletores CSS em `validationConfig` correspondem ao HTML

### Modais não abrem/fecham
- Verifique se `ultils.js` está sendo importado
- Confirme que `popup_is-opened` existe no CSS

---

## 🚀 Próximas Melhorias

- [ ] Adicionar persistência com **localStorage**
- [ ] Conectar a uma **API backend**
- [ ] Implementar autenticação de usuários
- [ ] Melhorar acessibilidade (ARIA labels, contraste)
- [ ] Adicionar animações CSS suaves
- [ ] Implementar temas **dark/light**
- [ ] Otimizar performance (**lazy loading** de imagens)
- [ ] Adicionar testes automatizados (Jest, Cypress)
- [ ] Deploy em plataforma como **Vercel** ou **Netlify**

---

## 📚 Conceitos Demonstrados

✨ **Frontend Moderno:**
- Módulos ES6 (import/export)
- Classes JavaScript
- Manipulação avançada do DOM
- Event delegation
- Data binding

✨ **Design Patterns:**
- Componentes reutilizáveis
- Separação de responsabilidades
- Metodologia BEM para CSS

✨ **Boas Práticas:**
- Validação de formulários
- Acessibilidade básica
- Responsividade
- Código limpo e organizado

---

## 👤 Autor

**Douglas Oliveira**  
Desenvolvedor Web focado em criar projetos com HTML, CSS e JavaScript.

**GitHub:** [@dmdoliveira2](https://github.com/dmdoliveira2)

---

## 📜 Licença

Este projeto é de código aberto e disponível sob a licença MIT.

```
MIT License

Copyright (c) 2025 Douglas Oliveira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🤝 Contribuições

Sinta-se livre para fazer fork, criar branches e enviar pull requests com melhorias!

**Passos para contribuir:**
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

**Desenvolvido com ❤️ em 2025**

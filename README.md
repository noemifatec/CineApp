# CineApp - Catálogo de Filmes

**Nome do Aluno:** [Noemi Tejada Henrique]  
**RA:** [2991392513023]  
**Disciplina:** Desenvolvimento Mobile

---

## 💻 Instruções Mínimas para Execução

Para rodar o projeto localmente, execute os seguintes comandos no terminal:

````bash
npm install
npx expo start

## 📱 Descrição do Aplicativo

O **CineApp** é uma aplicação mobile desenvolvida com **React Native** e **Expo (Expo Router)** para apresentação e interação com um catálogo de filmes. O projeto foi construído aplicando exclusivamente os conceitos estudados até à Aula 09 da disciplina.

### 🚀 Funcionalidades Principais

- **Tela Inicial (`index.tsx`):** Apresentação da aplicação CineApp com logotipo, descrição e acesso ao catálogo.
- **Tela de Catálogo (`catalogo.tsx`):** Listagem de 6 filmes cadastrados com título, género, ano e capa.
- **Sistema de Favoritos (`useState`):** Alteração de estado em tempo real para marcar/desmarcar favoritos (`☆ Favoritar` ➔ `★ Favorito`).
- **Feedback Visual (`Pressable`):** Efeito visual de pressão (`pressed`) nos botões e cartões.
- **Tela de Detalhes (`detalhes.tsx`):** Visualização completa do filme selecionado.
- **Tela Sobre (`sobre.tsx`):** Informações sobre a versão, disciplina e objetivo do CineApp.
- **Ciclo de Vida (`useEffect`):** Log no terminal ao carregar a tela de catálogo.

---

## 📁 Estrutura do Projeto

```text
CineApp/
├── app/
│   ├── _layout.tsx    # Configuração do Expo Router
│   ├── index.tsx      # Tela Inicial
│   ├── catalogo.tsx   # Tela do Catálogo
│   ├── detalhes.tsx   # Tela de Detalhes
│   └── sobre.tsx      # Tela Sobre
├── components/
│   ├── FilmeCard.tsx  # Componente do Card do Filme
│   └── Botao.tsx      # Componente Reutilizável de Botão
└── README.md          # Documentação do projeto
````

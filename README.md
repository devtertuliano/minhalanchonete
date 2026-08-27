# Minha Lanchonete

Site de uma lanchonete fictícia, desenvolvido como projeto de estudo em desenvolvimento web fullstack. Começou como um projeto estático de curso e está sendo evoluído para uma aplicação completa, com carrinho de compras, login e histórico de pedidos.

## Funcionalidades

### ✅ Concluído
- Estrutura de páginas: Início, Cardápio (Lanches, Bebidas, Sobremesas), Sobre Nós, Contato
- Navbar fixa (sticky) e responsiva
- Identidade visual própria (paleta quente, tipografia Fraunces + Inter)
- Carrinho de compras funcional na página de Lanches:
  - Adicionar itens ao carrinho via JavaScript
  - Exibição dinâmica dos itens adicionados
  - Cálculo automático do total

### 🚧 Em desenvolvimento / próximos passos
- Replicar o carrinho para as páginas de Bebidas e Sobremesas
- Botão "Finalizar pedido"
- Banco de dados (PostgreSQL ou MySQL) para armazenar usuários e pedidos
- Back-end em Node.js:
  - Cadastro e login de usuários
  - Registrar pedidos finalizados
  - Listar pedidos do cliente autenticado
- Tela de login / cadastro
- Tela "Meus pedidos" (histórico de pedidos do cliente)

## Tecnologias

- **Front-end:** HTML5, CSS3, JavaScript puro
- **Back-end (planejado):** Node.js
- **Banco de dados (planejado):** PostgreSQL ou MySQL

## Estrutura de arquivos

```
├── intex.html         # Página inicial
├── cardapio.html       # Menu com links pras categorias
├── lanches.html        # Categoria Lanches (com carrinho funcional)
├── bebidas.html         # Categoria Bebidas
├── sobremesas.html      # Categoria Sobremesas
├── sobre.html            # Sobre a lanchonete
├── contato.html          # Contato
├── style.css              # Estilos gerais do site
└── carrinho.js            # Lógica do carrinho de compras
```

## Como rodar localmente

Por enquanto o projeto é 100% front-end — basta abrir o arquivo `intex.html` no navegador. Não precisa de servidor nem instalação de dependências ainda; isso vai mudar quando o back-end em Node.js for adicionado.

## Autor

Projeto pessoal de estudo em desenvolvimento web fullstack.

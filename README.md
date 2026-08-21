# Cordeiro Distribuidora - Catálogo Digital 🛒

Um catálogo digital minimalista e focado na experiência mobile (mobile-first) para a distribuidora de bebidas e tabacaria Cordeiro. 

Este sistema permite que os clientes naveguem pelos produtos, filtrem por categoria, adicionem itens ao carrinho e finalizem o pedido diretamente via WhatsApp. Além disso, conta com um painel administrativo completo para o gerenciamento do catálogo.

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/) (App Router):** Framework React para renderização e rotas.
- **Vanilla CSS:** Estilização customizada garantindo design único, animações e responsividade sem dependências externas.
- **[Supabase](https://supabase.com/):** Backend as a Service (BaaS) utilizado como banco de dados PostgreSQL para armazenar produtos e categorias.
- **[Vercel](https://vercel.com/):** Plataforma de hospedagem e CI/CD.

## ✨ Funcionalidades Principais

### Para os Clientes:
- **Catálogo Online:** Visualização de todos os produtos ativos.
- **Filtros e Buscas:** Navegação facilitada por categorias de produtos.
- **Carrinho de Compras Persistente:** Os itens adicionados ao carrinho ficam salvos no navegador (Local Storage) mesmo se o usuário fechar a página.
- **Checkout Integrado:** Finalização do pedido gerando uma mensagem estruturada e redirecionando automaticamente para o WhatsApp de atendimento da loja.

### Para o Administrador (Painel `/admin`):
- **Gestão de Produtos:** Adicionar, editar e excluir produtos do catálogo.
- **Controle de Visibilidade:** Opção para ativar ou inativar produtos (produtos inativos não aparecem para o cliente, mas continuam salvos no sistema).
- **Busca e Filtro Avançados:** Barra de pesquisa e filtro por categorias exclusivos do painel para facilitar a gestão de grandes estoques.

## 🛠️ Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/lucasssantanna98/cordeiro-distribuidora.git
   cd cordeiro-distribuidora
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configuração das Variáveis de Ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto e adicione suas chaves do Supabase:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
   ```

4. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**
   - App Principal: [http://localhost:3000](http://localhost:3000)
   - Painel Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

## 🗄️ Estrutura do Banco de Dados (Supabase)

O banco de dados possui uma tabela principal chamada `products` com a seguinte estrutura:

- `id` (uuid, primary key)
- `name` (text, not null)
- `description` (text)
- `price` (numeric, not null)
- `category` (text, not null)
- `image_url` (text)
- `active` (boolean, default: true)
- `created_at` (timestamp)

## 📞 Contato

Para dúvidas ou suporte relacionado à aplicação, entre em contato através do repositório ou com o desenvolvedor responsável.

# 🍻 Cordeiro Distribuidora - Catálogo Digital & Delivery

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database%20%26%20Auth-emerald?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://cordeiro-distribuidora.vercel.app/)

Catálogo digital moderno, responsivo e projetado com foco na experiência mobile (**mobile-first**) para a distribuidora de bebidas **Cordeiro Distribuidora**.

O sistema permite que os clientes naveguem pelo catálogo completo de bebidas e combos, filtrem por categoria, adicionem itens ao carrinho e finalizem o pedido diretamente via **WhatsApp** com cálculo automático do total e opções de entrega (Delivery ou Retirada). Além disso, conta com um painel administrativo completo e protegido para gestão do catálogo.

🔗 **Produção:** [https://cordeiro-distribuidora.vercel.app](https://cordeiro-distribuidora.vercel.app)  
🔐 **Painel Admin:** [https://cordeiro-distribuidora.vercel.app/admin](https://cordeiro-distribuidora.vercel.app/admin)

---

## 📱 Funcionalidades Principais

### 🛍️ Para o Cliente:
- **Catálogo Organizado por Categorias:** Filtros rápidos para *Cervejas, Destilados, Combos, Energéticos, Refrigerantes e Diversos*.
- **Destaques da Semana na Home:** Vitrine inicial com combos e produtos em destaque (`is_featured`).
- **Cards Visuais Otimizados:** Imagens completas de garrafas, latas e packs sem distorção ou cortes (`objectFit: contain`).
- **Carrinho de Compras Persistente:** Itens e quantidades salvos no `localStorage` do navegador com visualização de fotos miniaturas e botão para limpar carrinho.
- **Checkout Inteligente no WhatsApp:** Geração automática da mensagem estruturada com nome do cliente, itens escolhidos, endereço de entrega e total calculado.
- **Compartilhamento Social com Preview Oficial:** Links compartilhados no WhatsApp e redes sociais exibem a logo da distribuidora e descrições chamativas via Open Graph metadata.

### 🛡️ Para a Administração (`/admin`):
- **Autenticação Segura:** Login protegido via Supabase Auth.
- **Gestão Completa de Produtos (CRUD):** Adicionar, editar e excluir bebidas do catálogo.
- **Controle de Status:**
  - `is_active`: Ativar ou pausar a exibição de um item para os clientes.
  - `is_featured`: Marcar ou desmarcar produtos para a seção "Destaques da Semana" na Home.
- **Upload de Imagens:** Upload direto de fotos para o bucket de armazenamento do Supabase Storage (`products-images`).

---

## 🏗️ Estrutura da Aplicação

O projeto foi construído utilizando **Next.js 15 com App Router**, TypeScript e Vanilla CSS Modules para obter máximo desempenho e controle estilístico.

```text
cordeiro-distribuidora/
├── public/
│   ├── logo.png               # Logo oficial da distribuidora
│   └── products/              # 39 imagens locais dos produtos (packs, garrafas, latas)
├── src/
│   ├── app/                   # Next.js App Router (Páginas e Rotas)
│   │   ├── admin/             # Painel administrativo (/admin e /admin/login)
│   │   ├── cart/              # Página do Carrinho e Checkout (/cart)
│   │   ├── catalog/           # Página do Catálogo Completo (/catalog)
│   │   ├── globals.css        # Variáveis de tema (cores, tipografia, glassmorphism)
│   │   ├── icon.png           # Favicon do aplicativo
│   │   ├── layout.tsx         # Root layout com Providers e Open Graph tags
│   │   ├── opengraph-image.png# Imagem padrão para compartilhamento em redes sociais
│   │   └── page.tsx           # Página Inicial (Hero + Destaques da Semana)
│   ├── components/            # Componentes reutilizáveis
│   │   ├── Header.tsx         # Cabeçalho com logo, navegação e contador do carrinho
│   │   ├── ProductCard.tsx    # Card do produto com imagem, preço e botão +Add
│   │   └── Providers.tsx      # Provedor global de estado do carrinho (CartProvider)
│   ├── context/
│   │   └── CartContext.tsx    # Gerenciamento de estado do carrinho com persistência
│   ├── data/
│   │   └── mockProducts.ts    # Catálogo fallback com os 40 produtos e imagens locais
│   ├── services/
│   │   └── productService.ts  # Camada de integração Supabase + fallback para Mock
│   ├── types/
│   │   └── index.ts           # Interfaces TypeScript (Product, CartItem)
│   └── utils/
│       ├── supabase.ts        # Inicialização do cliente Supabase
│       └── whatsapp.ts        # Formatador da mensagem do pedido para o WhatsApp
├── supabase-schema.sql        # Script SQL completo e idempotente para o Supabase
└── next.config.ts             # Configurações do Next.js e domínios remotos de imagens
```

### 🔄 Arquitetura de Dados Resiliente (Mock Fallback)
O serviço `productService.ts` implementa uma estratégia tolerante a falhas:
1. Tenta buscar os produtos ativos diretamente do banco **Supabase**.
2. Caso a conexão falhe, as credenciais não estejam configuradas ou a tabela esteja vazia, a aplicação carrega automaticamente o catálogo padrão de [mockProducts.ts](file:///c:/Users/lucas/Documents/Sant'Anna%20Labs/cordeiro-distribuidora/src/data/mockProducts.ts), garantindo que a loja nunca fique fora do ar para o cliente.

---

## 🗄️ Estrutura do Banco de Dados (Supabase / PostgreSQL)

### 1. Tabela: `public.products`

Armazena todo o catálogo de produtos e seus estados de visibilidade.

| Coluna | Tipo | Nulo? | Padrão | Descrição |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `UUID` | Não | `gen_random_uuid()` | Identificador único do produto (Chave Primária) |
| `name` | `TEXT` | Não | — | Nome comercial da bebida / item |
| `description` | `TEXT` | Sim | `NULL` | Detalhes, volume e composição do item |
| `price` | `NUMERIC(10, 2)` | Não | — | Preço de venda em Reais (BRL) |
| `category` | `TEXT` | Não | — | Categoria (*Cervejas, Destilados, Combos, etc.*) |
| `image_url` | `TEXT` | Sim | `NULL` | URL da imagem (local `/products/...` ou Supabase Storage) |
| `is_active` | `BOOLEAN` | Sim | `true` | Se o produto está visível no catálogo do cliente |
| `is_featured` | `BOOLEAN` | Sim | `false` | Se o produto aparece na vitrine de destaques da Home |
| `created_at` | `TIMESTAMPTZ` | Não | `now()` | Data e hora de criação do registro |

---

### 2. Políticas de Segurança (Row Level Security - RLS)

A segurança do banco é regida pelas seguintes regras:

- **Leitura Pública:** Qualquer visitante pode consultar produtos com `SELECT` para visualizar o catálogo (`USING (true)`).
- **Gerenciamento Administrativo:** Apenas usuários autenticados (`auth.role() = 'authenticated'`) possuem permissão para executar `INSERT`, `UPDATE` e `DELETE`.

---

### 3. Armazenamento de Arquivos (Supabase Storage)

- **Bucket:** `products-images` (Público).
- **Políticas de Storage:**
  - Leitura pública para exibição das fotos no frontend.
  - Upload, alteração e deleção restritos a usuários autenticados via painel administrativo.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v18.17 ou superior)
- [Git](https://git-scm.com/)

### 1. Clonar o repositório
```bash
git clone https://github.com/lucasssantanna98/cordeiro-distribuidora.git
cd cordeiro-distribuidora
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima-supabase
```

### 4. Executar em modo de desenvolvimento
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o catálogo.

---

## 🗃️ Scripts SQL Disponíveis

Na raiz do projeto você encontrará os seguintes scripts prontos para rodar no **SQL Editor** do Supabase:

- **[`supabase-schema.sql`](./supabase-schema.sql):** Script mestre idempotente contendo a criação da tabela `products`, configuração das políticas RLS, criação do bucket de storage e `INSERT` com todos os 40 produtos cadastrados com suas respectivas imagens.

---

## 📦 Deploy em Produção

O projeto está configurado para **Deploy Contínuo (CI/CD)** via **Vercel**:
- Todo commit na branch `main` dispara automaticamente uma nova compilação e deploy.
- As variáveis de ambiente de produção (`NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`) são configuradas diretamente no painel da Vercel.

---

## 📄 Licença & Propriedade

Desenvolvido para **Cordeiro Distribuidora**. Todos os direitos reservados.

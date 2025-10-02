# HidroServ - Site Principal

Site institucional da HidroServ Serviços Hidráulicos com painel administrativo para edição de conteúdo.

## 🚀 Acesso Rápido

- **Site Principal:** [https://site-de-alta-convers-hg5l.bolt.host](https://site-de-alta-convers-hg5l.bolt.host)
- **Painel Admin:** `/admin` (usuário: `admin` / senha: `hidroserv2024`)

## 📋 Índice

1. [Como Editar Informações do Site](#como-editar-informações-do-site)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Como Criar Subdomínios](#como-criar-subdomínios)
4. [Configurações Técnicas](#configurações-técnicas)
5. [Deploy e Hospedagem](#deploy-e-hospedagem)

---

## 🔧 Como Editar Informações do Site

### Método 1: Painel Administrativo (Recomendado)

1. **Acesse o painel:** Vá para `seusite.com/admin`
2. **Faça login:** usuário: `admin` / senha: `hidroserv2024`
3. **Edite as seções:**
   - **Empresa:** Nome, logo, slogan
   - **Contato:** Telefones, WhatsApp, e-mail
   - **Localização:** Cidade, bairros atendidos
   - **Serviços:** Títulos, descrições, preços
   - **Depoimentos:** Clientes e avaliações

### Método 2: Edição Manual do Código

Edite o arquivo `src/config/siteConfig.ts`:

```typescript
export const siteConfig = {
  company: {
    name: "HidroServ",                    // Nome da empresa
    fullName: "HidroServ Serviços Hidráulicos",
    logo: "🔧",                           // Emoji ou URL da imagem
    tagline: "Sua solução completa em serviços hidráulicos"
  },
  contact: {
    phone: "(41) 99999-9999",            // Telefone para exibição
    whatsapp: "5541999999999",           // WhatsApp com código do país
    email: "contato@hidroserv.com.br"
  },
  location: {
    city: "Curitiba",
    state: "PR",
    region: "Grande Curitiba",
    neighborhoods: [                      // Bairros atendidos
      "Centro", "Batel", "Água Verde"
      // ... adicione mais bairros
    ]
  }
  // ... mais configurações
}
```

---

## 📁 Estrutura do Projeto

```
src/
├── config/
│   └── siteConfig.ts          # ⚙️ Configurações principais
├── components/
│   ├── Header.tsx             # 🔝 Cabeçalho do site
│   ├── Hero.tsx               # 🎯 Seção principal
│   ├── Services.tsx           # 🛠️ Seção de serviços
│   ├── About.tsx              # ℹ️ Sobre a empresa
│   ├── Testimonials.tsx       # ⭐ Depoimentos
│   ├── Contact.tsx            # 📞 Formulário de contato
│   ├── Footer.tsx             # 🔻 Rodapé
│   ├── AdminLogin.tsx         # 🔐 Tela de login admin
│   └── AdminPanel.tsx         # 🎛️ Painel administrativo
├── pages/
│   └── AdminPage.tsx          # 📄 Página do admin
└── App.tsx                    # 🏠 Componente principal
```

---

## 🌐 Como Criar Subdomínios

### Estratégia de Subdomínios

Crie repositórios separados para cada serviço:

1. **`desentupimento.hidroserv.com.br`** - Desentupimento especializado
2. **`encanador.hidroserv.com.br`** - Encanador 24h
3. **`manutencao.hidroserv.com.br`** - Manutenção hidráulica
4. **`instalacao.hidroserv.com.br`** - Instalações hidráulicas

### Passo a Passo para Criar Subdomínio

#### 1. Clone este repositório
```bash
git clone [URL_DESTE_REPO]
cd hidroserv-desentupimento  # exemplo
```

#### 2. Personalize o siteConfig.ts
```typescript
export const siteConfig = {
  company: {
    name: "HidroServ Desentupimento",     // Nome específico
    tagline: "Especialistas em desentupimento 24h"
  },
  services: [
    // Mantenha apenas serviços relacionados ao foco
    {
      title: "Desentupimento de Pias",
      description: "Especialistas em pias entupidas...",
      price: "A partir de R$ 80"
    }
    // ... outros serviços de desentupimento
  ]
}
```

#### 3. Ajuste o conteúdo das páginas
- **Hero.tsx:** Foque no serviço específico
- **Services.tsx:** Apenas serviços relacionados
- **About.tsx:** Experiência no serviço específico
- **index.html:** Title e meta tags específicas

#### 4. Exemplo de personalização para Desentupimento

**Hero.tsx:**
```typescript
<h1 className="text-4xl md:text-6xl font-bold leading-tight">
  <span className="text-orange-400">Desentupimento</span>
  <br />
  <span className="text-white">24h em Curitiba</span>
</h1>
```

**index.html:**
```html
<title>Desentupimento 24h Curitiba | HidroServ - Atendimento Emergencial</title>
```

### Configuração de DNS

No seu provedor de domínio:
```
Tipo: CNAME
Nome: desentupimento
Valor: seusite.netlify.app (ou onde hospedar)
```

---

## ⚙️ Configurações Técnicas

### Instalação Local

```bash
# Clone o repositório
git clone [URL_DO_REPO]
cd hidroserv-site

# Instale dependências
npm install

# Execute localmente
npm run dev
```

### Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **React Router** - Navegação
- **Vite** - Build tool

### Estrutura de Cores

```css
Azul Principal: #1e40af (blue-700)
Azul Secundário: #1e3a8a (blue-800)
Laranja: #ea580c (orange-600)
Verde WhatsApp: #16a34a (green-600)
Vermelho Emergência: #dc2626 (red-600)
```

---

## 🚀 Deploy e Hospedagem

### Opções de Hospedagem

1. **Netlify** (Recomendado)
   - Deploy automático via Git
   - SSL gratuito
   - CDN global

2. **Vercel**
   - Otimizado para React
   - Deploy instantâneo

3. **GitHub Pages**
   - Gratuito para repositórios públicos

### Deploy no Netlify

1. Conecte seu repositório GitHub
2. Configure build:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
3. Configure domínio personalizado
4. Ative SSL automático

### Variáveis de Ambiente

Se usar APIs externas, configure:
```env
VITE_WHATSAPP_NUMBER=5541999999999
VITE_EMAIL_SERVICE=seu_servico_email
```

---

## 📱 Otimizações para Conversão

### WhatsApp Integration
- Mensagens pré-definidas por serviço
- Botões de emergência destacados
- Links diretos para chamadas

### SEO
- Meta tags específicas por página
- Schema markup para negócios locais
- URLs amigáveis

### Performance
- Imagens otimizadas
- Lazy loading
- Minificação automática

---

## 🔒 Segurança do Painel Admin

### Alterando Credenciais

Edite `src/components/AdminLogin.tsx`:
```typescript
if (credentials.username === 'SEU_USUARIO' && 
    credentials.password === 'SUA_SENHA_FORTE') {
  onLogin(true);
}
```

### Recomendações de Segurança

1. **Use senhas fortes** (mínimo 12 caracteres)
2. **Não commite credenciais** no código
3. **Use HTTPS** sempre
4. **Monitore acessos** ao painel

---

## 📞 Suporte

Para dúvidas sobre implementação:

1. **Documentação React:** [reactjs.org](https://reactjs.org)
2. **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
3. **Deploy Netlify:** [docs.netlify.com](https://docs.netlify.com)

---

## 📝 Checklist de Lançamento

### Antes de Publicar
- [ ] Testar todos os formulários
- [ ] Verificar links do WhatsApp
- [ ] Testar responsividade mobile
- [ ] Validar informações de contato
- [ ] Testar painel administrativo
- [ ] Configurar analytics (Google Analytics)
- [ ] Testar velocidade do site
- [ ] Verificar SEO básico

### Pós-Lançamento
- [ ] Monitorar conversões
- [ ] Acompanhar analytics
- [ ] Testar formulários regularmente
- [ ] Backup das configurações
- [ ] Atualizar conteúdo regularmente

---

**Desenvolvido para máxima conversão e facilidade de manutenção** 🚀
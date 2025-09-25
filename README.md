# 💰 Financia

Aplicativo desenvolvido em **React Native** para gerenciamento e acompanhamento de contas financeiras, focado em simplicidade, praticidade e integração com autenticação segura.

O objetivo do **Financia** é permitir que o usuário registre suas contas, acompanhe seus gastos e organize sua vida financeira de forma intuitiva, com suporte a autenticação e armazenamento em nuvem.

---

## 📱 Funcionalidades

### 🔐 Autenticação de Usuários
- Login e cadastro com autenticação segura (**Supabase Auth**).  
- Sessão persistente para manter o usuário conectado.

### 💳 Gestão de Contas (Bills)
- Cadastro de contas vinculadas ao usuário autenticado.  
- Validação com **Row Level Security (RLS)** no banco para garantir segurança.  
- Listagem de contas em tempo real.  

### 🎨 Interface
- Layout responsivo, adaptado para iOS e Android.  
- Uso de **SafeAreaView** para respeitar áreas seguras em dispositivos com notch.  
- Ícones vetoriais com **Material Icons**.  
- Listagem otimizada com **FlatList**.  

### 🔔 Feedback ao Usuário
- Indicadores de carregamento (**ActivityIndicator**).  
- Mensagens de erro em caso de falha no cadastro ou login.  

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React Native com Expo  
- **Navegação:** Expo Router  
- **Estilização:**  
  - StyleSheet do React Native  
  - Paleta de cores centralizada (**Colors.ts**)  
  - Métricas responsivas (**metrics.ts**)  
- **Autenticação & Banco de Dados:** 
  - Supabase  
  - Supabase Auth para login/cadastro  
  - Banco de dados PostgreSQL com políticas de segurança RLS  
- **Outros:**  
  - react-native-safe-area-context (ajuste seguro de layout)  
  - @expo/vector-icons (ícones de interface)  

---

## ⚙️ Arquitetura

O projeto segue uma estrutura modularizada, separando contexto, componentes e constantes:

```
Financia/
│── app/            # Telas e roteamento do Expo Router
│ ├── (auth)/       # Rotas de autenticação (login, cadastro)
│ └── (tabs)/       # Rotas de navegação principal (home, etc.)
│
│── components/     # Componentes reutilizáveis (botões, cards)
│── constants/      # Constantes globais (cores, tamanhos, configurações)
│── contexts/       # Contextos para gerenciamento de estado (AuthContext)
│── hooks/          # Hooks customizados para lógica reutilizável
│── lib/            # Configurações de serviços de terceiros (Supabase)
└── assets/         # Arquivos estáticos (fontes, imagens)
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Git para clonar o projeto  
- Node.js instaladone cessário para rodar o projeto  
- Expo CLI configurado (`npm install -g expo-cli`)  
- Expo Go App para emular a aplicação no telefone

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/pedrofabriciodev/Financia.git
   cd Financia
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o app:
   ```bash
   npx expo start
   ```

4. Escaneie o QR Code no aplicativo **Expo Go** (disponível para iOS e Android).  

---

## 🔒 Segurança

- Implementação de **Row Level Security (RLS)** no Supabase, garantindo que cada usuário só consiga acessar suas próprias contas.  
- Regras de autenticação aplicadas diretamente no banco.  

---

## 📌 Futuras Melhorias

- 📊 Dashboard com gráficos de despesas.  
- 🗂️ Categorias de contas e gastos.  
- 📑 Exportação de relatórios em PDF/Excel.  
- 🔔 Notificações para contas a vencer.  
- 📶 Suporte offline com sincronização posterior.  

---

## 👨‍💻 Autor

Desenvolvido por **Pedro Fabrício** 🚀

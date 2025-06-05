# 📚 Wiki Interna da Empresa

![status](https://img.shields.io/badge/status-EM%20DESENVOLVIMENTO-yellow)  
![license](https://img.shields.io/badge/licença-MIT-green)  
![tecnologias](https://img.shields.io/badge/Tecnologias-ReactJS%20|%20TailwindCSS%20|%20NodeJS%20|%20Express%20|%20MongoDB%20|%20PostgreSQL%20|%20Socket.io%20|%20Firebase%20|%20AWS_S3%20|%20Docker%20|%20JWT-blue)


---

## 📝 Introdução

A **Wiki Interna** é uma plataforma para ser utilizada inicialmente como uma rede social corporativa, permitindo:

- Divulgar informações importantes e comunicados.
- Parabenizar colaboradores em datas comemorativas como aniversários.
- Realizar sorteios internos.
- Recrutar colaboradores para hora extra.
- Parabenizar pelo desempenho.
- Facilitar a comunicação via chat interno.
- Disponibilizar treinamentos.
- Consultar e enviar dúvidas através do portal.

---

## ✅ Funcionalidades

### 📌 Estrutura de Abas e Funcionalidades

### 1. Início

- Exibir comunicados sobre agendamentos de mutirões.
- Exibir escala de funcionários.
- Exibir reuniões e comunicados importantes.
- Permitir curtir publicações (opcional: comentar).
- Notificar usuários sobre novos comunicados.
- Carregar novos conteúdos automaticamente com rolagem infinita.
- Permitir que usuários autorizados publiquem comunicados.
- Gerenciar permissões via sistema de "flags".

### 2. Treinamento Interno

- Publicar passo a passos em vídeo ou PDF.
- Restringir visualização por setor.
- Gerenciar conteúdos: incluir, atualizar e excluir.
- Registrar quem visualizou ou baixou o material.
- Carregar conteúdos com rolagem infinita.

### 3. Treinamento Externo (Condomínios)

- Publicar treinamentos sobre atividades realizadas com clientes.
- Seguir mesma estrutura de vídeos/PDFs e restrições por setor.
- Controlar e registrar visualizações.
- Carregar conteúdos com rolagem infinita.

### 4. Dúvidas

- Permitir envio de dúvidas com texto descritivo e anexos.
- Selecionar setor destinatário obrigatoriamente.
- Encaminhar automaticamente para o responsável.
- Permitir responder diretamente ou marcar treinamento presencial.
- Salvar dúvidas com status: aguardando resposta, respondida ou encaminhada para treinamento.
- Visualizar dúvidas resolvidas com rolagem infinita.

---

## ✅ Perfis de Usuário e Permissões

- Criar perfil individual com foto, nome, setor, contato e histórico de atividades.
- Permitir incluir fotos e vídeos pessoais ou institucionais.

### Sistema de Permissões Granular

- Publicar no feed.
- Adicionar treinamentos.
- Publicar comunicados.
- Recrutar para hora extra.
- Criar enquetes/formulários.

---

## ✅ Recursos Extras

- Publicar atividades, comunicados e treinamentos com upload de arquivos e agendamento.
- Recrutar colaboradores para hora extra com sistema de confirmação de interesse.
- Criar enquetes e formulários de interesse com notificações.
- Implementar chat monitorado:
  - Chat individual ou em grupo.
  - Logs e filtros para segurança.
  - Notificações em tempo real.
- Estabelecer ranking interno com pontuação por participação e desempenho.
- Garantir compatibilidade com dispositivos móveis (responsivo).

---

## ✅ Funcionalidades Técnicas Transversais

- Aplicar rolagem infinita em todas as páginas.
- Fixar barra de pesquisa para buscar conteúdos em todas as abas.
- Garantir sistema de login seguro.
- Estruturar perfis completos.
- Gerenciar mídias com upload e visualização.
- Fornecer dashboard para administradores.

---

## ✅ Organização das Tecnologias

### 🖥️ Frontend

- ReactJS
- Tailwind CSS
- React Router
- Axios

### ⚙️ Backend

- Node.js + Express
- JWT para autenticação
- Multer para uploads
- Socket.io para chat em tempo real

### 💾 Banco de Dados

- PostgreSQL (principal)
- MongoDB (alternativa para mídias)

### ☁️ Armazenamento de Mídias

- AWS S3
- Firebase Storage (alternativa)

### 📡 Notificações e Chat

- WebSockets (Socket.io)
- Firebase FCM (alternativa)

### 🛠️ Outros

- Git para versionamento
- Dotenv para variáveis de ambiente
- Nodemon para hot reload
- ESLint + Prettier para padronização

---

## ✅ Estrutura de Pastas

/wiki-interna <br>
│
├── /backend <br>
│ ├── /controllers <br>
│ ├── /models <br>
│ ├── /routes <br>
│ ├── app.js <br>
│ └── package.json <br>
│ <br>
├── /frontend <br>
│ ├── /components <br>
│ ├── /pages <br>
│ ├── /services <br>
│ ├── /styles <br>
│ ├── App.jsx <br>
│ ├── index.js <br>
│ └── package.json <br>
│ <br>
├── /uploads <br>
├── /docs <br>
├── .env <br>
├── README.md <br>
└── .gitignore <br>
<br>

---

## ✅ Próximos Passos

- Definir fluxos e telas principais.
- Criar wireframes ou protótipos.
- Escolher definitivamente as tecnologias.
- Planejar o desenvolvimento em etapas.
- Implementar e testar.

---

## ✅ Fluxograma
![Descrição opcional](https://github.com/LaislaCrispim/wiki-interna/blob/main/Diagrama%20de%20Fluxo%20da%20Wiki%20Interna.png)

🗺️ Etapas do Projeto <br>
💡 Filtragem de ideias.

🛠️ Verificação das tecnologias que serão utilizadas.

✍️ Esboço escrito e visual.

🎨 Início do desenvolvimento frontend.

📊 Apresentação para a diretoria da empresa.

🔄 Ajustes no esboço com base na apresentação.

💻 Finalização do frontend.

🔌 Integração com o backend.

🧪 Testes de funcionalidades.

🚀 Deploy e publicação.

📋 Coleta de feedbacks e melhorias contínuas.

⚖️ Licença
Este projeto está licenciado sob a Licença MIT — veja o arquivo LICENSE para detalhes.

👤 Autor
Desenvolvido por Laisla Crispim.

Contato: laislacrispimdev@outlook.com.

🎯 Contribuindo
Contribuições são bem-vindas!
Por favor, abra uma issue ou envie um pull request para sugerir melhorias.

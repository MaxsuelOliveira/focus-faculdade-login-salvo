# 🚀 focus-faculdade-login-salvo

Extensão para navegador que salva e preenche automaticamente o login e senha na página de login da sua faculdade.

## ✨ Funcionalidades

- 💾 Salva o login e senha localmente no navegador usando `chrome.storage.local`.
- ⚡ Preenche automaticamente os campos de login e senha ao abrir a página.
- 📝 Captura o evento de submit do formulário para salvar os dados antes de enviar.
- 🌐 Roda **somente** na URL da página de login da faculdade (configurável no `manifest.json`).

## 🛠 Como usar

1. 📥 Clone ou baixe este repositório.
2. 🌐 Abra o Chrome e acesse `chrome://extensions/`.
3. 🔧 Ative o modo desenvolvedor no canto superior direito.
4. 📂 Clique em **Carregar sem compactação** e selecione a pasta do projeto.
5. 🔑 Preencha e faça login — a extensão salvará seus dados automaticamente.
6. 🔄 Na próxima visita, os dados serão preenchidos automaticamente.

## ⚙️ Configuração (apenas se for outro portal)

- Edite o arquivo `manifest.json` na propriedade `"matches"` para colocar a URL exata da página de login da sua faculdade:

```json
"matches": ["https://login.sua-faculdade.edu.br/*"]
```

🔍 Ajuste os seletores do content.js se os campos do formulário tiverem nomes ou IDs diferentes.

## 🔐 Segurança

. ⚠️ Os dados ficam salvos localmente no navegador sem criptografia.

. 🖥 Use apenas em computadores confiáveis.

.🔒 Para maior segurança, implemente criptografia ou autenticação extra.

<div align=center id="footer-default">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maxsuelOliveiradev/?utm_source=rocketseat&utm_medium=organic&utm_campaign=profile&utm_term=share&utm_content=md-04583-links)
[![Instagram](https://img.shields.io/badge/Instagram-C13584?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/david_o.santos/)
[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MaxsuelOliveira)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@MaxDavid#7163)
[![Rocketseat](https://img.shields.io/badge/Rocketseat-7159C1?style=for-the-badge&logo=rocketseat&logoColor=white)](https://app.rocketseat.com.br/me/md-04583)
[![Telegram](https://img.shields.io/badge/Telegram-40A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/@oliveiraMaxsuel)
</div>

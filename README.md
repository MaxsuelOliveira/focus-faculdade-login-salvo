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

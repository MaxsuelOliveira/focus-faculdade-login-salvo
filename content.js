const observer = new MutationObserver(() => {
  const form = document.querySelector("#form");
  const inputLogin = document.querySelector("#login");
  const inputPassword = document.querySelector("#senha");

  if (form && inputLogin && inputPassword) {
    observer.disconnect(); // para de observar

    // Preenche os dados salvos
    getLogin((data) => {
      if (data) {
        inputLogin.value = data.login || "";
        inputPassword.value = data.password || "";
      }
    });

    // Captura o submit
    form.addEventListener("submit", (event) => {
      const loginValue = inputLogin.value.trim();
      const passwordValue = inputPassword.value.trim();
      setLogin(loginValue, passwordValue);
    });
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

function setNativeValue(element, value) {
  const lastValue = element.value;
  element.value = value;

  const event = new Event("input", { bubbles: true });
  event.simulated = true;

  const tracker = element._valueTracker;
  if (tracker) tracker.setValue(lastValue);

  element.dispatchEvent(event);
}

setNativeValue(document.querySelector("#login"), "meuLogin");
setNativeValue(document.querySelector("#senha"), "minhaSenha");
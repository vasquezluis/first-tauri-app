const { invoke } = window.__TAURI__.tauri;

const alertBtn = document.querySelector("#alertBtn");
const callRustBtn = document.querySelector("#callRust");
alertBtn.addEventListener("click", () => {
  alert("Hello World");
});
callRustBtn.addEventListener("click", () => {
  invoke("my_custom_command");
});
const cityBtn = document.querySelector("#btnCity");
const cityInput = document.querySelector("#cityInput");
cityBtn.addEventListener("click", () => {
  alert(cityInput.value);
  invoke("show_city", { city: cityInput.value });
});
const btnUser = document.querySelector("#showUser");
btnUser.addEventListener("click", () => {
  invoke("hello_user", { username: "Luis" })
    .then((res) => {
      alert(res);
    })
    .catch((err) => {
      alert(err);
    });
});

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});

const themeButton = document.getElementById("theme");
let savedTheme;

try {
  savedTheme = localStorage.getItem("nova-theme");
} catch {}

function setTheme(light) {
  document.body.classList.toggle("light", light);
  themeButton.textContent = light ? "☾" : "☀";
  themeButton.setAttribute("aria-pressed", String(light));
  themeButton.setAttribute(
    "aria-label",
    light ? "Switch to dark theme" : "Switch to light theme"
  );
}

setTheme(savedTheme === "light");

themeButton.addEventListener("click", () => {
  const light = !document.body.classList.contains("light");
  setTheme(light);

  try {
    localStorage.setItem("nova-theme", light ? "light" : "dark");
  } catch {}
});

document.getElementById("year").textContent = new Date().getFullYear();
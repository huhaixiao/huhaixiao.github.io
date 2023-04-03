function lightOn() {
  document.documentElement.classList.remove("dark");
  document.documentElement.setAttribute("data-prefers-color-scheme", "");
}
function darkOn() {
  document.documentElement.classList.add("dark");
  document.documentElement.setAttribute("data-prefers-color-scheme", "dark");
}

export function setup() {
  document.body.classList.add("bg-white", "dark:bg-slate-800");
  const mediqQueryList = window.matchMedia("(prefers-color-scheme: dark)");
  mediqQueryList.addEventListener("change", (ev) => {
    if ("theme" in localStorage) {
      return;
    }
    if (ev.matches) {
      darkOn();
    } else {
      lightOn();
    }
  });
  if (mediqQueryList.matches) {
    darkOn();
  } else {
    lightOn();
  }
}
export function forceLightOn() {
  lightOn();
  localStorage.theme = "light";
}
export function forceDarkOn() {
  darkOn();
  localStorage.theme = "dark";
}
export function cancelForce() {
  localStorage.removeItem("theme");
}

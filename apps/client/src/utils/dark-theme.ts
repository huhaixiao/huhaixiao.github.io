function tailwindLightOn() {
  document.documentElement.classList.remove("dark");
}
function tailwindDarkOn() {
  document.documentElement.classList.add("dark");
}
function antdmLightOn() {
  document.documentElement.setAttribute("data-prefers-color-scheme", "");
}
function antdmDarkOn() {
  document.documentElement.setAttribute("data-prefers-color-scheme", "dark");
}

function lightOn() {
  tailwindLightOn()
  antdmLightOn()
}
function darkOn() {
  tailwindDarkOn()
  antdmDarkOn()
}

export function setup() {
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

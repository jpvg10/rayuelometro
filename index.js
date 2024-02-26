import { porcentajeAlFinalizarCapitulo } from "./rayuela.js";
import orden from "./orden.js";

window.addEventListener("load", () => {
  const tablero = document.getElementById("tablero");
  const progressBar = document.getElementsByClassName("progress-bar")[0];
  const pPorcentaje = document.getElementById("porcentaje");

  const mostrarProgeso = (capitulo) => {
    const porcentaje = capitulo ? porcentajeAlFinalizarCapitulo(capitulo) : 0;
    pPorcentaje.innerText = porcentaje.toFixed(1) + "% completado";
    progressBar.style.width = porcentaje + "%";

    const capituloIndex = orden.indexOf(capitulo);
    for (let i = 0; i < orden.length; i++) {
      if (i < capituloIndex) {
        botones[i].classList.remove("actual");
        botones[i].classList.add("leido");
      } else if (i == capituloIndex) {
        botones[i].classList.remove("leido");
        botones[i].classList.add("actual");
      } else {
        botones[i].classList.remove("leido", "actual");
      }
    }
  };

  const onClick = (capitulo) => () => {
    mostrarProgeso(capitulo);
    localStorage.setItem("capitulo", capitulo);
  };

  const botones = orden.map((capitulo) => {
    const b = document.createElement("button");
    b.innerText = capitulo;
    b.addEventListener("click", onClick(capitulo));
    return b;
  });

  botones.forEach((b) => tablero.append(b));

  const capituloActual = Number(localStorage.getItem("capitulo"));
  mostrarProgeso(capituloActual);
});

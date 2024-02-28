import { porcentajeAlFinalizarCapitulo } from "./rayuela.js";
import orden from "./orden.js";

window.addEventListener("load", () => {
  const tablero = document.getElementById("tablero");
  const progressBar = document.getElementsByClassName("progress-bar")[0];
  const pPorcentaje = document.getElementById("porcentaje");

  const mostrarProgreso = (capitulo, esUltimo = false) => {
    if (esUltimo) {
      pPorcentaje.innerText = "Finalizado!";
      progressBar.style.width = "100%";
    } else {
      const porcentaje = capitulo ? porcentajeAlFinalizarCapitulo(capitulo) : 0;
      pPorcentaje.innerText = porcentaje.toFixed(1) + "% completado";
      progressBar.style.width = porcentaje + "%";
    }

    const capituloIndex = orden.indexOf(capitulo);
    for (let i = 0; i < botones.length; i++) {
      if (esUltimo || i < capituloIndex) {
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
    localStorage.setItem("capitulo", capitulo);
    localStorage.setItem("ultimo", false);
    mostrarProgreso(capitulo);
  };

  const botones = orden.map((capitulo) => {
    const b = document.createElement("button");
    b.innerText = capitulo;
    b.addEventListener("click", onClick(capitulo));
    return b;
  });

  const ultimoBoton = document.createElement("button");
  ultimoBoton.innerText = "131";
  ultimoBoton.addEventListener("click", () => {
    localStorage.setItem("ultimo", true);
    mostrarProgreso(0, true);
  });
  botones.push(ultimoBoton);

  botones.forEach((b) => tablero.append(b));

  const capituloActual = Number(localStorage.getItem("capitulo"));
  const esUltimo = Boolean(localStorage.getItem("ultimo"));
  mostrarProgreso(capituloActual, esUltimo);
});

import capitulos from "./capitulos.js";
import orden from "./orden.js";

const EMPIEZA = 15;
const TERMINA = 728;
const CAP_55 = capitulos[54].paginas;
const TOTAL = TERMINA - EMPIEZA + 1 - CAP_55;

const paginasLeidasAlFinalizarCapitulo = (capitulo) => {
  let paginasLeidas = 0;
  for (let c of orden) {
    const paginas = capitulos[c - 1].paginas;
    paginasLeidas += paginas;
    if (c == capitulo) break;
  }
  return paginasLeidas;
};

export const porcentajeAlFinalizarCapitulo = (capitulo) => {
  const paginasLeidas = paginasLeidasAlFinalizarCapitulo(capitulo);
  const porcentaje = (paginasLeidas / TOTAL) * 100;
  return porcentaje;
};

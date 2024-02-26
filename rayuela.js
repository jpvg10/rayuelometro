const capitulos = require("./capitulos.json");
const orden = require("./orden.json");

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

const porcentajeAlFinalizarCapitulo = (capitulo) => {
  const paginasLeidas = paginasLeidasAlFinalizarCapitulo(capitulo);
  const porcentaje = (paginasLeidas / TOTAL) * 100;
  return porcentaje;
};

// paginasLeidasAlFinalizarCapitulo(73);
// paginasLeidasAlFinalizarCapitulo(1);
// paginasLeidasAlFinalizarCapitulo(2);
// paginasLeidasAlFinalizarCapitulo(116);
// paginasLeidasAlFinalizarCapitulo(77);
// paginasLeidasAlFinalizarCapitulo(131);
// paginasLeidasAlFinalizarCapitulo(58);

// for (c of orden) {
//   const p = porcentajeAlFinalizarCapitulo(c);
//   if (Math.floor(p) % 10 == 0) {
//     console.log(c, ":", p);
//   }
// }

console.log(porcentajeAlFinalizarCapitulo(14));

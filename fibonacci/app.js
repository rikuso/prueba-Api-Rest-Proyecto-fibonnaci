const serie  = require('./serie');

let cantindad = 10;

serie.crearSerie(cantindad)
    .then(mensaje => console.log(mensaje) )
    .catch(mensaje => console.log(mensaje) );
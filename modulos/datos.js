//global.test = "Hola mundo"; No es un buena norma de hacerlo


var url = "http://gover.io/datos";

function dato (mensaje){

    //Envie HTTP request
    console.log('estamos adentro '+mensaje);
}

//module.exports.url  = url;
module.exports.dato = dato;

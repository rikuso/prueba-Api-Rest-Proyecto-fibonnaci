function saludo(nombre, edad){

    console.log('hola '+nombre+" edad "+edad);

}


 let x = (nombre,edad,estado)=>{
     console.log('nombre : '+nombre+ 'edad '+ edad + 'estado civil '+estado)
}

let year =[2000,2005,2010,2015,2018,2022,2024];

//forma de hacer funcion flecha
let flecha1 = year.map((edad)=>{
    return 2024-edad;
})
//foprma de ahcer funciones flecha
let flecha2 = year.map(edad=> 2024-edad);

saludo('daniela',24);

x('daniela',24,'novia');

console.log(flecha1);

console.log(flecha2);



//FUCNIONES CALLBACK

function Sumar(num1, num2, callback){

        resultado = num1 + num2;  
        callback(resultado);
}

function Resultado(res){
    console.log('resultado de la function de suma : '+res);
}

Sumar(5,8,Resultado);
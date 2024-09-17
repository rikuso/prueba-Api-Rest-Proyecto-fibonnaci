//serie de fibonacci
const fs  = require('fs');
let crearSerie = (cantindad)=>{
    return new Promise ((res,rej)=>{
        let fibon1 = 1;
        let fibon2 = 1;
        let serie  = '';
        
        serie += `${fibon1}\t`;
        
        
        for (let i = 2; i <= cantindad-1; i++) {
            serie += `${fibon2}\t`;
            fibon2 = fibon1+fibon2;
            fibon1 = fibon2-fibon1;
         
        }
        
        fs.writeFile('fibonacci.txt',serie,(err)=>{
            if(err)
                rej('erro al crear el archivo');
            else
                res('creacion de archivo datos guardados');
        })

    })
}

module.exports = {
    crearSerie
}
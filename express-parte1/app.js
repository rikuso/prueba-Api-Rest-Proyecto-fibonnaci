const express = require('express');
const Joi = require('@hapi/joi'); 
const app = express();

app.use(express.json());
const usuarios = [
    { id: 1, nombre :'daniela'},
    { id: 2, nombre :'daniel'},
    { id: 3, nombre :'dulce'},
    { id: 4, nombre :'sammy'},
    { id: 5, nombre : 'pupe'}
];
app.get('/',(req , res)=>{
    res.send("Hola mundo en express");
});

app.get('/api/usuarios',(req,res)=>{
    res.send(usuarios);
});
//PARAMS 
app.get('/api/usuarios/:nombre/:edad',(req, res)=>{
    //res.send(req.params);
    //query ?sexo=F
    res.send(req.query);
});

//HTTP STATUS 404
app.get('/api/usuarios/:id',(req,res)=>{
    //let usuario = usuarios.find(u=> u.id === parseInt(req.params.id));
    let usuario = existeUsuario(req.params.id);
    if(!usuario) res.status(404).send("no encontro el usuario");
    res.send(usuario);
});

//POST
app.post('/api/usuarios',(req,res)=>{
    //VALIDACION CON JOIN
/*
    const schema = Joi.object( {
        nombre : Joi.string().min(3).required()
    } );

    const {error,value} = schema.validate({nombre:requestAnimationFrame.body.nombre});
    */
    const {error,value} = validarUsuario(req.body.nombre);
    if(!error){
        const usuario = {
            id: usuarios.length+1,
            nombre : value.nombre
        }
        usuarios.push(usuario);
        res.send(usuario);
    }else{
        const mensaje = error.details[0].message
        res.status(400).send(mensaje);
    }


    //validacion sencilla
    /*
     if(!req.body.nombre || req.body.nombre.length <= 2){
        res.status(400).send("error de datos");
     }
    const usuario = {
        id: usuarios.length+1,
        nombre : req.body.nombre
    }

    usuarios.push(usuario);
    res.send(usuario);
    */

//PUT ACTUALIZAR 
app.put('/api/usuarios/:id',(req,res)=>{
    //let usuario = usuarios.find(u=> u.id === parseInt(req.params.id));
    let usuario = existeUsuario(req.params.id);
    if(!usuario) res.status(404).send("no encontro el usuario");

    const {error,value} = validarUsuario(req.body.nombre);
    if(error){
        const mensaje = error.details[0].message
        res.status(400).send(mensaje);
        return;
    }

    usuario.nombre = value.nombre;
    res.send(usuario);

});

app.delete('/api/usuarios/:id',(req,res)=>{
    let usuario = existeUsuario(req.params.id);
    if(!usuario){
        res.status(404).send("no encontro el usuario");
        return;
    };

    const index = usuarios.indexOf(usuario);
    usuarios.splice(index,1);

    res.send(usuarios);
});

});
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`escuchando en el puerto ${port}...`);
})




//validaciones 
function existeUsuario(id){
    return usuarios.find(u=> u.id === parseInt(id));

}



//validacion usuarios
function validarUsuario(nom){
    const schema = Joi.object( {
        nombre : Joi.string().min(3).required()
    } );

     return (schema.validate({nombre:nom}));

}
// Importamos express
const express = require('express');
// Esto nos va a permitir manejar todas las propiedades de express en este archivo
const routherAuth = express.Router();

routherAuth.get('/login', (req, res) => {
    res.send('Login');
    //  Aca se compara la lista de usuarios con la base de datos
    // Se hace un if que valide si ese usario existe o no en la bd y envia un msj 

});

routherAuth.post('/registro', (req, res) => {
    //La req se encarga de recibir los datos
    console.log(req.body);
    res.send('Registro');
});

// Exportamos 
module.exports = routherAuth;


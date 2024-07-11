const { Schema , model} = require('mongoose')


// Asi se crea el modelo de datos

const UsuarioSchema = Schema({

     name:{
        type: String,
        require: true,
     },

     email:{
        type: String,
        require: true,
        unique: true,
     },

     password:{
       type: String,
       require: true,
       unique : true,
     },

     edad:{
       type: Number,
       unique: true,
     },


})

module.exports = UsuarioSchema
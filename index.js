const express = require('express');
const dbConection = require('./database/config');
require('dotenv').config();
const app = express();


// Middleware
// Esto vincula una propiedad de express
app.use('/auth' , require('./router/authRouter'));

// LLamamos a la funcion de conexion de base de datos

dbConection();


// Cuando salga Undefined tenemos que hacer la lectura y parseo del body

app.use(express.json());


app.listen(process.env.PORT, () => {
   console.log(`Ejecutandose en el puerto ${process.env.PORT}`);
});

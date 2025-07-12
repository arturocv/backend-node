const express = require('express');
const { dbConnection } = require('./db/config');
require('dotenv').config();
const cors = require('cors');

//Conexion a la base de datos
dbConnection();


//Crear servidor de express
const app = express();

//CORS
app.use(cors())


//Directorio publico
app.use(express.static('public'));


//Lectura y parseo del body
app.use( express.json());


//RUTAS
app.use('/api/works', require('./routes/works'));


//Escuchasr peticiones
app.listen(process.env.PORT, () => {
    console.log(`Run server in PORT ${ process.env.PORT }`);    
});
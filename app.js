
// importar el paquete de express para el wedserver
const express = require('express');
// inicializar la aplicacion con el archivo app.js
const app = express();
// para activar el puerto 
const puerto = 7475;

// para mostrar los archivos de la carperta public se utiliza metodo use

app.use(express.static('public'));




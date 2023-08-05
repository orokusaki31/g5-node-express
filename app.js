
// importar el paquete de express para el wedserver
const express = require('express');

// inicializar la aplicacion con el archivo app.js
const app = express();
// para activar el puerto 
const puerto = 7475;

// para mostrar los archivos de la carperta public se utiliza metodo use

app.use(express.static('public'));

// crear la srutas de las paginas wed, se utiliza el metodo get

app.get('/left-sidebar', (req, res) => {
    //  res para dar una respuesta de peticion al usuario 
    res.sendFile(__dirname + '/public/letf-sidebar.html');

})
app.get('/no-sidebar', (req, res) => {
    //  res para dar una respuesta de peticion al usuario 
    res.sendFile(__dirname + '/public/letf-sidebar.html');

})
app.get('/right-sidebar', (req, res) => {
    //  res para dar una respuesta de peticion al usuario 
    res.sendFile(__dirname + '/public/letf-sidebar.html');

})
app.get('*', (req, res) => {
    //  el comodin o * 
    res.sendFile(__dirname + '/public/404.html');

})

//activar el puerto
app.listen(puerto,()=>{
    // imprimir en al cosola, si se activo con exito el wedserver
console.log(`el wedserver esta activo en el puerto ${puerto}`)
})

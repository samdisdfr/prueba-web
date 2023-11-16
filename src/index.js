//importacion de paquetes
const express = require("express")

//definicion de configuraciones

const app = express();
// ejecucion
app.get('/',function(req, res){
    res.send("hola ")
})

app.listen(3000)
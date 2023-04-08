import express from "express";
const app = express();
const port = 3000;

//Prueba para realizar en postman
app.get('/', (req, res) => {
    res.send("Prueba servidor")
});

app.listen(port, ()=>{
    return console.log(`Servidor corriendo sobre el puerto ${port}`)
});


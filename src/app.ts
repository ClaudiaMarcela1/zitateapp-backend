import express from "express";
import { Response } from "express";
import config from "./config/config"; //Importar variables de entorno
import usuariosRoutes from "./routes/usuarios";
import negociosRoutes from "./routes/negocios";
import serviciosRoutes from "./routes/servicios";

const app = express();
//const port = 3000;


//Para obtener el body en JSON. Va antes de cualquier ruta
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Llamar funciones "usuariosRoutes", "negociosRoutes", "serviciosRoutes" y enviar parámetro app
usuariosRoutes(app);
negociosRoutes(app);
serviciosRoutes(app);


//Prueba para realizar en postman
app.get('/', (req, res) => {
    res.send("Prueba servidor")
});

//Actualizar parámetro con al info traída de config.ts
app.listen(config.PORT, ()=>{
    return console.log(`Servidor corriendo sobre el puerto ${config.PORT}`)
});


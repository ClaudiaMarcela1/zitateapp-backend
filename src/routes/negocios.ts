//DEFINIR LAS RUTAS DE LA APLICACIÓN CON RESPECTO A LA ENTIDAD "negocios" SEGÚN MOCKUPS

import { Router } from "express";
import { obtenerNegocio, obtenerNegocios } from "../controllers/negociosControllers";


//Función: rutas hacia la entidad "negocios"
const negociosRoutes = (app) => {
    const router = Router(); //Crear un router para el manejo de muchas rutas
    app.use('/', router); //Para usar el router

    //Pruebas en Postman. Método GET
    //1. Mockup: listado negocios --> Mostrar informacion de todos los negocios de la categoria
    //router.get('/obtenerNegocios/:categoria', (req, res) => res.send("Obtener negocios desde negocios.ts"));


    //Enviar ruta y función CRUD (se encuentra en usuariosControllers)
    //1. Mockup: listado negocios --> Mostrar informacion de todos los negocios de la categoria
    router.get('/obtenerNegocios/:categoria', obtenerNegocios);

    router.get('/obtenerNegocio/:id', obtenerNegocio);
}

//Exportar función "negociosRoutes" para ser usada en el archivo app.ts
export default negociosRoutes; //Export por defecto

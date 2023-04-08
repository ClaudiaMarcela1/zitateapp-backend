//DEFINIR LAS RUTAS DE LA APLICACIÓN CON RESPECTO A LA ENTIDAD "servicios" SEGÚN MOCKUPS

import { Router } from "express";


//Función: rutas hacia la entidad "servicios"
const serviciosRoutes = (app) => {
    const router = Router(); //Crear un router para el manejo de muchas rutas
    app.use('/', router); //Para usar el router

    //Pruebas en Postman. Método GET
    //1. Mockup: listado servicios --> Mostrar informacion de todos los servicios del negocio elegido
    router.get('/obtenerServicios/:negocio', (req, res) => res.send("Obtener servicios desde servicios.ts"));

}

//Exportar función "serviciosRoutes" para ser usada en el archivo app.ts
export default serviciosRoutes; //Export por defecto
//DEFINIR LAS RUTAS DE LA APLICACIÓN CON RESPECTO A LA ENTIDAD "usuarios" SEGÚN MOCKUPS

import { Router } from "express";
import { obtenerUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario, agregarUsuario, validarUsuario } from "../controllers/usuariosControllers";


//Función: rutas hacia la entidad "usuarios"
const usuariosRoutes = (app) => {
    const router = Router(); //Crear un router para el manejo de muchas rutas
    app.use('/', router); //Para usar el router

    //Pruebas en Postman. Método GET
    //1. Mockup: perfil --> Mostrar perfil del usuario
    //router.get('/obtenerUsuario/:id', (req, res) => res.send("Obtener usuario desde usuarios.ts"));

    //2. Mockup: perfil --> Actualizar información del usuario
    //router.get('/actualizarUsuario/:id', (req, res) => res.send("Actualizar usuario desde usuarios.ts"));

    //3. Mockup: perfil --> Dar de baja
    //router.get('/eliminarUsuario/:id', (req, res) => res.send("Eliminar usuario desde usuarios.ts"));

    //4. Mockup: registrarse --> Agregar nuevo usuario
    //router.get('/agregarUsuario', (req, res) => res.send("Agregar usuario desde usuarios.ts"));

    //5. Mockup: iniciar sesion --> Validar credenciales
    //router.get('/validarUsuario', (req, res) => res.send("Validar usuario desde usuarios.ts"));


    //Enviar ruta y función CRUD (se encuentra en usuariosControllers)
    //1. Mockup: perfil --> Mostrar perfil del usuario
    router.get('/obtenerUsuario/:id', obtenerUsuario);

    //2. Mockup: perfil --> Actualizar información del usuario
    router.put('/actualizarUsuario/:id', actualizarUsuario);

    //3. Mockup: perfil --> Dar de baja
    router.delete('/eliminarUsuario/:id', eliminarUsuario);

    //4. Mockup: registrarse --> Agregar nuevo usuario
    router.post('/agregarUsuario', agregarUsuario);

    //5. Mockup: iniciar sesion --> Validar credenciales
    router.post('/validarUsuario', validarUsuario);

    router.get('/obtenerUsuarios', obtenerUsuarios);

}


//Exportar función "usuariosRoutes" para ser usada en el archivo app.ts
export default usuariosRoutes; //Export por defecto

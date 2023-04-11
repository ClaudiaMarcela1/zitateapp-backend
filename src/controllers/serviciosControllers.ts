//FUNCIONES CRUD DE LA TABLA "servicios" DE LA BASE DE DATOS "zitate_db"

import executeQuery from "../services/mysql.service";

/*
Tener en cuenta:
1. El objeto "req" es por medio del cual se recibe la información desde el FrontEnd
2. El objeto "res" es por medio del cual se envía la respuesta hacia el FrontEnd
3. Se debe tener claro el tipo de petición HTTP que se va recibir (params, body -json, headers, query)
4. Se debe tener claro el tipo de respuesta que se va enviar (JSON, status)
*/


//Función: OBTENER SERVICIO
/*
Método frontend: GET
Propiedad HTTP: params -URL
Respuesta backend: JSON (mensaje, datos de BD)
*/
const obtenerServicio = async(req, res) => {
    const{id} = req.params;
    try{
        const response = await executeQuery(`SELECT * FROM servicios WHERE id_servicio = ${id}`);
        const data = {
            message: ` ${response.length} datos encontrados`,
            datos: response.length > 0 ? response[0] : null
        }
        res.send(data); //Envío un Json
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
    //res.send("obtenerServicio desde serviciosControllers.ts");
}



//Función: OBTENER SERVICIOS
/*
Método frontend: GET
Propiedad HTTP: params -URL
Respuesta backend: JSON (mensaje, datos de BD)
*/
const obtenerServicios = async(req, res) => {
    const {idNegocio} = req.params;
    try{
        const response = await executeQuery(`SELECT * FROM servicios WHERE id_negocio = ${idNegocio}`);
        const data = { //JSON
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response : null
        }
        res.send(data);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
    //res.send("obtenerServicios desde serviciosControllers.ts");
}



//Exportar múltiples funciones para ser usadas en el archivo "servicios.ts"
export {obtenerServicio, obtenerServicios}

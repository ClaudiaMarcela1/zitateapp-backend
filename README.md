# Zitate (backend)

_API REST for booking appointments in different establishments of city_




## API routes

* To get information about an user
```
GET /obtenerUsuario/:id
```

* To update information about an user
```
PUT /actualizarUsuario/:id
```

```
Body (JSON)

| Parameter                     | Type                                           |
| ----------------------------- | ---------------------------------------------- |
| nombre_usuario                | string                                         |
| apellido_usuario              | string                                         |
| telefono_usuario              | string                                         |
| email_usuario                 | string                                         |
| status_usuario                | enum ('Activo', 'Inactivo')                    |
| password_usuario              | string                                         |
| identificacion_usuario        | string                                         |
| tipoIdentificacion_usuario    | enum ('CC', 'CE', 'TI')                        |
| recuperar_password_usuario    | integer (0, 1)                                 |
| rol_usuario                   | enum ('Cliente', 'Empleado', 'Administrador')  |
```

* To delete an user
```
DELETE /eliminarUsuario/:id
```

* To create a new user
```
POST /agregarUsuario
```

```
Body (JSON)

| Parameter                     | Type                                           |
| ----------------------------- | ---------------------------------------------- |
| nombre_usuario                | string                                         |
| apellido_usuario              | string                                         |
| telefono_usuario              | string                                         |
| email_usuario                 | string                                         |
| status_usuario                | enum ('Activo', 'Inactivo')                    |
| password_usuario              | string                                         |
| identificacion_usuario        | string                                         |
| tipoIdentificacion_usuario    | enum ('CC', 'CE', 'TI')                        |
| recuperar_password_usuario    | integer (0, 1)                                 |
| rol_usuario                   | enum ('Cliente', 'Empleado', 'Administrador')  |
```

* To validate user and password of an user
```
POST /validarUsuario
```

```
Body (JSON)

| Parameter                     | Type                                           |
| ----------------------------- | ---------------------------------------------- |
| email_usuario                 | string                                         |
| password_usuario              | string                                         |
```

* To get information about all users
```
GET /obtenerUsuarios
```

* To get information about a store
```
GET /obtenerNegocio/:id
```

* To get information about a service offered by a store
```
GET /obtenerServicio/:id
```

* To get all stores of a store's category
```
GET /obtenerNegocios/:categoria
```

* To get all services of a specific store
```
GET /obtenerServicios/:idNegocio
```




## Developed with 🛠️

The backend was developed in TypeScript using Node.js and the framework Express.




## Deployment 🚀

It will be deployed soon.




## Project date 📌

2023

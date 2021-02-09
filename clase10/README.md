**Documentacion API**
----
  
* **URL**

  http://localhost:8080/api/productos

* **Method:**
  
  `GET`
  
*  **Parametros**
    No se requiere enviar ningun parametro

* **Respuesta exitosa:**
  
    * **Code:** 200 <br />
    **Content:** `{ id : 9 ,
                    title: 'Reloj con GPS',
                    price: 10000,
                    thumbnail: 'https://urlalaimagenquecorresponde.com.ar/imagen.jpg'
                    },
                    `
 
* **Respuesta error:**

  
  * **Code:** 500 <br />
    **Content:** `{ 'Error de la aplicacion' + error }`





   | `POST` | `DELETE` | `PUT`
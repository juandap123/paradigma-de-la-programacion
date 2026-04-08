1.¿que significa status 201 created en donde aparece?
2.¿como verifico la actualizacion de los datos por medio de la terminal?
3.¿cuales son los status existentes y comunes?
4.¿cuando hacer una peticion de tipo PATHC?
5.¿que es soap cuales son las diferencias con REST?
6.¿que es GranphQL cuales son las diferencias con REST?

soluciion:

1.El código 201 Created indica que una petición fue exitosa y, como resultado, se ha creado un nuevo recurso en el servidor

2.es cURL. Puedes usar el comando GET para consultar el recurso y confirmar si los cambios se aplicaron
Comando básico: curl -X GET https://ejemplo.com

3.
1xx (Informativos): Petición recibida y en proceso
.2xx (Éxito): Petición aceptada (Ej: 200 OK, 201 Created).
3xx (Redirección): Se requiere acción adicional (Ej: 301 Moved Permanently).
4xx (Error del Cliente): Problemas con la petición (Ej: 400 Bad Request, 401 Unauthorized, 404 Not Found).5xx (Error del Servidor): El servidor falló al procesar (Ej: 500 Internal Server Error, 503 Service Unavailable)

4.Debes usar PATCH cuando necesites realizar una actualización parcial de un recurso

5.SOAP (Simple Object Access Protocol) es un protocolo basado estrictamente en XML diseñado para entornos empresariales que requieren alta seguridad

6.GraphQL es un lenguaje de consulta para APIs que permite al cliente pedir exactamente lo que necesita.

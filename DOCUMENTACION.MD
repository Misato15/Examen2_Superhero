#Pasos seguidos para creación de REST API con Loopback

1. Se creó un contenedor en Docker, estableciendo el usuario, contraseña etc.
2. Se conectó el contenedor con Dbeaver se creó la base de datos usando la sintaxis de Microsoft Sql
3. Se procedió a la creación de la API utilizando Loopback 4.
4. Una vez creada la Api, se procede a realizar la conexión, llama conn, con la ruta para conectarse al contenedor de Docker mssql://sa:C0ntrol1\*@localhost/superhero en el puerto 1433, la cual se conectó satisfactoriamente.
5. Luego de stablecer la conexión, se procedió con el comando lb4 discover.
6. Luego se crearon los repositorios para cada una de las tablas.
7. Luego se procedió a la creación de cada uno de los controladores.
8. Se hicieron pruebas y la creación fue satisfactoria entre Loopback y la Base de Datos en el contenedor

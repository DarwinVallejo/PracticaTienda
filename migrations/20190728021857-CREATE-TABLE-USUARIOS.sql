-- migration script --
-- migration script --
/************************************************************
* Realizado por: Darwin Vallejo                             *
* Proyecto: Productos                                       *
* Descripción: Se crea tabla de usuarios                    *
************************************************************/

CREATE TABLE IF NOT EXISTS usuarios
(
    id INT AUTO_INCREMENT, 
    nombre varchar(200) NOT NULL,
    usuario varchar(40) NOT NULL,
    usuarioPassword decimal(10,4) NOT NULL,
    PRIMARY KEY(id)
)                           
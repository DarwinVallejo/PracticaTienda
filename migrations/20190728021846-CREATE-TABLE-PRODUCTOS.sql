-- migration script --
-- migration script --
/************************************************************
* Realizado por: Darwin Vallejo                             *
* Proyecto: Productos                                       *
* Descripción: Se crea tabla de productos                   *
************************************************************/

CREATE TABLE IF NOT EXISTS productos
(
    id INT AUTO_INCREMENT, 
    nombre varchar(200) NOT NULL,
    precio decimal(10,4) NOT NULL,
    precioUnitario decimal(10,4) NOT NULL,
    PRIMARY KEY(id)
)                           
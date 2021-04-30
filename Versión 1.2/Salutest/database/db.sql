--
-- Base de datos: `database_salutest`
--
DROP DATABASE IF EXISTS database_salutest;
CREATE DATABASE database_salutest;
USE database_salutest;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE paciente (
  id int(11) NOT NULL PRIMARY KEY,
  cedula char(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  nombre varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  apellido varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  username varchar(16) COLLATE utf8mb4_spanish_ci NOT NULL,
  password varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL,
  correo varchar(40) COLLATE utf8mb4_spanish_ci NOT NULL,
  genero varchar(20) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  fecha_nacimiento date NOT NULL,
  estatura decimal(10,2) DEFAULT NULL,
  peso decimal(10,2) DEFAULT NULL,
  fecha_hora timestamp NOT NULL DEFAULT current_timestamp
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla usuario
--

CREATE TABLE usuario (
  id int(11) NOT NULL PRIMARY KEY,
  cedula char(10) COLLATE utf8mb4_spanish_ci NOT NULL,
  nombre varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  apellido varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  username varchar(16) COLLATE utf8mb4_spanish_ci NOT NULL,
  password varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL,
  correo varchar(40) COLLATE utf8mb4_spanish_ci NOT NULL,
  fecha_hora timestamp NOT NULL DEFAULT current_timestamp
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;



ALTER TABLE paciente MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
ALTER TABLE usuario MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
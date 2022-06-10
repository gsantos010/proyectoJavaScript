-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2022 a las 19:28:34
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `quejas_gente`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listaquejas`
--

CREATE TABLE `listaquejas` (
  `idQuejas` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Mensaje` varchar(250) NOT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `listaquejas`
--

INSERT INTO `listaquejas` (`idQuejas`, `Nombre`, `Email`, `Mensaje`, `Fecha`) VALUES
(1, 'gayleeeeee', 'gsantos@cifpfbmoll.eu', 'ALTER TABLE tablename AUTO_INCREMENT = 1ALTER TABLE tablename AUTO_INCREMENT = 1ALTER TABLE tablename AUTO_INCREMENT = 1ALTER TABLE tablename AUTO_INCREaMENT = 1', '2022-05-30'),
(2, 'ejemplo', 'ejemplo@gmail.com', 'ejemploejemploejemploejemploejemploejemploejemploejemploejemploejemplo', '0000-00-00'),
(3, 'ejemplo', 'ejemplo@ejemplo.com', 'ejemploejemploa', '2022-05-30'),
(4, 'Ejemplo', 'Ejemplo@Ejemplo.com', 'EjemploEjemploEjemploEjemploa', '2022-05-30'),
(5, 'EjemploEjemplo', 'Ejemplo@Ejemplo.com', 'EjemploEjemploEjaemploEjemplo', '2022-05-30'),
(6, 'EjemploEjemplo', 'Ejemplo@Ejemplo.com', 'EjemploEjemploEjaemploEjemplo', '2022-05-30'),
(7, 'EjemploEjemplo', 'Ejemplo@Ejemplo.com', 'EjemploEjemploEjaemploEjemplo', '2022-05-30'),
(8, 'aaejemplo', 'ejemplo@ejemplo.com', 'ejemploejemploejemploaaaaaa', '2022-05-30'),
(9, 'ejemplo', 'ejemploejemplo@ejemplo.com', 'ejemploasdasdadsejemplo', '2022-05-30'),
(10, 'ejemplo', 'ejemplo@ejemploejemplo.com', 'ejemploejemploejemploa', '2022-05-30'),
(11, 'document', 'document@document.com', 'documentdocumentdocumentdocument ', '2022-05-30'),
(12, 'adsasdasd', 'asdasdas@asdasdas.com', 'adsasdasd', '2022-05-31');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `listaquejas`
--
ALTER TABLE `listaquejas`
  ADD PRIMARY KEY (`idQuejas`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `listaquejas`
--
ALTER TABLE `listaquejas`
  MODIFY `idQuejas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

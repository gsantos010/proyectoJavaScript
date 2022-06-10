-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2022 a las 19:27:55
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
-- Base de datos: `preguntas_borjabauen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `idPregunta` int(100) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(35) NOT NULL,
  `numTelefono` int(15) NOT NULL,
  `tema` varchar(8) NOT NULL,
  `mensaje` varchar(250) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`idPregunta`, `nombre`, `apellido`, `numTelefono`, `tema`, `mensaje`, `fecha`) VALUES
(1, 'Mateu', 'Mateutet', 0, 'reformas', 'Nada Nada Nada Nada', '2022-06-07'),
(2, 'Mateuuu', 'Nada ', 0, 'reformas', 'Nada Nad aNada', '2022-06-07'),
(3, 'Mateuuu', 'Nada ', 0, 'reformas', 'Otra nada', '2022-06-07'),
(4, 'Nad aNad aDAn', 'Nad aNad aDAn', 1968456164, 'consulta', '21ad4321', '2022-06-07'),
(5, 'Mateuuu', 'Mateuuu', 55555555, 'quejas', 'MateuuuMateuuuMateuuuMateuuuMateuuu', '2022-06-07'),
(6, '', '', 0, '', '', '2022-06-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `nombre` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `usario` varchar(25) NOT NULL,
  `clave` varchar(25) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`nombre`, `email`, `usario`, `clave`, `fecha`) VALUES
('gayle', 'santos@santos.com', 'valdez', 'Testing193!', '2022-06-10');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`idPregunta`);

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `usario` (`usario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `idPregunta` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

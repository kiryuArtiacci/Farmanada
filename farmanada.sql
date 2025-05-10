-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-03-2025 a las 17:06:10
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `farmanada`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accion_terapeutica`
--

CREATE TABLE `accion_terapeutica` (
  `id` int(11) NOT NULL,
  `accion_terap` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `accion_terapeutica`
--

INSERT INTO `accion_terapeutica` (`id`, `accion_terap`) VALUES
(2, 'Analgésico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE `cargo` (
  `id` int(11) NOT NULL,
  `titulo` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cargo`
--

INSERT INTO `cargo` (`id`, `titulo`) VALUES
(1, 'cajero'),
(2, 'asistente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `id` int(11) NOT NULL,
  `id_Orden` int(11) NOT NULL,
  `idLab` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `forma_pago` varchar(10) NOT NULL,
  `monto` float NOT NULL,
  `estado_compra` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deudas`
--

CREATE TABLE `deudas` (
  `id` int(11) NOT NULL,
  `id_Compra` int(11) NOT NULL,
  `id_Sucursal` int(11) NOT NULL,
  `fecha_pago` date NOT NULL,
  `Monto` float NOT NULL,
  `estado_deuda` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido` varchar(15) NOT NULL,
  `telefono` decimal(10,0) NOT NULL,
  `email` varchar(50) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `img` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id`, `nombre`, `apellido`, `telefono`, `email`, `direccion`, `fecha_ingreso`, `img`) VALUES
(0, 'Rebeca', 'Meyerowitz', 42459867, 'email', 'Puerto Ordaz', '2024-03-15', '/src/assets/empleados/Rebeca.jpeg'),
(1, 'Julio', 'Suarez', 42459867, 'email', 'Puerto Ordaz', '2024-03-15', '/src/assets/empleados/Julio.jpeg'),
(3, 'Ernesto', 'Balbas', 42459867, 'email', 'Puerto Ordaz', '2024-03-15', '/src/assets/empleados/Ernesto.jpeg'),
(4, 'Heirismar', 'Marcano', 42459867, 'email', 'Puerto Ordaz', '2024-03-15', '/src/assets/empleados/Heiri.jpeg'),
(5, 'Kyriu', 'mm', 42459867, 'email', 'Puerto Ordaz', '2024-03-15', '/src/assets/empleados/Kyriu.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `laboratorio`
--

CREATE TABLE `laboratorio` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `telefono` decimal(10,0) NOT NULL,
  `email` varchar(50) NOT NULL,
  `direccion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `laboratorio`
--

INSERT INTO `laboratorio` (`id`, `nombre`, `telefono`, `email`, `direccion`) VALUES
(2, 'Humano', 85485, 'heiri@gmail.com', 'Puerto Ordaz');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamento`
--

CREATE TABLE `medicamento` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `principalComponente` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medicamento`
--

INSERT INTO `medicamento` (`id`, `nombre`, `principalComponente`) VALUES
(1, 'ibuprofeno', 'acido'),
(4, 'undefined', 'undefined'),
(5, 'undefined', 'undefined'),
(6, 'baranquilla', 'desinflamatorio'),
(7, 'sip', 'nop'),
(8, 'yosi', 'yono'),
(9, 'yes', 'nop'),
(10, 'Ernesto', 'jorge');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamentospedidos`
--

CREATE TABLE `medicamentospedidos` (
  `id` int(11) NOT NULL,
  `idOrden` int(11) NOT NULL,
  `idMedicamento_presentacion` int(11) NOT NULL,
  `cantidad` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamentosrecibidos`
--

CREATE TABLE `medicamentosrecibidos` (
  `id` int(11) NOT NULL,
  `idCompra` int(11) NOT NULL,
  `idMedicamento_presentacion` int(11) NOT NULL,
  `cantidad_Disp` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamento_accionterapeutica`
--

CREATE TABLE `medicamento_accionterapeutica` (
  `id` int(11) NOT NULL,
  `id_AccionTerap` int(11) NOT NULL,
  `id_Medicamento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medicamento_accionterapeutica`
--

INSERT INTO `medicamento_accionterapeutica` (`id`, `id_AccionTerap`, `id_Medicamento`) VALUES
(2, 2, 10),
(3, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamento_laboratorio`
--

CREATE TABLE `medicamento_laboratorio` (
  `id` int(11) NOT NULL,
  `idMedicamento_presentacion` int(11) NOT NULL,
  `id_Laboratorio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medicamento_laboratorio`
--

INSERT INTO `medicamento_laboratorio` (`id`, `idMedicamento_presentacion`, `id_Laboratorio`) VALUES
(2, 3, 2),
(3, 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamento_monodroga`
--

CREATE TABLE `medicamento_monodroga` (
  `id` int(11) NOT NULL,
  `id_Monodroga` int(11) NOT NULL,
  `id_Medicamento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medicamento_monodroga`
--

INSERT INTO `medicamento_monodroga` (`id`, `id_Monodroga`, `id_Medicamento`) VALUES
(1, 1, 6),
(4, 20, 7),
(5, 15, 8),
(6, 1, 4),
(7, 1, 7),
(8, 1, 7),
(9, 22, 8),
(11, 21, 5),
(12, 28, 9),
(13, 2, 10),
(14, 1, 6),
(15, 21, 9),
(16, 23, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamento_presentacion`
--

CREATE TABLE `medicamento_presentacion` (
  `id` int(11) NOT NULL,
  `id_Medicamento` int(11) NOT NULL,
  `id_Presentacion` int(11) NOT NULL,
  `imagen` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medicamento_presentacion`
--

INSERT INTO `medicamento_presentacion` (`id`, `id_Medicamento`, `id_Presentacion`, `imagen`) VALUES
(2, 1, 2, 'CajaM'),
(3, 10, 3, 'CajaM');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monodroga`
--

CREATE TABLE `monodroga` (
  `id` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `monodroga`
--

INSERT INTO `monodroga` (`id`, `nombre`) VALUES
(1, 'casa'),
(2, 'acetaminofen'),
(15, 'jjkb'),
(19, 'desodorante'),
(20, 'hola'),
(21, 'gracias'),
(22, 'youtube'),
(23, 'hola'),
(26, 'mami'),
(28, 'nop');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id` int(11) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `idSucursal` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `forma_pago` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `presentacion`
--

CREATE TABLE `presentacion` (
  `id` int(11) NOT NULL,
  `cantidad` decimal(10,0) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `contenido` decimal(10,0) NOT NULL,
  `unidad_medida` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `presentacion`
--

INSERT INTO `presentacion` (`id`, `cantidad`, `nombre`, `contenido`, `unidad_medida`) VALUES
(2, 50, 'pildoras', 1, 'gr'),
(3, 100, 'capsulas', 1, 'gr');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rotacion`
--

CREATE TABLE `rotacion` (
  `idRotacion` int(11) NOT NULL,
  `idSucursal` int(11) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `idCargo` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_final` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `id_sucursal` int(11) NOT NULL,
  `idMedicamento_presentacion` int(11) NOT NULL,
  `cantidad_disponible` int(11) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE `sucursal` (
  `id` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `direccion` varchar(15) NOT NULL,
  `telefono` decimal(10,0) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sucursal`
--

INSERT INTO `sucursal` (`id`, `nombre`, `direccion`, `telefono`, `email`) VALUES
(1, 'farmanada pzo', 'Puerto Ordaz', 1555455, 'heiris@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accion_terapeutica`
--
ALTER TABLE `accion_terapeutica`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_COMPRA_LABORATORIO` (`idLab`),
  ADD KEY `FK_COMPRA_PEDIDO` (`id_Orden`);

--
-- Indices de la tabla `deudas`
--
ALTER TABLE `deudas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_DEUDAS_COMPRA` (`id_Compra`),
  ADD KEY `FK_DEUDAS_SUCURSAL` (`id_Sucursal`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `laboratorio`
--
ALTER TABLE `laboratorio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medicamento`
--
ALTER TABLE `medicamento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medicamentospedidos`
--
ALTER TABLE `medicamentospedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_MEDICAMENTOS_PEDIDOS_MED_PRESENTACION` (`idMedicamento_presentacion`),
  ADD KEY `FK_MEDICAMENTOS_PEDIDOS_ORDEN` (`idOrden`);

--
-- Indices de la tabla `medicamentosrecibidos`
--
ALTER TABLE `medicamentosrecibidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_MEDICAMENTOS_RECIBIDOS_COMPRA` (`idCompra`),
  ADD KEY `FK_MEDICAMENTOS_RECIBIDOS_MED_PRESENTACION` (`idMedicamento_presentacion`);

--
-- Indices de la tabla `medicamento_accionterapeutica`
--
ALTER TABLE `medicamento_accionterapeutica`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_MEDICAMENTOACCIONT_ACCION` (`id_AccionTerap`),
  ADD KEY `FK_MEDICAMENTOACCIONT_MEDICAMENTO` (`id_Medicamento`);

--
-- Indices de la tabla `medicamento_laboratorio`
--
ALTER TABLE `medicamento_laboratorio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_MEDICAMENTOLABORATORIO_LABORATORIO` (`id_Laboratorio`),
  ADD KEY `FK_MEDICAMENTOLABORATORIO_MEDICAMENTOPRESENTACION` (`idMedicamento_presentacion`);

--
-- Indices de la tabla `medicamento_monodroga`
--
ALTER TABLE `medicamento_monodroga`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_MEDICAMENTOMONODROGA_MEDICAMENTO` (`id_Medicamento`),
  ADD KEY `FK_MEDICAMENTOMONODROGA_MONODROGA` (`id_Monodroga`);

--
-- Indices de la tabla `medicamento_presentacion`
--
ALTER TABLE `medicamento_presentacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_MEDICAMENTOPRESENTACION_MEDICAMENTO` (`id_Medicamento`),
  ADD KEY `FK_MEDICAMENTOPRESENTACION_PRESENTACION` (`id_Presentacion`);

--
-- Indices de la tabla `monodroga`
--
ALTER TABLE `monodroga`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_PEDIDO_EMPLEADO` (`idEmpleado`),
  ADD KEY `FK_PEDIDO_SUCURSAL` (`idSucursal`);

--
-- Indices de la tabla `presentacion`
--
ALTER TABLE `presentacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rotacion`
--
ALTER TABLE `rotacion`
  ADD PRIMARY KEY (`idRotacion`),
  ADD KEY `FK_ROTACION_CARGO` (`idCargo`),
  ADD KEY `FK_ROTACION_EMPLEADO` (`idEmpleado`),
  ADD KEY `FK_ROTACION_SUCURSAL` (`idSucursal`);

--
-- Indices de la tabla `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_STOCK_MEDICAMENTO_PRESENTACION` (`idMedicamento_presentacion`),
  ADD KEY `FK_STOCK_SUCURSAL` (`id_sucursal`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accion_terapeutica`
--
ALTER TABLE `accion_terapeutica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cargo`
--
ALTER TABLE `cargo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `laboratorio`
--
ALTER TABLE `laboratorio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `medicamento`
--
ALTER TABLE `medicamento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `medicamento_accionterapeutica`
--
ALTER TABLE `medicamento_accionterapeutica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `medicamento_laboratorio`
--
ALTER TABLE `medicamento_laboratorio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `medicamento_monodroga`
--
ALTER TABLE `medicamento_monodroga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `medicamento_presentacion`
--
ALTER TABLE `medicamento_presentacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `monodroga`
--
ALTER TABLE `monodroga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `presentacion`
--
ALTER TABLE `presentacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `rotacion`
--
ALTER TABLE `rotacion`
  MODIFY `idRotacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `FK_COMPRA_LABORATORIO` FOREIGN KEY (`idLab`) REFERENCES `laboratorio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_COMPRA_PEDIDO` FOREIGN KEY (`id_Orden`) REFERENCES `pedido` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `deudas`
--
ALTER TABLE `deudas`
  ADD CONSTRAINT `FK_DEUDAS_COMPRA` FOREIGN KEY (`id_Compra`) REFERENCES `compra` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_DEUDAS_SUCURSAL` FOREIGN KEY (`id_Sucursal`) REFERENCES `sucursal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `medicamentospedidos`
--
ALTER TABLE `medicamentospedidos`
  ADD CONSTRAINT `FK_MEDICAMENTOS_PEDIDOS_MED_PRESENTACION` FOREIGN KEY (`idMedicamento_presentacion`) REFERENCES `medicamento_presentacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_MEDICAMENTOS_PEDIDOS_ORDEN` FOREIGN KEY (`idOrden`) REFERENCES `pedido` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `medicamentosrecibidos`
--
ALTER TABLE `medicamentosrecibidos`
  ADD CONSTRAINT `FK_MEDICAMENTOS_RECIBIDOS_COMPRA` FOREIGN KEY (`idCompra`) REFERENCES `compra` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_MEDICAMENTOS_RECIBIDOS_MED_PRESENTACION` FOREIGN KEY (`idMedicamento_presentacion`) REFERENCES `medicamento_presentacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `medicamento_accionterapeutica`
--
ALTER TABLE `medicamento_accionterapeutica`
  ADD CONSTRAINT `FK_MEDICAMENTOACCIONT_ACCION` FOREIGN KEY (`id_AccionTerap`) REFERENCES `accion_terapeutica` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_MEDICAMENTOACCIONT_MEDICAMENTO` FOREIGN KEY (`id_Medicamento`) REFERENCES `medicamento` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `medicamento_laboratorio`
--
ALTER TABLE `medicamento_laboratorio`
  ADD CONSTRAINT `FK_MEDICAMENTOLABORATORIO_LABORATORIO` FOREIGN KEY (`id_Laboratorio`) REFERENCES `laboratorio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_MEDICAMENTOLABORATORIO_MEDICAMENTOPRESENTACION` FOREIGN KEY (`idMedicamento_presentacion`) REFERENCES `medicamento_presentacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `medicamento_monodroga`
--
ALTER TABLE `medicamento_monodroga`
  ADD CONSTRAINT `FK_MEDICAMENTOMONODROGA_MEDICAMENTO` FOREIGN KEY (`id_Medicamento`) REFERENCES `medicamento` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_MEDICAMENTOMONODROGA_MONODROGA` FOREIGN KEY (`id_Monodroga`) REFERENCES `monodroga` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `medicamento_presentacion`
--
ALTER TABLE `medicamento_presentacion`
  ADD CONSTRAINT `FK_MEDICAMENTOPRESENTACION_MEDICAMENTO` FOREIGN KEY (`id_Medicamento`) REFERENCES `medicamento` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_MEDICAMENTOPRESENTACION_PRESENTACION` FOREIGN KEY (`id_Presentacion`) REFERENCES `presentacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `FK_PEDIDO_EMPLEADO` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_PEDIDO_SUCURSAL` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rotacion`
--
ALTER TABLE `rotacion`
  ADD CONSTRAINT `FK_ROTACION_CARGO` FOREIGN KEY (`idCargo`) REFERENCES `cargo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_ROTACION_EMPLEADO` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_ROTACION_SUCURSAL` FOREIGN KEY (`idSucursal`) REFERENCES `sucursal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `FK_STOCK_MEDICAMENTO_PRESENTACION` FOREIGN KEY (`idMedicamento_presentacion`) REFERENCES `medicamento_presentacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_STOCK_SUCURSAL` FOREIGN KEY (`id_sucursal`) REFERENCES `sucursal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

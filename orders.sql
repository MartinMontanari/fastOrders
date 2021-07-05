-- Adminer 4.8.1 MySQL 5.7.11 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(255) DEFAULT NULL,
  `comboName` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` int(115) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

TRUNCATE `orders`;
INSERT INTO `orders` (`id`, `date`, `comboName`, `quantity`, `address`, `phone`) VALUES
(1,	'',	'Hamburguesa doble con gaseosa grande y papas XXL',	2,	'San Martin 123',	12345678),
(2,	'2021-06-30',	'Pizza fugazetta 12 porciones',	4,	'Iturraspe 1229',	33354938),
(3,	'',	'Papas con paceta y huevo',	1,	'9 de julio 980',	123456787);

-- 2021-06-25 00:27:46

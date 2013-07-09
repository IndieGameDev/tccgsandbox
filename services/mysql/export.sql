-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 08, 2013 at 10:46 PM
-- Server version: 5.5.25
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `tccg`
--

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `cardId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `description` varchar(140) DEFAULT '',
  `pictureURL` varchar(100) DEFAULT NULL,
  `rarity` enum('COMMON','RARE','EPIC','UNIQUE','LEGENDARY') NOT NULL DEFAULT 'COMMON',
  `suit` int(5) NOT NULL DEFAULT '1',
  `cost` int(5) DEFAULT '1',
  `life` int(5) DEFAULT NULL,
  `fight` int(5) DEFAULT NULL,
  `type` enum('MINION','ABILITY','ITEM') DEFAULT NULL,
  `specialFunction` set('AoE','Taunt','AoEDivide','DoT','FriendlyFire') DEFAULT NULL,
  `flavourText` varchar(140) DEFAULT NULL,
  PRIMARY KEY (`cardId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`cardId`, `name`, `description`, `pictureURL`, `rarity`, `suit`, `cost`, `life`, `fight`, `type`, `specialFunction`, `flavourText`) VALUES
(1, 'Crusader Strike', 'Hit the enemy with Holy zeal causing 3 damage', NULL, 'COMMON', 1, 2, NULL, 3, 'ABILITY', NULL, NULL),
(2, 'Holy Shock', 'Hit the enemy for 2 damage or heal ally for 3 health', NULL, 'COMMON', 1, 3, 3, 2, 'ABILITY', NULL, NULL),
(3, 'Divine Storm', 'Hit all enemy minions for 1 damage', NULL, 'COMMON', 1, 1, NULL, 1, 'ABILITY', 'AoE', NULL),
(4, 'Judgement', 'Hit the enemy for 2 Holy damage, regardless of minion taunts', NULL, 'COMMON', 1, 2, NULL, 2, 'ABILITY', NULL, NULL),
(5, 'Squire', 'Call on a squire to protect you in combat', NULL, 'COMMON', 1, 1, 3, 0, 'MINION', 'Taunt', NULL),
(6, 'Fel Imp', 'Call on an imp to fight by your side', NULL, 'COMMON', 2, 1, 1, 1, 'MINION', NULL, NULL),
(7, 'Curse of Death', 'Deal 5 damage randomly divided between enemy and her minions', NULL, 'COMMON', 1, 3, NULL, 5, 'ABILITY', 'AoEDivide', NULL),
(8, 'Fire Rain', 'Deal 3 damage to enemy and all minions on battlefield', NULL, 'COMMON', 1, 2, NULL, 3, 'ABILITY', 'AoE', NULL),
(9, 'Golem', 'Call on a golem to fight and protect you', NULL, 'COMMON', 1, 4, 5, 3, 'MINION', 'Taunt', NULL),
(10, 'Hellfire', 'Set an enemy on fire', NULL, 'COMMON', 1, 1, NULL, 1, 'ABILITY', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `p1` varchar(25) DEFAULT '',
  `p2` varchar(25) DEFAULT '',
  `turnOwner` varchar(25) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=33 ;

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`id`, `p1`, `p2`, `turnOwner`) VALUES
(30, 'Alex', 'Max', 'p1'),
(31, 'Roman', 'Pedro', 'p2'),
(32, 'Ira', 'Maska', 'p2');

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `gameId` varchar(15) NOT NULL,
  `playerId` varchar(15) NOT NULL DEFAULT '',
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

create database db_peliculas
use db_peliculas;

create table GENEROS
(
    ID INT NOT NULL auto_increment,
    GENERO varchar(50) NOT NULL,
    primary key(ID)
);

create table PELICULAS
(
    ID INT NOT NULL auto_increment,
    TITULO varchar(120) NOT NULL,
    DIRECTOR varchar(100) NOT NULL,
    AÑO varchar(4) NOT NULL,
    GENERO varchar(50),
    primary key(ID)
);
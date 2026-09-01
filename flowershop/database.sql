create database flowershop;
use flowershop;

create table shop(
id int primary key auto_increment,
flowername varchar(50) NOT NULL,
color varchar(5)


);

insert into shop(id, flowername, color)
value(1,'rose','red');

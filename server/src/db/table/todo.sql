 create table todos(
    `id` int PRIMARY KEY AUTO_INCREMENT not null,
    `text` varchar(100) not null,
    `completed` BOOLEAN,
     `editable` BOOLEAN,
     `visible` BOOLEAN,
     `deleted` BOOLEAN default false,
    `time` date
 );
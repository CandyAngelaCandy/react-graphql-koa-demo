 create table tasks(
    id int PRIMARY KEY AUTO_INCREMENT not null,
    text varchar(100),
    todoId int,
    CONSTRAINT FK_todoId FOREIGN KEY (todoId)
    REFERENCES todos(id)
 );
CREATE TABLE class (
    id int AUTO_INCREMENT,
    name varchar(255),
    begins DATE,
    ends DATE,
    
);

CREATE TABLE student(
    id int,
    name VARCHAR(255),
    email NVARCHAR(255). UNIQUE,
    phone int(10),
    class_id  INT NOT NULL REFERENCES Class (id)
)

CREATE INDEX index_name ON student (name) ;

ALTER TABLE class
ADD  status ENUM ('not-started','ongoing','finished') NOT NULL;
SET NAMES utf8mb4;

CREATE TABLE  Meal(
 id INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(250) NOT NULL,
 description TEXT,
 location VARCHAR(150),
 `when` DATETIME,
 max_reservations INT,
 price DECIMAL,
 created_date DATE
);

CREATE TABLE Reservation(
 id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
 number_of_guests int,
 meal_id int  ,
 created_date date,
 contact_phonenumber varchar(255),
 contact_name varchar(255),
 contact_email varchar(255),
FOREIGN KEY (`meal_id`) REFERENCES `Meal`(`id`)
);


CREATE TABLE Review(
 id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
 title varchar(255),
 description text,
 meal_id int,
 stars int,
 created_date DATE,
 
 FOREIGN KEY (`meal_id`) REFERENCES Meal(`id`)
);


SELECT * FROM Meal;

INSERT INTO Meal (`title`, `description`,`location`,`max_reservations`, `price`) 
VALUES ( 'Fresh Pasta' , 'wheat flour, salt, yeast, egg, water', 'Copenhagen', 2 , 100);
SELECT title FROM Meal
Where id=1;

SELECT * FROM Reservation
Where id=1;

UPDATE Reservation
SET number_of_guests=3
WHERE id=1;

DELETE FROM Reservation
WHERE id=1;

SELECT * FROM Review;

INSERT INTO Review(`title`,`description`,`meal_id`,`stars`,`created_date`)
VALUES(`his review`,`his description`,1,4,`2021-10-10`);

SELECT title FROM Review
WHERE id=1;

UPDATE Review
SET stars=3
WHERE id=1;

DELETE FROM Review
WHERE id=1;

INSERT INTO Meal (`title`, `description`,`location`,`max_reservations`, `price`) 
VALUES ( 'Lasagne' , 'pasta, bolognese souce, besciamel souce, water', 'Copenhagen', 3 , 80);
INSERT INTO Review(`title`,`description`,`meal_id`,`stars`,`created_date`)
VALUES(`his review`,`his description`,1,4,`2021-10-10`);
INSERT INTO Reservation(`number_of_guests`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)
VALUES(5,`2021-10-12`,`82129989`,`Darya`,`darya@gmail.com`);

SELECT title FROM Meal
WHERE price<90;



SELECT * FROM Meal 
WHERE max_reservations > (SELECT SUM(number_of_guests) 
FROM Reservation WHERE Meal.id = meal_id);

SELECT * FROM Meal
WHERE title LIKE '%Rød grød med%';



SELECT * FROM Meal
WHERE created_date BETWEEN  '2021-10-10' AND '2021-10-11';

SELECT * FROM Meal
LIMIT 2;

SELECT * FROM Meal
JOIN Review ON Meal.id= Review.meal_id AND Review.title='Good';

SELECT * FROM Reservation
WHERE meal_id =1
ORDER BY created_date;

SELECT Meal.* 
FROM Meal 
JOIN Review ON Meal.id= Review.meal_id 
GROUP BY Review.meal_id 
ORDER BY AVG(Review.stars);


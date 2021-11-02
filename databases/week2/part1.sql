
insert into task (id, title, description, created, updated, due_date, status_id) values (36, 'Wash cars', 'Todays task.', '2017-09-21 06:54:16', '2017-10-15 13:05:09', null, 1);


UPDATE task
SET title = 'Alterated title'
WHERE id=36;

UPDATE task
SET due_date='2021-10-10 14:57:22'
WHERE id=36;

UPDATE task
SET status_id = 3
WHERE user_id=27;

DELETE FROM task WHERE due_date=NULL;


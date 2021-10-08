
ALTER TABLE task
ADD COLUMN user_id VARCHAR(15) AFTER id;


UPDATE task
SET title = 'Alterated title'
WHERE id>=34;

UPDATE task
SET due_date='2021-10-10 14:57:22'
WHERE due_date='2017-10-10 14:57:22';

UPDATE task
SET status_id = 3
WHERE user_id=27;

DELETE FROM task WHERE due_date=NULL;


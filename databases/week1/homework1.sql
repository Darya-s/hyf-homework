
--1.Find out how many tasks are in the task table
--2.Find out how many tasks in the task table do not have a valid due date
--3.ind all the tasks that are marked as done
--4.Find all the tasks that are not marked as done
--5.Get all the tasks, sorted with the most recently created first
--6.Get the single most recently created task
--7.Get the title and due date of all tasks where the title or description contains database
--8.Get the title and status (as text) of all tasks
--9.Get the name of each status, along with a count of how many tasks have that status
--10.Get the names of all statuses, sorted by the status with most tasks first

--1
SELECT COUNT('id')
FROM 'task';
--2
SELECT COUNT(title)
FROM task
WHERE due_date IS NULL;

--3
SELECT *
FROM task
WHERE status_id IN (SELECT id FROM status WHERE name = "Done");

--4
SELECT *
FROM task
WHERE status_id IN (SELECT id FROM status WHERE name != "Done");

--5
SELECT *
FROM task
ORDER BY created DESC ;

--6
SELECT *
FROM task
ORDER BY created DESC LIMIT 1;

--7
SELECT title, due_date
FROM task
WHERE title LIKE "%database%" or description LIKE "%database%";

--8
SELECT task.id, task.title, task.description, s.name, s.id as status_id
FROM task
JOIN status s on s.id = task.status_id;

--9
SELECT status.name, COUNT(*) as total
FROM status
JOIN task t ON t.status_id = status.id GROUP BY t.status_id;

--10
SELECT status.name, COUNT(*) as tot
FROM status
JOIN task t ON t.status_id = status.id GROUP BY t.status_id
ORDER BY tot DESC;



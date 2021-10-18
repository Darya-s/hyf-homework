<<<<<<< HEAD
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.id,user.id AS UI,task.title,user.email ,user.name from task
JOIN user ON task.user_id=user.id
WHERE user.email like "%@spotify.com";
=======



--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title, user.email
FROM task, user,user_task
LEFT JOIN user ON user.user_id = user_task.user_id AND user_task.task_id=task.id AND user.email LIKE '%@spotify.com'
ORDER BY user.id;
>>>>>>> 92c46f182d9b5bf5f2963c2c1dbe9084e9e4f7c8


--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title
FROM task 
LEFT JOIN user ON user.name= 'Donald Duck' AND task.status_id=1;

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
<<<<<<< HEAD
SELECT title, month(created), user.name Created_by
FROM task
  JOIN user
  ON task.user_id=user.id
WHERE user.name = 'Maryrose Meadows' AND month(created)=(09);

--Find how many tasks where created in each month, 
--e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT month(created) AS month_number , count(*) AS total FROM task 
=======
SELECT task.title
FROM task
LEFT JOIN user ON user.name= 'Maryrose Meadows' AND month(created)=9 ;

--Find how many tasks where created in each month, 
--e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT COUNT(task.id) 
FROM task
>>>>>>> 92c46f182d9b5bf5f2963c2c1dbe9084e9e4f7c8
GROUP BY month(created);
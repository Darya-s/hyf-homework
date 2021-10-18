--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.id,user.id AS UI,task.title,user.email ,user.name from task
JOIN user ON task.user_id=user.id
WHERE user.email like "%@spotify.com";


--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title
FROM task 
LEFT JOIN user ON user.name= 'Donald Duck' AND task.status_id=1;

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT title, month(created), user.name Created_by
FROM task
  JOIN user
  ON task.user_id=user.id
WHERE user.name = 'Maryrose Meadows' AND month(created)=(09);

--Find how many tasks where created in each month, 
--e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT month(created) AS month_number , count(*) AS total FROM task 
GROUP BY month(created);



--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title, user.email
FROM task, user,user_task
LEFT JOIN user ON user.user_id = user_task.user_id AND user_task.task_id=task.id AND user.email LIKE '%@spotify.com'
ORDER BY user.id;


--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title
FROM task 
LEFT JOIN user ON user.name= 'Donald Duck' AND task.status_id=1;

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.title
FROM task
LEFT JOIN user ON user.name= 'Maryrose Meadows' AND month(created)=9 ;

--Find how many tasks where created in each month, 
--e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT COUNT(task.id) 
FROM task
GROUP BY month(created);
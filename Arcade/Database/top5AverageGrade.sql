/*Please add ; after each select statement*/
CREATE PROCEDURE top5AverageGrade()
BEGIN
	SELECT CAST(AVG(r.grade) AS DECIMAL(10, 2)) average_grade
    FROM (SELECT grade FROM students ORDER BY grade DESC LIMIT 5) r;
END

/*
CREATE PROCEDURE top5AverageGrade()
BEGIN
    select format(avg(grade), 2) average_grade from 
        (select grade from students order by grade desc limit 5) y;
END
*/
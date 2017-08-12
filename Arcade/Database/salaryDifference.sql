CREATE PROCEDURE salaryDifference()
BEGIN
    SET @mini = (SELECT salary FROM employees ORDER BY salary ASC LIMIT 1);
    SET @maxi = (SELECT salary FROM employees ORDER BY salary DESC LIMIT 1);

    SET @mini_count = (SELECT COUNT(*) FROM employees WHERE salary=@mini);
    SET @maxi_count = (SELECT COUNT(*) FROM employees WHERE salary=@maxi);

    SELECT COALESCE((@maxi*@maxi_count) - (@mini*@mini_count), 0) AS difference;
END
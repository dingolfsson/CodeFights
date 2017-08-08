/*Please add ; after each select statement*/
CREATE PROCEDURE orderOfSuccession()
BEGIN
	SELECT concat((
        CASE gender
            WHEN 'F' THEN 'Queen' ELSE 'King' END), ' ', name) as name
    FROM Successors
    ORDER BY birthday;
END
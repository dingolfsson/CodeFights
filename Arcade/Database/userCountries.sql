CREATE PROCEDURE userCountries()
BEGIN
	SELECT users.id, CASE WHEN cities.country IS NULL THEN 'unknown' ELSE cities.country END AS country
    FROM users
    LEFT JOIN cities ON users.city = cities.city
    ORDER BY id;
END
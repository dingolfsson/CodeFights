CREATE PROCEDURE sunnyHolidays()
BEGIN
	SELECT holiday_date as ski_date
    FROM holidays
    WHERE EXISTS (
        SELECT sunny_date FROM weather WHERE holidays.holiday_date = weather.sunny_date)
    ORDER BY holiday_date;
END
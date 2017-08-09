CREATE PROCEDURE restaurantInfo()
BEGIN
    ALTER TABLE restaurants ADD description VARCHAR(100) default 'TBD';
    ALTER TABLE restaurants ADD active INT default 1;

    SELECT * FROM restaurants ORDER BY id;
END

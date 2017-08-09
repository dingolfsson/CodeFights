CREATE PROCEDURE studentsInClubs()
    SELECT * FROM students
    WHERE EXISTS (
        SELECT club_id FROM clubs WHERE students.club_id = clubs.id
    )
    ORDER BY students.id;

package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.StudentCourses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "studentCourses", path = "student_courses")
public interface StudentCoursesRepository extends JpaRepository<StudentCourses, Long> {

//    TODO
//    custom query to join 2 tables to get the teachers names for a specific
//    @Query(value = "SELECT first_name FROM User Teacher Name ORDER BY id")
//    Page<StudentCourses> findAllCoursesByStudentId(@RequestParam("studentId") Long studentId, Pageable pageable);

//    @Query(value = "SELECT CONCAT(u.first_name, ' ', u.last_name)
//    FROM student_courses s JOIN teacher_courses t
//    ON s.std_tchr_crs_id = t.tchr_crs_id
//    JOIN users u
//    ON u.user_id = t.teacher_id
//    WHERE s.student_id = :studentId
//")
//    Page<StudentCourses> findAllCoursesByStudentId(@RequestParam("studentId") Long studentId, Pageable pageable);

}

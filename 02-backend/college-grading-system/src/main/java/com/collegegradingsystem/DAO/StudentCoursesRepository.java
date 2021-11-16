package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.StudentCourses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "studentCourses", path = "student_courses")
public interface StudentCoursesRepository extends JpaRepository<StudentCourses, Long> {

//    TODO
//    custom query to join 2 tables to get the teachers names for a specific
//    @Query(value = "SELECT first_name FROM User Teacher Name ORDER BY id")
//    Page<StudentCourses> findAllCoursesByStudentId(@RequestParam("studentId") Long studentId, Pageable pageable);

    @Query("SELECT CONCAT(first_name, ' ', last_name)" +
            " FROM student_courses, teacher_courses, users" +
            " WHERE std_tchr_crs_id = tchr_crs_id" +
            " AND user_id = teacher_id" +
            " AND student_id = :studentId")
    List<String> findAllByStudentId(@Param("studentId") Long studentId);

    @Query("SELECT CONCAT(first_name, ' ', last_name)" +
            " FROM users" +
            " WHERE user_id = 8")
    List<String> test();

}
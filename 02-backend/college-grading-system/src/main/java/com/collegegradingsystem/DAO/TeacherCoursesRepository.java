package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.TeacherCourses;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "teacherCourses", path = "teacher_courses")
public interface TeacherCoursesRepository extends JpaRepository<TeacherCourses, Long> {

    Page<TeacherCourses> findAllCoursesByTeacherId(@RequestParam("teacherId") Long teacherId, Pageable pageable);

    Page<TeacherCourses> findAllTeachersByCourseId(@RequestParam("courseId") Long courseId, Pageable pageable);

}

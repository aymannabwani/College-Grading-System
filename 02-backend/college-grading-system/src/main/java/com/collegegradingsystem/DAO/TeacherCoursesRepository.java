package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.TeacherCourses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "teacherCourses", path = "teacher_courses")
public interface TeacherCoursesRepository extends JpaRepository<TeacherCourses, Long> {
}

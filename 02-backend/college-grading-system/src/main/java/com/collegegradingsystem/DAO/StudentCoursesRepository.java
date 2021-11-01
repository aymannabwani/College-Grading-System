package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.StudentCourses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "studentCourses", path = "student_courses")
public interface StudentCoursesRepository extends JpaRepository<StudentCourses, Long> {
}

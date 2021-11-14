package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.Courses;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "courses", path = "courses")
public interface CoursesRepository extends JpaRepository<Courses, Long> {

    Page<Courses> findByCourseId(@RequestParam("courseId") Long courseId, Pageable pageable);

    Page<Courses> findByCourseNameContaining(@RequestParam("courseName") String courseName, Pageable pageable);


}

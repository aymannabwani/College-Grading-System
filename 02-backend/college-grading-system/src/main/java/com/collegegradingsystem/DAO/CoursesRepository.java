package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.Courses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "courses", path = "courses")
public interface CoursesRepository extends JpaRepository<Courses, Long> {
}

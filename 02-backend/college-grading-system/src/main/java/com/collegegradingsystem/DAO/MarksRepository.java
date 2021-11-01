package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.Marks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "marks", path = "marks")
public interface MarksRepository extends JpaRepository<Marks, Long> {
}

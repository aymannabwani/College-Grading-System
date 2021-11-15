package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.Marks;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "marks", path = "marks")
public interface MarksRepository extends JpaRepository<Marks, Long> {

    Page<Marks> findAllMarksByStudentId(@RequestParam("studentId") Long studentId, Pageable pageable);

    Page<Marks> findAllStudentsByStdCrsId(@RequestParam("stdCrsId") Long stdCrsId, Pageable pageable);

}

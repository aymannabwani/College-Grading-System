package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UsersRepository extends JpaRepository<Users, Long> {
}

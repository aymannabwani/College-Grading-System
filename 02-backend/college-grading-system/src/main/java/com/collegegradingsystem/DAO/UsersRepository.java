package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.Users;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UsersRepository extends JpaRepository<Users, Long> {

    Page<Users> findByRoleId(@RequestParam("roleId") Long roleId, Pageable pageable);
}

package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.RoleCategory;
import com.collegegradingsystem.Entity.Users;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "roleCategory", path = "role-category")
public interface RoleCategoryRepository extends JpaRepository<RoleCategory, Long> {
}

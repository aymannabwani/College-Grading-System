package com.collegegradingsystem.DAO;

import com.collegegradingsystem.Entity.RoleCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "roleCategory", path = "role_category")
public interface RoleCategoryRepository extends JpaRepository<RoleCategory, Long> {
}

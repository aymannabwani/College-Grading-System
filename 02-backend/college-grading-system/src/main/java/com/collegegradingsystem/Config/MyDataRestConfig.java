package com.collegegradingsystem.Config;

import com.collegegradingsystem.Entity.RoleCategory;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    private EntityManager entityManager;

    @Autowired
    public MyDataRestConfig (EntityManager theEntityManager){
        entityManager= theEntityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        // Disable the User HTTP methods: PUT, POST, & DELETE
        config.getExposureConfiguration()
                .forDomainType(User.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // Disable the RoleCategory HTTP methods: PUT, POST, & DELETE
        config.getExposureConfiguration()
                .forDomainType(RoleCategory.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // call internal helper method to expose the roleId's
        exposeIds(config);

    }

    private void exposeIds(RepositoryRestConfiguration config) {

            // expose entity Ids
            //

            // getting a list of all entity classes from the EntityManager
            Set<EntityType<?>> entities= entityManager.getMetamodel().getEntities();

            // creating an array of Entity Types
            List<Class> entityClasses= new ArrayList<>();

            // getting the Entity Types for the entities
            for (EntityType<?> tempEntityType: entities) {
                entityClasses.add(tempEntityType.getJavaType());
            }

            // expose the Entity Ids for the Array entity/domain types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
            config.exposeIdsFor(domainTypes);
        }

}

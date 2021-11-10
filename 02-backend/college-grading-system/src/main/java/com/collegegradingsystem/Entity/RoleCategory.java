package com.collegegradingsystem.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "role_category")
@Getter
@Setter
public class RoleCategory implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private Long roleId;

    @Column(name = "role_name")
    private String roleName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "role")
    private Set<Users> users;

}


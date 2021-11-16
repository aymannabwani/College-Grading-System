package com.collegegradingsystem.Entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity(name = "student_courses")
@Getter
@Setter
public class StudentCourses implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "std_crs_id")
    private Long stdCrsId;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "scId")
    private Set<Marks> marks;

    @ManyToOne
    @JoinColumn(name = "student_id", insertable = false, updatable = false)
    private Users role;

    @ManyToOne
    @JoinColumn(name = "std_tchr_crs_id", insertable = false, updatable = false)
    private TeacherCourses tcId;

    @Column(name = "std_tchr_crs_id")
    private Long stdTchrCrsId;

    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_by")
    private String updatedBy;

    @Column(name = "date_created")
    @CreationTimestamp
    private Date dateCreated;

    @Column(name = "last_updated")
    @UpdateTimestamp
    private Date lastUpdated;

}

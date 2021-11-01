package com.collegegradingsystem.Entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "marks")
@Getter
@Setter
public class Marks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "marks_id")
    private Long marksId;

    @ManyToOne
    @JoinColumn(name = "student_id", insertable = false, updatable = false)
    private Users role;

    @ManyToOne
    @JoinColumn(name = "std_crs_id", insertable = false, updatable = false)
    private StudentCourses scId;

    @Column(name = "std_crs_id")
    private String stdCrsId;

    @Column(name = "student_id")
    private String studentId;

    @Column(name = "marks_1")
    private Double marks1;

    @Column(name = "marks_2")
    private Double marks2;

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

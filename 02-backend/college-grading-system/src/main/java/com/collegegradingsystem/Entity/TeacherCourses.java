package com.collegegradingsystem.Entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "teacher_courses")
@Getter
@Setter
public class TeacherCourses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tchr_crs_id")
    private Long tchrCrsId;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "tcId")
    private Set<StudentCourses> studentCourses;

    @ManyToOne
    @JoinColumn(name = "course_id", insertable = false, updatable = false)
    private Courses tcrsId;

    @ManyToOne
    @JoinColumn(name = "teacher_id", insertable = false, updatable = false)
    private Users role;

    @Column(name = "course_id")
    private String courseId;

    @Column(name = "teacher_id")
    private String teacherId;

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

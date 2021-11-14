package com.collegegradingsystem.Implementations;

import com.collegegradingsystem.DAO.CoursesRepository;
import com.collegegradingsystem.Entity.Courses;
import com.collegegradingsystem.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class CourseImpl {

    @Autowired
    private CoursesRepository coursesRepository;


    // create new course
//    @PostMapping("/courses")
//    public Courses createNewCourse(@RequestBody Courses course){
//        return coursesRepository.save(course);
//    }

    // find course by ID
//    @GetMapping("/courses/{courseId}")
//    public ResponseEntity<Courses> getTheCourseById(@PathVariable Long courseId){
//        Courses theCourse = coursesRepository.findById(courseId)
//                .orElseThrow(() ->
//                        new ResourceNotFoundException("Course with ID: \" + courseId + \" doesn't exist"));
//        return ResponseEntity.ok(theCourse);
//    }

    // update existing course
    @PutMapping("/courses/{courseId}")
    public ResponseEntity<Courses> updateCourse(@PathVariable Long courseId, @RequestBody Courses existingCourse){
        Courses course = coursesRepository.findById(courseId)
                .orElseThrow(() -> new  ResourceNotFoundException("User with ID: " + courseId + " doesn't exist"));
        course.setCourseName(existingCourse.getCourseName());
        course.setStartDate(existingCourse.getStartDate());
        course.setEndDate(existingCourse.getEndDate());
        course.setUpdatedBy(existingCourse.getUpdatedBy());
        Courses updatedCourse = coursesRepository.save(course);
        return ResponseEntity.ok(updatedCourse);
    }

    // delete existing course
    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<Map<String, Boolean>> deleteCourse(Long courseId){
        Courses course = coursesRepository.findById(courseId)
                .orElseThrow(() -> new  ResourceNotFoundException("Course with ID: " + courseId + " doesn't exist"));

        coursesRepository.delete(course);

        Map<String, Boolean> response= new HashMap<>();
        response.put("Deleted successfully", Boolean.TRUE);
        return  ResponseEntity.ok(response);
    }
}

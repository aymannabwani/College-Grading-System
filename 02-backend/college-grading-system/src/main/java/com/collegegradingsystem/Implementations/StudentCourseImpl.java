package com.collegegradingsystem.Implementations;

import com.collegegradingsystem.DAO.StudentCoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentCourseImpl {

    @Autowired
    private StudentCoursesRepository studentCourseRepository;

  @GetMapping("fbs")
    List<String> fbs(@RequestParam("studentId") Long studentId){

        return studentCourseRepository.findAllByStudentId(studentId);
    }

    @GetMapping("t")
    List<String> test(){

        return studentCourseRepository.test();
    }


}

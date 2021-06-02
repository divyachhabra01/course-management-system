package com.springboot.controller;

import com.springboot.model.Course;
import com.springboot.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("api/v1")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();

    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourse(@PathVariable("id") Integer id){
        return courseService.getCourse(  id);
    }
    @PostMapping("/courses")
    public void addCourse(@RequestBody Course course) {
        courseService.addCourse(course);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Course> updateCourse(@Validated @RequestBody Course course, @PathVariable("id") Integer id){
       return  courseService.updateCourse(course, id);
    }

    @DeleteMapping("/{id}")
    public Map<String,Boolean> delete(@PathVariable("id") Integer id){
       return courseService.delete(id);
    }


}

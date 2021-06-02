package com.springboot.service;

import com.springboot.data.CourseRepository;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses() {
        List<Course> courses = new ArrayList<>();
        courseRepository.findAll().forEach(courses::add);
        return courses;
    }

    public ResponseEntity<Course> getCourse(Integer id){
        Course course = courseRepository.findById(id).orElseThrow(ResourceNotFoundException.builder().message("Course Not Found For this id::" + id)::build);
        return ResponseEntity.ok().body(course);
    }

    public void addCourse(Course course) {

        courseRepository.save(course);
    }
    public Map<String, Boolean> delete(Integer id){
        Course course = courseRepository.findById(id).orElseThrow(ResourceNotFoundException.builder().message("Course Not Found For this id::" + id)::build);
        courseRepository.delete(course);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    public ResponseEntity<Course> updateCourse(Course newcourse, Integer id) {
       Course  course = courseRepository.findById(id).orElseThrow(ResourceNotFoundException.builder().message("Course Not Found For this id::" + id)::build);
        course.setName(newcourse.getName());
        course.setDescription(newcourse.getDescription());
        course.setId(newcourse.getId());
        final Course updatedcourse = courseRepository.save(course);
        return ResponseEntity.ok(updatedcourse);
    }
}

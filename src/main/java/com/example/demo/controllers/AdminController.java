package com.example.demo.controllers;

import com.example.demo.models.Student;
import com.example.demo.services.StudentService;
import io.github.inertia4j.spring.Inertia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private Inertia inertia;

    private final StudentService studentService;

    public AdminController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    @ResponseBody
    public ResponseEntity<String> admin() {
        return inertia.render("Admin/Dashboard", Map.of("students", studentService.getAllStudents()));
    }

    @GetMapping("/students/new")
    @ResponseBody
    public ResponseEntity<String> createStudentForm() {
        return inertia.render("Admin/Students/Create", Map.of("student", new Student()));
    }

    @PostMapping("/students")
    @ResponseBody
    public ResponseEntity<String> saveStudent(@ModelAttribute("student") Student student) {
        studentService.addStudent(student);
        return inertia.redirect("/admin");
    }

    @GetMapping("/students/edit/{id}")
    @ResponseBody
    public ResponseEntity<String> editStudentForm(@PathVariable Long id) {
        return inertia.render("Admin/Students/Edit", Map.of("student", studentService.getStudentById(id)));
    }

    @PostMapping("/students/{id}")
    @ResponseBody
    public ResponseEntity<String> updateStudent(@PathVariable Long id, @ModelAttribute("student") Student student) {
        studentService.updateStudent(id, student);
        return inertia.redirect("/admin");
    }

    @GetMapping("/students/delete/{id}")
    @ResponseBody
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return inertia.redirect("/admin");
    }
}


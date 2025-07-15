package com.example.demo.exceptions;

import com.example.demo.models.Student;

public class DuplicateStudentException extends RuntimeException {
    private final Student student;
    public DuplicateStudentException(Student student) {
        super("Student with name '" + student.getName() + "' already exists.");
        this.student = student;
    }

    public Student getStudent() {
        return student;
    }
} 
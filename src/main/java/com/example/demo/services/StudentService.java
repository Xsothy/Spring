package com.example.demo.services;

import com.example.demo.models.Student;
import com.example.demo.repositories.StudentRepository;
import com.example.demo.exceptions.DuplicateStudentException;
import com.example.demo.exceptions.StudentNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // Remove constructor with sample data

    // Get all students
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) throws StudentNotFoundException {
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException(id));
    }

    public Student addStudent(Student student) throws DuplicateStudentException {
        if (studentRepository.findByName(student.getName()).isPresent()) {
            throw new DuplicateStudentException(student);
        }
        return studentRepository.save(student);
    }

    public Student updateStudent(Long id, Student updatedStudent) throws StudentNotFoundException, DuplicateStudentException {
        return studentRepository.findById(id).map(existing -> {
            if (!existing.getName().equals(updatedStudent.getName()) && studentRepository.findByName(updatedStudent.getName()).isPresent()) {
                throw new DuplicateStudentException(updatedStudent);
            }
            existing.setName(updatedStudent.getName());
            existing.setSex(updatedStudent.getSex());
            existing.setEmail(updatedStudent.getEmail());
            existing.setScore(updatedStudent.getScore());
            return studentRepository.save(existing);
        }).orElseThrow(() -> new StudentNotFoundException(id));
    }

    public void deleteStudent(Long id) throws StudentNotFoundException {
        if (!studentRepository.existsById(id)) {
            throw new StudentNotFoundException(id);
        }
        studentRepository.deleteById(id);
    }

    public boolean existsById(Long id) {
        return studentRepository.existsById(id);
    }

    public long getStudentCount() {
        return studentRepository.count();
    }
} 
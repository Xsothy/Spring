package com.example.demo.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "students", uniqueConstraints = @UniqueConstraint(columnNames = "name"))
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    @Column(unique = true, nullable = false)
    private String name;
    
    @NotBlank(message = "Sex is required")
    @Pattern(regexp = "^(Male|Female|Other)$", message = "Sex must be Male, Female, or Other")
    private String sex;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email address")
    private String email;
    
    @Min(value = 0, message = "Score must be at least 0")
    @Max(value = 100, message = "Score must not exceed 100")
    private int score;

    // Default constructor
    public Student() {
    }

    // Constructor with all fields
    public Student(Long id, String name, String sex, String email, int score) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.email = email;
        this.score = score;
    }

    // Constructor without id (for creating new students)
    public Student(String name, String sex, String email, int score) {
        this.name = name;
        this.sex = sex;
        this.email = email;
        this.score = score;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", email='" + email + '\'' +
                ", score=" + score +
                '}';
    }
} 
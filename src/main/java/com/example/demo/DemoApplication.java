package com.example.demo;

import com.example.demo.models.Student;
import com.example.demo.repositories.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(StudentRepository repository) {
		return args -> {
			// Only initialize data if the database is empty
			if (repository.count() == 0) {
				repository.save(new Student("John Doe", "Male", "john.doe@email.com", 85));
				repository.save(new Student("Jane Smith", "Female", "jane.smith@email.com", 92));
				repository.save(new Student("Mike Johnson", "Male", "mike.johnson@email.com", 78));
				repository.save(new Student("Emily Davis", "Female", "emily.davis@email.com", 89));
				System.out.println("Sample data initialized successfully!");
			} else {
				System.out.println("Database already contains data. Skipping initialization.");
			}
		};
	}
}

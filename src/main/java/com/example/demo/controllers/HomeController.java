package com.example.demo.controllers;

import io.github.inertia4j.spring.Inertia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class HomeController {

    @Autowired
    private Inertia inertia;

    @GetMapping({"/", "/home"})
    @ResponseBody
    public ResponseEntity<String> home() {
        return inertia.render("Home", Map.of("message", "Welcome to the Demo App!"));
    }
}


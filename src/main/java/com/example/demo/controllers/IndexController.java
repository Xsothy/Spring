package com.example.demo.controllers;

import com.example.demo.requests.CalculateRequest;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@Controller
public class IndexController {
    @GetMapping("/")
    public String index() {
        return "index";
    }
    
    @GetMapping("/cv")
    public String cv() {
        return "cv";
    }

    @PostMapping("/calculate")
    @ResponseBody
    public BigDecimal calculate(
            @Valid @RequestBody CalculateRequest calculateRequest
    ) {
        BigDecimal bigDecimal = new BigDecimal(calculateRequest.num1);
        return bigDecimal.divide(new BigDecimal(calculateRequest.num2));
    }

    @ExceptionHandler(ArithmeticException.class)
    @ResponseBody
    public String handleArithmeticException(ArithmeticException e) {
        return "ArithmeticException: " + e.getMessage();
    }
}

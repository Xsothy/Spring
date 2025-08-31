package com.example.demo.config;

import io.github.inertia4j.spring.VersionProvider;
import org.springframework.context.annotation.Configuration;

@Configuration
public class InertiaConfiguration implements VersionProvider {

    @Override
    public String get() {
        return "1.0"; // Version for cache busting
    }
}

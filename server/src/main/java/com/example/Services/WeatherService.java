package com.example.Services;

import org.springframework.http.ResponseEntity;

public interface WeatherService {
    ResponseEntity<String> getWeather(String city, String unitMeasurement);
} 
package com.example.Services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class WeatherServiceImpl implements WeatherService {
    private static final String OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
    private final String apiKey = "__API_KEY___"; // Replace with your OpenWeather API key

    @Override
    public ResponseEntity<String> getWeather(String city, String unitMeasurement) {
        if (unitMeasurement == null || unitMeasurement.isEmpty()) {
            unitMeasurement = "metric"; // Default to Celsius
        }

        try {
            String weatherUrl = UriComponentsBuilder
                    .fromUriString(OPEN_WEATHER_URL)
                    .queryParam("q", city.replaceAll(" ", "+"))
                    .queryParam("units", unitMeasurement)
                    .queryParam("appid", apiKey)
                    .toUriString();

            RestTemplate restTemplate = new RestTemplate();
            String response = restTemplate.getForObject(weatherUrl, String.class);
            return ResponseEntity.ok(response);
        } catch (HttpClientErrorException e) {
            return ResponseEntity.status(e.getStatusCode()).body("Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred.");
        }
    }
}

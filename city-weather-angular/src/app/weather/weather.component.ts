import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  fetchWeather() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (error) => {
        console.error('Error fetching weather data', error);
      }
    });
  }

}

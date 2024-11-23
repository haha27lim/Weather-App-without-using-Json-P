import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:8080/api/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string, units: string = 'metric'): Observable<any> {
    const params = new HttpParams()
      .set('city', city)
      .set('units', units);
    return this.http.get(this.apiUrl, { params });
  }
}

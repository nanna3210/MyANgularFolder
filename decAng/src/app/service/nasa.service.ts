import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import
@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private httpClient: HttpClient) {}

  getmarsPhoto(): Observable<any> {
    return this.httpClient.get<any>(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
    );
  }
}

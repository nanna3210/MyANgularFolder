import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NanaServiceService implements OnInit {
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {}
  getTheData(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}

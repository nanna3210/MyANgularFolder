import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WikiService {
  constructor(private httpClient: HttpClient) {}

  getcategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(
      'http://fakestoreapi.com/products/categories'
    );
  }

  getProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://fakestoreapi.com/products/');
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../contract/User';

@Injectable({
  providedIn: 'root',
})
export class UseerseService {
  httpClient = inject(HttpClient);
  User = [];
  constructor() {}
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}

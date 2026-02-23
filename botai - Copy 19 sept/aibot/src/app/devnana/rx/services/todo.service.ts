import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  urlStringForTOdos: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private htpClient: HttpClient) {}

  getTheTodo(): Observable<Todo[]> {
    return this.htpClient.get<Todo[]>(this.urlStringForTOdos);
  }
}

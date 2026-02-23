import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  filter,
  from,
  fromEvent,
  interval,
  map,
  of,
  Subscription,
  take,
  throwError,
  toArray,
} from 'rxjs';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../students.service';
import { Todo } from '../../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-to-array-demo',
  templateUrl: './to-array-demo.component.html',
  styleUrls: ['./to-array-demo.component.css'],
})
export class ToArrayDemoComponent implements OnInit, AfterViewInit {
  constructor(
    private studentService: StudentsService,
    private todoService: TodoService
  ) {}
  texColor: boolean = false;

  @ViewChild('todoBtn') todoBtn!: ElementRef;
  @ViewChild('inpt') inpt!: ElementRef;
  todos: Todo[] = [];
  ngOnInit(): void {
    console.log('hello ');
  }

  ngAfterViewInit(): void {}
  gettheToDos() {
    this.todoService
      .getTheTodo()
      .pipe(
        map((todos) => {
          return todos.filter((todo) => {
            return (todo.completed = true);
          });
        })
      )
      .subscribe((data) => {
        this.todos = data;
      });
  }
  gtTheTerm() {}
}

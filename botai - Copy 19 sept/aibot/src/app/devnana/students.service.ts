import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './models/student.model';
import { catchError, map, Observable, of, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  url: string = 'https://jsonplaceholder.typicode.com/users';
  studentSubJect: Subject<Student[]> = new Subject<Student[]>();
  constructor(private httpCl: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.httpCl.get<Student[]>(this.url).pipe(
      map((students: Student[]) => {
        return students.map((student) => ({
          ...student,
          name: student.name.toUpperCase(),
        }));
      }),
      catchError((error) => {
        console.error('error fetching students ', error);
        return throwError(() => new Error('error in fetching students '));
      })
    );
  }

  getTheStudents() {
    return this.httpCl.get<Student[]>(this.url);
  }

  sendStudentData() {
    this.httpCl
      .get<Student[]>(this.url)
      .pipe(
        catchError((error) => {
          console.error('error fetching data' + error);
          return of([]);
        })
      )
      .subscribe((data) => {
        this.studentSubJect.next(data);
      });
  }
}

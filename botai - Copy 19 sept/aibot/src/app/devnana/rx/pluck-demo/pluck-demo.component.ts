import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {
  catchError,
  delay,
  from,
  interval,
  map,
  of,
  pluck,
  retry,
  scan,
  take,
  tap,
  throwError,
  toArray,
  zip,
} from 'rxjs';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-pluck-demo',
  templateUrl: './pluck-demo.component.html',
  styleUrls: ['./pluck-demo.component.css'],
})
export class PluckDemoComponent implements OnInit {
  constructor(private studentService: StudentsService) {}
  isClicked: boolean = true;
  student: any;
  namesArray: string[] = [];
  onlySomeStudents: string[] = [];
  ngOnInit(): void {}
  getTheStudents(): void {
    this.isClicked = !this.isClicked;

    // Fetch students data
  }

  getStudentsNameEverySecond() {
    this.studentService.getStudents().subscribe((students) => {
      const studentObservable = from(students);
      const intervalObservAble = interval(1000);
      zip(studentObservable, intervalObservAble).subscribe((data) => {
        this.namesArray.push(data[0].name);
      });
    });
  }

  takeOnly() {
    const numb = 7;
    this.studentService.getStudents().subscribe((student) => {
      from(student)
        .pipe(take(7))
        .subscribe((data) => {
          console.log(data.name);
        });
    });
  }
  exampleRetryOPerator() {
    this.studentService
      .getStudents()
      .pipe(
        retry(5),
        delay(1000),
        catchError((error) => {
          let errorMessage = 'Unknown error occurred';
          if (error.status) {
            // Error status from the server (e.g., 404, 500)
            errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
          } else if (error.name && error.message) {
            errorMessage = `Error: ${error.name}\nMessage: ${error.message}`;
          }
          console.error('Detailed Error:', errorMessage);
          return throwError(
            () =>
              new Error(
                'Something went wrong with fetching the students. Please try again later.'
              )
          );
        })
      )
      .subscribe((students) => {
        console.log(students);
      });
  }

  // retry operator  retry ing the api
  retryWithTheCount() {
    this.studentService
      .getStudents()
      .pipe(
        delay(10000),
        scan((retryCount) => {
          if (retryCount >= 5) {
            throw new Error('Some api error ');
          } else {
            retryCount = retryCount + 1;
          }
          return retryCount;
        }, 0)
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  exampleSubject() {
    this.studentService.studentSubJect;
  }
}

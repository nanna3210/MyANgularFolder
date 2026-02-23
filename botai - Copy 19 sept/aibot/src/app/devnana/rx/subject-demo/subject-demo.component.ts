import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import {
  concat,
  concatMap,
  filter,
  from,
  merge,
  mergeMap,
  of,
  retry,
  Subject,
  take,
  takeLast,
  takeUntil,
  tap,
  toArray,
} from 'rxjs';
import { zip } from 'rxjs';
import { Student } from '../../models/student.model';
import { logMessages } from '@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild';

import { loadSecondaryEntryPointInfoForApfV14 } from '@angular/compiler-cli/ngcc/src/utils';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css'],
})
export class SubjectDemoComponent implements OnInit {
  constructor(private studentservice: StudentsService) {}

  ngOnInit(): void {
    const array2 = of([3, 4, 53, 54, 55]);

    const array1 = of([1, 2, 3, 4, 5]);
  }

  mergeData() {
    this.studentservice.getTheStudents().pipe();
  }

  getStudentsData() {
    this.studentservice.sendStudentData();
    this.studentservice.studentSubJect
      .pipe(
        mergeMap((students: Student[]) => {
          return from(students);
        })
      )
      .subscribe((data) => {
        console.log(data.name);
      });
  }
}

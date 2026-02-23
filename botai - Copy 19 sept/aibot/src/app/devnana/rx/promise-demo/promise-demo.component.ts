import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../../students.service";
import {interval, map, Observable, Subject} from "rxjs";
import {Student} from "../../models/student.model";

@Component({
  selector: 'app-promise-demo',
  templateUrl: './promise-demo.component.html',
  styleUrls: ['./promise-demo.component.css'],
})
export class PromiseDemoComponent implements OnInit {
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  studentObs = new Observable<any>()
  currentTime: Observable<{ date: Date, milisecs: number }> = new Observable<{ date: Date, milisecs: number }>;


  ngOnInit(): void {}
  constructor(private studentService : StudentsService) {
  }
  getTheData() {
    this.currentTime =interval(100).pipe(
      map((data) => {
        const now = new Date();


        return {
          date : now,
          milisecs : now.getMilliseconds()
        }

      })


     )




  }}

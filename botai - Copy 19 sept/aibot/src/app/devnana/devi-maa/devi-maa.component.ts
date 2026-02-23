import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsService } from '../students.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-devi-maa',
  templateUrl: './devi-maa.component.html',
  styleUrls: ['./devi-maa.component.css'],
})
export class DeviMaaComponent implements OnInit {
  constructor(private studentsService: StudentsService) {}

  student!: Student[] | any[];
  ngOnInit(): void {}

  getData() {
    this.studentsService.getStudents().subscribe((student) => {
      this.student = student;
    });
  }
}

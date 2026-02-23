import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, interval, map, Observable, of, range, switchMap } from 'rxjs';

@Component({
  selector: 'app-nanna-test',
  templateUrl: './nanna-test.component.html',
  styleUrls: ['./nanna-test.component.css'],
})
export class NannaTestComponent implements OnInit {
  constructor(private httpCli: HttpClient) {}
  comments!: any[];
  nannaNumber!: number;
  ngOnInit(): void {
    const source = range(1, 10);
    source.subscribe((x) => {
      console.log(x);
    });
  }

  getData() {
    const nanna = from(
      fetch('https://jsonplaceholder.typicode.com/comments')
    ).pipe(switchMap((val) => val.json()));

    nanna.subscribe((x) => {
      this.comments = x;
    });
  }
}

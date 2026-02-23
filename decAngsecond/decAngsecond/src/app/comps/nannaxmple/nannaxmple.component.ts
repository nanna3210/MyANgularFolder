import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, interval, map, Observable, take } from 'rxjs';
import { NanaServiceService } from 'src/app/services/nana-service.service';

@Component({
  selector: 'app-nannaxmple',
  templateUrl: './nannaxmple.component.html',
  styleUrls: ['./nannaxmple.component.scss'],
})
export class NannaxmpleComponent implements OnInit {
  data: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private nannaService: NanaServiceService
  ) {}

  ngOnInit(): void {
    let list1 = [3, 7, 45, 22, 76, 11, 27];
    let nanna = from(list1)
      .pipe(
        take(3),
        map((x) => x * 2),
        map((x) => x * 2)
      )
      .subscribe((x) => {
        console.log(x);
      });
  }
  getTheData() {
    this.nannaService.getTheData().subscribe((data) => {
      this.data = data;
    });
  }
}

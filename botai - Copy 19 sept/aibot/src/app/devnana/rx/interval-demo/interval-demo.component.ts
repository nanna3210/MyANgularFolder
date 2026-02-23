import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilService } from '../services/design-util.service';

@Component({
  selector: 'app-interval-demo',
  templateUrl: './interval-demo.component.html',
  styleUrls: ['./interval-demo.component.css'],
})
export class IntervalDemoComponent implements OnInit {
  constructor(private designUtility: DesignUtilService) {}
  videoSubScription!: Subscription;
  obserVableMessage!: string;
  ngOnInit(): void {
    const broadCastVideo = timer(10000, 1000);

    this.videoSubScription = broadCastVideo.subscribe((result) => {
      console.log(result);
      this.designUtility.getData(result, 'nContainer');
      if (result > 7) {
        this.videoSubScription.unsubscribe();
      }
    });
  }
}

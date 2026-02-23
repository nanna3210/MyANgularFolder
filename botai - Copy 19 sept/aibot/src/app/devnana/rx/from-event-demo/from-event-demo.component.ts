import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilService } from '../services/design-util.service';

@Component({
  selector: 'app-from-event-demo',
  templateUrl: './from-event-demo.component.html',
  styleUrls: ['./from-event-demo.component.css'],
})
export class FromEventDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addbtn!: ElementRef;

  constructor(private designUtility: DesignUtilService) {}
  ngAfterViewInit(): void {
    let count: number = 1;
    fromEvent(this.addbtn.nativeElement, 'click').subscribe((x) => {
      console.log(count++);

      this.designUtility.getData(count, 'nanna-one');
      this.designUtility.getData(count, 'nanna-two');
    });
  }

  ngOnInit(): void {}
}

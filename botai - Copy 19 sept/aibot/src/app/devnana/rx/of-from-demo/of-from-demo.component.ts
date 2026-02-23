import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilService } from '../services/design-util.service';

@Component({
  selector: 'app-of-from-demo',
  templateUrl: './of-from-demo.component.html',
  styleUrls: ['./of-from-demo.component.css'],
})
export class OfFromDemoComponent implements OnInit {
  theWord: string = 'TheWord that has the TO pass throw the ObserVable';
  constructor(private designUtility: DesignUtilService) {}
  ngOnInit(): void {
    const nanna = of(
      'Sri krishna',
      'Srri Radha  ',
      'Guru Mahadev ',
      'Prabhu Jagannath '
    );
    from(this.theWord).subscribe((x) => {
      // console.log(x);
    });

    const govindArray = [77, 17, 78, 67, 89, 777, 107, 701];
    const numbers = from(govindArray);
    nanna.subscribe((x) => {
      setTimeout(() => {
        this.designUtility.printing(x, 'nContainer');
      }, 2000);
    });
    numbers.subscribe((x) => {
      this.designUtility.getData(x, 'nNumbers');
    });
  }
}

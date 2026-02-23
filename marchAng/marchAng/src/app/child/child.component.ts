import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NannaData } from '../model/NannaData';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() parentsData: string = '';
  @Input() parentsJsonObj: NannaData = {} as NannaData;
  @Input() parentsCourseData = '';

  @Output() childArrayObjEvent = new EventEmitter();
  @Output() childStringEvent = new EventEmitter();
  constructor() {}
  stringData = 'this is the  child data which has to be send through output';
  arrayobj = [
    {
      name: 'nanna Dash ',
      city: 'bhubaneswar',
      native: 'kalahandi ',
    },
    {
      name: 'bapu Dash ',
      city: 'Berhampur',
      native: 'Kalhandi ',
    },
    {
      name: 'Bapi dash ',
      city: 'Bhawanipatna',
      native: 'khatiguda  ',
    },
  ];
  onSendingdata() {
    this.childArrayObjEvent.emit(this.arrayobj);
    this.childStringEvent.emit(this.stringData);
  }
  ngOnInit(): void {}
}

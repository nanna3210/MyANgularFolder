import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NannaData } from '../model/NannaData';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  stringdata: string = 'nanna is greeting you ! ';
  @ViewChild(ChildComponent) childComp!: ChildComponent;
  childArrayObj = [];
  //  = this.childComp.arrayobj;

  @ViewChild('viewchildSection') viewChildDiv!: ElementRef;
  course: string = '';
  childsSringData = '';
  childArObj: any = [];

  jsonObj: NannaData = {
    id: 12,
    firstName: 'nanna !',
    lastname: 'dash',
    Role: 'Developer',
  };

  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.viewChildDiv);
    console.log(this.viewChildDiv.nativeElement.className);

    this.viewChildDiv.nativeElement.style.backgroundColor = 'red';
    this.viewChildDiv.nativeElement.style.padding = '20px';
  }
  ngOnInit(): void {}

  onSend() {
    this.course = 'Angular is your course';
    this.childArObj = this.childComp.arrayobj;
  }
}

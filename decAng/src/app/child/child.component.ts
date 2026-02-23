import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input() allcount: number = 0;
  @Input() electronicsCount: number = 0;
  @Input() jeweleryCount: number = 0;
  @Input() menClothingCount: number = 0;
  @Input() womenClothingCount: number = 0;

  @Output() FilterChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  filterButtonClick(e: any) {
    this.FilterChanged.emit(e.target.name);
    console.log(e.target);

    // console.log(e.target.name);
  }
}

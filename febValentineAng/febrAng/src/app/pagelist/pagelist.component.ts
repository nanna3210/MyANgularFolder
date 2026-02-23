import { Component, Input, OnInit } from '@angular/core';
import { WikiService } from '../services/wiki.service';

@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.scss'],
})
export class PagelistComponent implements OnInit {
  categories: string[] | undefined;
  constructor(private fakestore: WikiService) {}

  ngOnInit(): void {
    this.fakestore.getcategories().subscribe((data) => {
      this.categories = data;
    });
  }
}

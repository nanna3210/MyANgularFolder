import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UseerseService } from '../../serv/useerse.service';
import { CommonModule } from '@angular/common';
import { User } from '../../contract/User';
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from '../../search/search.component';
// import { User } from '../../contract/User.ts';

@Component({
  selector: 'app-userco',
  standalone: true,
  imports: [CommonModule, MatButtonModule, SearchComponent],
  templateUrl: './userco.component.html',
  styleUrl: './userco.component.css',
})
export class UsercoComponent implements OnInit {
  userService = inject(UseerseService);
  @Input() applicationName: string = 'amazon';

  users: User[] = [];
  filterdUsers: User[] = [];
  @Output() viewUsers = new EventEmitter<number>();
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  filterById() {
    this.filterdUsers = this.users.filter((x) => x.id > 5);
  }
  onsearhtermChange(event: any) {
    this.filterdUsers = this.users.filter((x) => {
      return x.name.toLowerCase().includes(event.toLowerCase());
    });
    console.log(this.filterdUsers);
  }
  sendTheData(itemId: number) {
    this.viewUsers.emit(itemId);
    console.log(itemId);
  }
}

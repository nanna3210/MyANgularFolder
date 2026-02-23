import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.scss'],
})
export class EventBindComponent implements OnInit {
  constructor() {}
  users: any = [
    { username: 'john' },
    { username: 'harry' },
    { username: 'chinu' },
    { username: 'dibya' },
    { username: 'catia' },
  ];

  userAvailbale: boolean = false;
  messageString: string = '';
  ngOnInit(): void {}
  clickingEvent(event: any) {
    // console.log(event.target.value);
    for (var user of this.users) {
      // console.log(user.username);

      if (user.username == event.target.value) {
        // alert('matched');
        this.messageString = 'username is taken ';
        this.userAvailbale = false;
        break;
      } else {
        this.messageString = 'username is available';
        this.userAvailbale = true;
      }
    }
  }
  submitClicked(x: any) {
    console.log(x);
  }
}

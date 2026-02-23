import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../axios.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private axioService: AxiosService) {}
  componentToShow: string = 'welcome';

  ngOnInit(): void {}
  showComponent(componentToShow: string) {
    this.componentToShow = componentToShow;
  }
  onLogin(input: any): void {
    this.axioService.request('POST', '/login', {
      login: input.login,
      password: input.password,
    });
  }
  onRegister(input: any): void {
    this.axioService.request('POST', '/register', {
      firstName: input.firstName,
      lastName: input.lastName,
      login: input.login,
      password: input.password,
    });
  }
}

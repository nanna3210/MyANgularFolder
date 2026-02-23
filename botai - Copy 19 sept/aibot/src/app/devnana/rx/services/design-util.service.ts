import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilService {
  constructor() {}
  getData(val: number, containerId: string) {
    const nanna = document.getElementById(containerId);
    const li = document.createElement('li');
    nanna!.appendChild(li).innerText = 'nanna ' + val;
  }
  printing(name: string, containerId: string) {
    const element = document.getElementById(containerId);
    const li = document.createElement('li');
    element!.appendChild(li).innerText = 'Sri  ' + name;
  }
}

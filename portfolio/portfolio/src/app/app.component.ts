import { DOCUMENT } from '@angular/common';
// import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Work } from './models/Work';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'portfolio';

  @ViewChild('fadeIn') fadeIn: ElementRef | undefined;
  constructor() {}

  data: Work[] = [
    {
      workHeading: 'Remote Dev',
      workDescription: 'Full stack Remote Developer ',
      imageUrl: '../assets/coder.jpg',
      technologies: ['html', 'css', 'typescript', 'java'],
    },
    {
      workHeading: 'Api Developer',
      workDescription: 'A backend Developer for Creating API  ',
      imageUrl: '../assets/postman.jpg',
      technologies: ['Postman', 'Kafka', 'Springboot', 'java'],
    },
    {
      workHeading: 'UTSAV',
      workDescription: 'Event mangement Company  ',
      imageUrl: '../assets/angular.jpg',
      technologies: ['css', 'typescript', 'java', 'Angular', 'bootstrap'],
    },

    {
      workHeading: 'E Commerrce Platform ',
      workDescription: 'E commerce platform for garments Apparels  ',
      imageUrl: '../assets/flower Dev.jpg',
      technologies: ['css', 'javascript', 'java', 'Angular', 'tailwind'],
    },
    {
      workHeading: 'Inventory Management',
      workDescription: 'worked For an inventory Management application ',
      imageUrl: '../assets/developer.jpg',
      technologies: ['css', 'Angular', 'spring', 'PHP ', 'bootsrap'],
    },
    {
      workHeading: 'HealthCare',
      workDescription: 'Health Care Application   ',
      imageUrl: '../assets/coding-lap.jpg',
      technologies: [
        'css',
        'typescript',
        'java',
        'Angular',
        'angular Material ',
      ],
    },
  ];

  
  fading(event: Event) {
    const element = (event.target as HTMLAnchorElement).innerHTML;
    // console.log(element);
    const projectEl1 = document.querySelector(
      '.project:nth-child(1)'
    ) as HTMLDivElement;
    const projectEl2 = document.querySelector(
      '.project:nth-child(2)'
    ) as HTMLDivElement;
    const projectEl3 = document.querySelector(
      '.project:nth-child(3)'
    ) as HTMLDivElement;
    const projectEl4 = document.querySelector(
      '.project:nth-child(4)'
    ) as HTMLDivElement;
    const projectEl5 = document.querySelector(
      '.project:nth-child(5)'
    ) as HTMLDivElement;
    const projectEl6 = document.querySelector(
      '.project:nth-child(6)'
    ) as HTMLDivElement;
    console.log(projectEl3);


   
  if (element === 'All') {
      projectEl1.style.opacity = '1';
      projectEl1.style.transform = 'scale(1)';
      projectEl2.style.opacity = '1';
      projectEl2.style.transform = 'scale(1)';
      projectEl3.style.opacity = '1';
      projectEl3.style.transform = 'scale(1)';
      // projectEl1.style.transform = 'translate(470px)';
      // projectEl3.style.transform = 'translate(570px)';
      projectEl4.style.opacity = '1';
      projectEl4.style.transform = 'scale(1)';
      projectEl5.style.opacity = '1';
      projectEl5.style.transform = 'scale(1)';
      projectEl6.style.opacity = '1';
      projectEl6.style.transform = 'scale(1)';
      
    } else if (element === 'FrontEnd') {
      projectEl1.style.opacity = '0';
      projectEl1.style.transform = 'scale(0)';
      projectEl2.style.opacity = '0';
      projectEl2.style.transform = 'scale(0)';
      projectEl5.style.opacity = '0';
      projectEl5.style.transform = 'scale(0)';
      projectEl6.style.opacity = '0';
      projectEl6.style.transform = 'scale(0)';
      // projectEl4.style.transform = 'translate(500px , -450px) scale(1)'
      // projectEl4.style.gridColumn = '1/3';
      // projectEl4.style.transform = 'translateX(500px)'
      // projectEl3.style.transform = 'translateX(150px) scale(1)';
      // projectEl3.style.gridColumn = '1/2';
      projectEl3.style.opacity = '1';
      projectEl3.style.transform = 'translateX(-550px) scale(1)'; 
      projectEl4.style.opacity = '1';
      projectEl4.style.transform = 'translate(425px, -500px) scale(1)'; 
    } else if (element === 'BackEnd') {

      projectEl1.style.opacity = '0';
      projectEl1.style.transform = 'scale(0)';
      projectEl5.style.opacity = '0';
      projectEl5.style.transform = 'scale(0)';
      projectEl3.style.opacity = '0';
      projectEl3.style.transform = 'scale(0)';
      projectEl4.style.opacity = '0';
      projectEl4.style.transform = 'scale(0)';
      
      projectEl2.style.transform ='translateX(-200px)';
      projectEl2.style.opacity = '1'; 
      projectEl6.style.transform = 'translate(-125px, -500px)'; 
      projectEl6.style.opacity = '1';
    } else if (element === 'FullStack') {
      projectEl1.style.opacity = '1';
      projectEl1.style.transform = 'scale(1)';
      projectEl2.style.opacity = '0';
      projectEl2.style.transform = 'scale(0)';
      projectEl3.style.opacity = '0';
      projectEl3.style.transform = 'scale(0)';
      projectEl4.style.opacity = '0';
      projectEl4.style.transform = 'scale(0)';
      projectEl5.style.transform ='translateY(-360px) scale(1)';
      // projectEl5.style.transform = '';
      projectEl5.style.opacity = '1'; 
      projectEl6.style.transform = 'scale(0)';
      projectEl6.style.opacity = '0';
    }
  }
 


  // fadeEl = document.querySelector('.fade');
}

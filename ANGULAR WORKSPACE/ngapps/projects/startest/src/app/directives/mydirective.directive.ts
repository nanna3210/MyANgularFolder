import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appMydirective]',
  standalone: true,
})
export class MydirectiveDirective implements OnInit {
  // , ['$event']
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.replace(/[^0-9]/g, '');
    inputElement.dispatchEvent(new Event('input'));
  }

  ngOnInit(): void {}
}

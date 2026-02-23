import { Directive, ElementRef, HostListener } from '@angular/core';
import { interval } from 'rxjs';

@Directive({
  selector: '[appColordirective]',
})
export class ColordirectiveDirective {
  isRed = false;
  intervalid: any;
  private colors: string[] = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#F33FF5',
    '#57FF33',
    '#FF3357',
    '#33FFF5',
  ];
  private intervalId: any;
  constructor(private ele: ElementRef) {}

  @HostListener('click') onclicking() {
    this.isRed = !this.isRed;
    this.ele.nativeElement.style.color = this.isRed ? 'red' : 'orange';
  }
  @HostListener('mouseover') onmouseovering() {
    let colorIndex = 0;
    this.intervalId = setInterval(() => {
      this.ele.nativeElement.style.backgroundColor = this.colors[colorIndex];
      colorIndex = (colorIndex + 1) % this.colors.length;
    }, 250);
  }

  @HostListener('mouseout') onmouseouting() {
    clearInterval(this.intervalId);
  }
}

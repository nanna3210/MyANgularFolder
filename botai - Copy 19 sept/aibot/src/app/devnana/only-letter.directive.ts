import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLetter]',
})
export class OnlyLetterDirective {
  constructor(private elementRef: ElementRef) {}
  @HostListener('keydown', ['$event'])
  validateLetters(event: KeyboardEvent) {
    console.log(event.target);
  }
  ngOnInit(): void {}
}

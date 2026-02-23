import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]',
})
export class NumberonlyDirective {
  constructor() {}

  @HostListener('keydown', ['$event'])
  onclicking(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;

    const inputValue = inputElement.value + event.key; // Predict the new value
    // console.log(inputValue);

    if (isNaN(Number(inputValue)) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    console.log('hi hello');
  }
}

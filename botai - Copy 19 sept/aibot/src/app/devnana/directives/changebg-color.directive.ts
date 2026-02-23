import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangebgColor]'
})
export class ChangebgColorDirective {

  constructor(private elementref : ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseover') onClick() {
    console.log('element');
  }
  ngOnInit() {




  }

}

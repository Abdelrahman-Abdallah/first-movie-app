import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appSeatClick]'
})

export class SeatclickDirective {
  constructor(private elementRef: ElementRef) {}
  @HostBinding('class') newclassname= '';

  @HostListener('click', ['$event']) fun(click: Event) {
    this.newclassname = 'selected';
  }
}

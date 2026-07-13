import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCapitalizeFirst]'
})
export class CapitalizeFirstDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value.length > 0) {
      (event.target as HTMLInputElement).value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  }





}

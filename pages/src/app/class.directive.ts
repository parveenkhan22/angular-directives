import { element } from 'protractor';
import { Directive,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element:ElementRef) {}

  @Input('appClass') set color(colour:string){
    this.element.nativeElement.style.color=colour;
  }

}

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  selected: boolean = false;

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  @HostListener('click') tagEnter(){
    if (!this.selected){
      this.element.nativeElement.style.background="rgb(159, 179, 183)";
      this.selected = true;
      console.log(this.selected);
    }
    else {
      this.element.nativeElement.style.background="#fff";
      this.selected = false;
    }
  }
}

import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';
import { Note } from '../note';

@Directive({
  selector: '[appColorHashtag]'
})
export class ColorHashtagDirective implements AfterViewInit{

  @Input() note!: Note;

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngAfterViewInit(): void {
    this.changeColor();
  }
  
  changeColor() {
    let text = this.element.nativeElement.innerText;
    console.log(this.note.noteDescription.split(' '));
    this.note.noteDescription.split(' ').forEach(item => {
      if (this.note.tags.includes(item)) {
        text = text.replace(item, '<span style="background:rgb(255, 211, 173)">' + item + '</span>');
        this.element.nativeElement.innerHTML=text;
      }
    })
  }

  @HostListener('keyup', ['$event']) getHashtags() {
    this.changeColor();
  }
}

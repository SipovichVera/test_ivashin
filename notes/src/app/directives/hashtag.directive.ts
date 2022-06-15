import { Directive, 
         OnChanges, 
         SimpleChanges, 
         HostListener, 
         Output,
         EventEmitter 
} from '@angular/core';

@Directive({
  selector: '[hashtag]'
})
export class HashtagDirective implements OnChanges{

  @Output() hashtags = new EventEmitter<any>();
  hashtagArray: string[] = [];
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(changes['input']){
      console.log(changes);
    }
  }

  @HostListener('blur', ['$event']) getHashtags() {
    this.hashtags.emit(this.hashtagArray);
  }

  @HostListener('ngModelChange', ['$event']) onChange(value: any) {
    let reg = /\B(#[a-z0-9]+)(\s|$)/ig;
    this.hashtagArray = value.match(reg);
  }

}

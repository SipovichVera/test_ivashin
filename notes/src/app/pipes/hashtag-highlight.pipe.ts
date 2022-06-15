import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashtagHighlight'
})
export class HashtagHighlightPipe implements PipeTransform {

  transform(value: string, tags?: string[]): string {
    const newNote = value.split(' ').map(item => {
      if (tags?.includes(item)) {
        return item.replace(item, '<span class="hashtag-in-note">' + item + '</span>');
      }
      return item;
    })
    console.log({
      value: value, note: newNote
    });
    
    return newNote.join(' ');
  }

}

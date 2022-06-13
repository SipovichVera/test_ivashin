import { Injectable } from '@angular/core';
import { Note } from '../note';
import allNotes from '../notes.json';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  allNotes: Note[] = allNotes;
  private allTags: Set<string> = new Set(allNotes.map(item => item.tags).flat());

  constructor() { }

  get tags(): Set<string> {
    return this.allTags;
  }


}

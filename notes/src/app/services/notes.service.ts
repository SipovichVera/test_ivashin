import { Injectable } from '@angular/core';
import { Note } from '../note';
import allNotes from '../notes.json';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  allNotes: Note[] = allNotes;

  constructor() { }
}

import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note = {id: 0, noteDescription: "", tags:[], active: true};
  editable: boolean = false;
  moreInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveNote(noteDescription: string){
    this.note.noteDescription = noteDescription; 
  }

  deleteNote() {
    this.note.active = false;
  }

  blockButtonMore() {
    this.moreInfo = false;
  }
  blockButtonEdit() {
    this.editable = false;
  }
}

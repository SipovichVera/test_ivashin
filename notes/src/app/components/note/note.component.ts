import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Note } from '../../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note = {id: 0, noteDescription: "", tags:[], active: true};
  @Output() tags = new EventEmitter<any>();
  editable: boolean = false;
  moreInfo: boolean = false;
  newTags: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  saveNote(noteDescription: string){
    this.note.noteDescription = noteDescription;
    this.note.tags = [...new Set([...this.note.tags, ...this.newTags])];
    this.tags.emit(this.newTags);
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

  inizTags(hashtags: string[]):void {
    this.newTags = [...new Set(hashtags)];
  }
}

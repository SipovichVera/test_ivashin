import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  selectedTags: string[] = [];
  tags:string[] = [];
  dropdownSettings:IDropdownSettings={};
  @Output() close = new EventEmitter<any>();
  @Output() addNote = new EventEmitter<any>();
  @Output() hashtags = new EventEmitter<any>();

  constructor(private noteService: NotesService) { 
  }

  ngOnInit(): void {
    this.tags = Array.from(this.noteService.tags);
    console.log(this.tags);
    this.dropdownSettings = {
      textField: '',
    };
  }
  
  addToSelectTags(newTags: string[]) {
    this.tags = [...this.tags, ...newTags];
    this.selectedTags = [...new Set(newTags)];
  }

  // addHashtags(hashtags: string[]):void {
  //   this.hashtags.emit(hashtags);
  // }

  addNewNote(note: string):void {
    this.addNote.emit({note: note, tags: this.selectedTags});
  } 

  get allTags():string[] {
    return Array.from(this.tags);
  }
}

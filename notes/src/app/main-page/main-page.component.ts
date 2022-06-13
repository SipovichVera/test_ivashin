import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  allNotes: Note[] = [];
  selectedTags: string[] = [];
  modal:boolean = false;

  constructor(private notesService: NotesService) { }
  
  ngOnInit(): void {
    this.allNotes = this.notesService.allNotes;
  }

  get notes(): Note[] {
    if (this.selectedTags.length === 0) {
      return this.allNotes;
    }
    return this.allNotes.filter(note => {
      if (this.selectedTags.filter(tag => note.tags.includes(tag)).length > 0) {
        return true;
      }
      return false;
    })
  }

  addSelectedTag(tag: string):void {
    this.selectedTags.push(tag);
  }

  addRemoveSelectedTag(tag: string):void {
    if (this.selectedTags.includes(tag)) {
      let index = this.selectedTags.indexOf(tag);
      if (index !== -1) {
        this.selectedTags.splice(index, 1);
      }
    }
    else {
      this.selectedTags.push(tag);
    }
  }

  addNewNote(newNote: string):void {
    this.allNotes.push({id:6, noteDescription: newNote, tags:[], active: true});
  }
}

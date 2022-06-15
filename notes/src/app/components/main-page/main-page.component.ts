import { Component, OnInit } from '@angular/core';
import { Note } from '../../note';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  allNotes: Note[] = [];
  allTags: Set<string> = new Set;
  selectedTags: string[] = [];
  modalNote:boolean = false;
  modalTag:boolean = false;

  constructor(private notesService: NotesService) { }
  
  ngOnInit(): void {
    this.allNotes = this.notesService.allNotes;
    this.allTags = this.notesService.tags;
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

  addNewNote(newNote: {note: string, tags: string[]}):void {
    this.notesService.addNewNote(newNote);
    this.addHashtags(newNote.tags);
  }

  addNewTag(newTag: string):void {
    this.notesService.addNewTag(newTag);
  }

  addHashtags(hashtags: string[] | any):void {
    this.notesService.addNewHashtags(hashtags);
  }

}

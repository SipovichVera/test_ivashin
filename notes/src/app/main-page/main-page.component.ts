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
  modal:boolean = false;

  constructor(private notes: NotesService) { }
  
  ngOnInit(): void {
    this.allNotes = this.notes.allNotes;
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  @Output() close = new EventEmitter<any>();
  @Output() addNote = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}

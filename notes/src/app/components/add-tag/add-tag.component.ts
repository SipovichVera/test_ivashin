import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {
  form: any = {
    newTag: null, 
  }
  @Output() close = new EventEmitter<any>();
  @Output() addTag = new EventEmitter<string>();
  selectedTags: string[] = [];
  tags:string[] = [];

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.tags = Array.from(this.noteService.tags);
  }

  removeTags():void {
    this.selectedTags.forEach(item => this.noteService.removeTag(item));
  }

}

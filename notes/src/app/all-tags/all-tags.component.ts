import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-all-tags',
  templateUrl: './all-tags.component.html',
  styleUrls: ['./all-tags.component.scss']
})
export class AllTagsComponent implements OnInit {

  allTags: Set<string> = new Set;
  selectedTag: boolean = false;
  @Output() addRemoveSelectedTag = new EventEmitter<string>();
  

  constructor(private tags: NotesService) { }

  ngOnInit(): void {
    this.allTags = this.tags.tags;
  }

  selectTag(tag: string): void{
    this.addRemoveSelectedTag.emit(tag);
  }
}

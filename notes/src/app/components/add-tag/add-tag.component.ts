import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {
  @Output() close = new EventEmitter<any>();
  @Output() addTag = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable} from '@angular/core';
import { Note } from '../note';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import allNotes from '../../assets/api/notes.json';

@Injectable({
  providedIn: 'root'
})
export class NotesService{

  allNotes: Note[] = allNotes;
  note: Note[] = [];
  private allTags: Set<string> = new Set();
  private jsonURL = './assets/api/notes.json';

  constructor(private http: HttpClient) {
    this.allTags = new Set(allNotes.map(item => item.tags).flat());
    this.http.get<any>(this.jsonURL).subscribe((data)=> {
      this.note = data;
    })
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

  get tags(): Set<string> {
    return this.allTags;
  }

  get notes():Note[] {
    return this.note;
  }

  addNewNote(newNote: {note: string, tags: string[]}):void {
    this.allNotes.push({id:6, noteDescription: newNote.note, tags:newNote.tags, active: true});
  }

  addNewTag(newTag: string):void {
    this.allTags.add(newTag);
  }

  addNewHashtags(hashtags: string[]):void {
    hashtags.map(item => this.allTags.add(item));
  }
}

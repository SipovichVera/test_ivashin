import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NoteComponent } from './components/note/note.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { AllTagsComponent } from './components/all-tags/all-tags.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ColorDirective } from './directives/color.directive';
import { AddTagComponent } from './components/add-tag/add-tag.component';
import { HttpClientModule } from '@angular/common/http';
import { HashtagDirective } from './directives/hashtag.directive';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NoteComponent,
    AddNoteComponent,
    AllTagsComponent,
    ColorDirective,
    AddTagComponent,
    HashtagDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

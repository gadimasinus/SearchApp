import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagesearchModule } from "app/imagesearch/imagesearch.module";
import { TextsearchModule } from "app/textsearch/textsearch.module";

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    ImagesearchModule,
    TextsearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ImagesearchModule } from "app/imagesearch/imagesearch.module";
import { TextsearchModule } from "app/textsearch/textsearch.module";
import { SearchService } from "app/shared/search.service";
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ImagesearchModule,
    TextsearchModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

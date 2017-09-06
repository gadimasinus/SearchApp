import { Component } from '@angular/core';
import { SearchService } from "app/shared/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  searchKeyword : string = 'brian lara';
  title = 'Search';

   constructor(private searchService : SearchService) {

   }

   setSearch() {
     console.log("in set search ");
    if(this.searchKeyword.length == 0){
      alert("search words are missing");
      return;
    }
    //notify all the interested component of search string
    this.searchService.emitSearchEvent(this.searchKeyword);

    //console.log("search words are " + this.searchKeyword);
    
  }
}

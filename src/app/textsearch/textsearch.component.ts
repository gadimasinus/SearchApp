import { Component, OnInit } from '@angular/core';
import { SearchService } from "app/shared/search.service";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-textsearch',
  templateUrl: './textsearch.component.html',
  styleUrls: ['./textsearch.component.css']
})
export class TextsearchComponent implements OnInit{

  subscription : Subscription;
  constructor(private searchService : SearchService) { 

  }

  ngOnInit() {
    this.subscription = this.searchService.searchKeywordObserverable.subscribe(data=>this.performSearch(data));
  }

  ngOnDestroy(){
    console.log('unsubscribing from text search subscription');
    this.subscription.unsubscribe();
    
  }
  
  performSearch(keyword : string) {
     /*
      console.log('in text search for keyword ' + keyword);
      this.searchService.performTextSearch(keyword).subscribe(data=>this.handleSearchResult(data),
        error => this.handleError(error));*/
  }

  handleSearchResult(data :any){
     console.log("incoming data in text search result is " + JSON.stringify(data));
     
  }

  handleError(error : any){
    console.log("error getting text serach results" + error);
    
  }
}

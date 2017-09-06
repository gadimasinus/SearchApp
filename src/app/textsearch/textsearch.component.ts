import { Component, OnInit } from '@angular/core';
import { SearchService } from "app/shared/search.service";
import { Subscription } from "rxjs/Rx";
import { TextSearchResult } from './textsearchresult.model';

@Component({
  selector: 'app-textsearch',
  templateUrl: './textsearch.component.html',
  styleUrls: ['./textsearch.component.css']
})
export class TextsearchComponent implements OnInit{

  subscription : Subscription;
  searchResults = [];
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
    
      if(keyword==null || keyword.length ==0)
      {
        return;
      }
      console.log('in text search for keyword ' + keyword);
      this.searchService.performTextSearch(keyword).subscribe(data=>this.handleSearchResult(data),
        error => this.handleError(error));
  }

  handleSearchResult(data : any){
    this.searchResults.length = 0;
    var result = <TextSearchResult>data.json();
      result.items.forEach(item => {
        this.searchResults.push(item);
    });
    console.log("no of incoming data in image search result is " + result);
     
  }
  handleError(error : any){
    console.log("error getting text serach results" + error);
    
  }
}

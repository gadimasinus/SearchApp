import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from "app/shared/search.service";
import {Subscription} from 'rxjs';
import {ImageSearchResult} from './imagesearchresult.model';

@Component({
  selector: 'app-imagesearch',
  templateUrl: './imagesearch.component.html',
  styleUrls: ['./imagesearch.component.css']
})
export class ImagesearchComponent implements OnInit {

  @Input() searchWord : string = "Default";
  subscription : Subscription;

  @Input() imageLinks = [];
  constructor(private searchService : SearchService) { }

  ngOnInit() {
    this.subscription = this.searchService.searchKeywordObserverable.subscribe(data=>this.performSearch(data));
  }

 ngOnDestroy(){
    console.log('unsubscribing from text search subscription');
    this.subscription.unsubscribe();
    
  }
  performSearch(keyword :string){
    console.log('in image search for keyword ' + keyword);
    this.searchWord = keyword;
    this.searchService.performImageSearch(keyword).subscribe(data=>this.handleSearchResult(data),
    error => this.handleError(error));
  }

  handleSearchResult(data : any){
   
    var result = <ImageSearchResult>data.json();
    result.items.forEach(thumbLink => {
        this.imageLinks.push(thumbLink);
    });
     console.log("incoming data in image search result is " + this.imageLinks.length);
     
  }

  handleError(error : any){
    console.log("error getting image serach results" + error);
    
  }

}





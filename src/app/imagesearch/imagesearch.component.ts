import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { SearchService } from "app/shared/search.service";
import {Subscription} from 'rxjs';
import {ImageSearchResult} from './imagesearchresult.model';

@Component({
  selector: 'app-imagesearch',
  templateUrl: './imagesearch.component.html',
  styleUrls: ['./imagesearch.component.css']
})
export class ImagesearchComponent implements OnInit {

  @Input() searchWord : string;
  subscription : Subscription;
  startIndex = 1;
  
  @Output() nextDone : EventEmitter<string> = new EventEmitter<string>();

  @Input() imageLinks = [];
  constructor(private searchService : SearchService) { }

  ngOnInit() {
  //  this.subscription = this.searchService.searchKeywordObserverable.subscribe(data=>this.performSearch(data));
    console.log("search word in image search is " + this.searchWord);
    
  }

 ngOnDestroy(){
    console.log('unsubscribing from text search subscription');
    this.subscription.unsubscribe();
    
  }
  performSearch(keyword :string){
    console.log('in image search for keyword ' + keyword);
    this.searchWord = keyword;
    this.searchService.performImageSearch(keyword,this.startIndex).subscribe(data=>this.handleSearchResult(data),
    error => this.handleError(error));
  }

  handleSearchResult(data : any){
    this.imageLinks.length =0;
    var result = <ImageSearchResult>data.json();
    result.items.forEach(item => {
        this.imageLinks.push(item.image.thumbnailLink);
    });
     console.log("no of incoming data in image search result is " + this.imageLinks.length);
     
  }

  handleError(error : any){
    console.log("error getting image serach results" + error);
    
  }

  getNextSet(){
    this.startIndex +=10;
    console.log("start index for image search is " + this.startIndex);
    this.performSearch(this.searchWord);
    this.nextDone.emit('Next clicked');

  }

}





import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from "app/shared/search.service";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-imagesearch',
  templateUrl: './imagesearch.component.html',
  styleUrls: ['./imagesearch.component.css']
})
export class ImagesearchComponent implements OnInit {

  @Input() searchWord : string = "Default";
  subscribtion : Subscription;
  constructor(private searchService : SearchService) { }

  ngOnInit() {
    this.subscribtion = this.searchService.searchKeywordObserverable.subscribe(data=>this.performSearch(data));
  }

  performSearch(keyword :string){
    console.log('in image search for keyword ' + keyword);
    this.searchWord = keyword;
  }

}

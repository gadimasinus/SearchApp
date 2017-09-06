import {Injectable} from '@angular/core';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { EventEmitter } from "events";
import {Http,Response} from '@angular/http';


@Injectable()
export class SearchService {

    private textSearchUrl = "https://www.google.com/search?q="
    searchKeywordSource = new BehaviorSubject<string>('brian lara');
    public searchKeywordObserverable = this.searchKeywordSource.asObservable();

    apiKey = 'AIzaSyAwcCNQwcJOm_gF1HgsCHrxZctgyRNcoHc';
    customSearchEngine = '015105838331945857339:qdpgu0idvzs';
    imageSearchUrl = 'https://www.googleapis.com/customsearch/v1?';

    constructor(private _http : Http ) {

    }
    emitSearchEvent(searchStr : string){
        console.log("notifying search str " + searchStr);
        this.searchKeywordSource.next(searchStr);
    }

    performTextSearch(keyword : string) : Observable<Response> {
         let toSearch = this.imageSearchUrl + 'key=' + this.apiKey + '&cx=' + this.customSearchEngine 
        + '&num=10' + '&q=';
        let searchWords = keyword.split(' ').join('+');

        toSearch += searchWords;

        toSearch += "&alt=json"

        console.log('complete url for image search is ' + toSearch);
        return this._http.get(toSearch).map((response : Response)=>{
            console.log('response is ' + response);
            
            return response;
        });
        
    }

    performImageSearch(keyword : string) : Observable<Response> {
        let toSearch = this.imageSearchUrl + 'key=' + this.apiKey + '&cx=' + this.customSearchEngine 
        + '&searchType=image' + '&num=10' + '&q=';
        let searchWords = keyword.split(' ').join('+');

        toSearch += searchWords;

        toSearch += "&alt=json"

        console.log('complete url for image search is ' + toSearch);
          return this._http.get(toSearch).map((response : Response)=>{
             

            console.log('response is ' + response);
            
            return response;
        });
        
    }

}



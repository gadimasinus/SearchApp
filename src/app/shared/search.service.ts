import {Injectable} from '@angular/core';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { EventEmitter } from "events";
import {Http,Response} from '@angular/http';

@Injectable()
export class SearchService {

    private textSearchUrl = "https://www.google.com/search?q="
    searchKeywordSource = new BehaviorSubject<string>('dummy');
    public searchKeywordObserverable = this.searchKeywordSource.asObservable();

    constructor(private _http : Http ) {

    }
    emitSearchEvent(searchStr : string){
        console.log("notifying search str " + searchStr);
        this.searchKeywordSource.next(searchStr);
    }

    performTextSearch(keyword : string) : Observable<Response> {
        let searchUrl = this.textSearchUrl + keyword.split(' ').join('+');
        console.log('complete text search url is ' + searchUrl);
        return this._http.get(searchUrl).map((response : Response)=>{
            console.log('response is ' + response);
            
            return response;
        });
        
    }

}

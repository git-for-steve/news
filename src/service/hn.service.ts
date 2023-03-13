import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IStoryModel, IStorySearchResponse } from "src/app/story";
import {Observable} from "rxjs";

@Injectable()
export class HNService {

private _url: string = "https://hn.algolia.com/api/v1/search?query=";

    constructor(private http: HttpClient) { }

    getStories(searchValue: string): Observable<IStorySearchResponse> {
        return this.http.get<IStorySearchResponse>(this._url + searchValue);
    }
}
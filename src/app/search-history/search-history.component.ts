import { Component } from '@angular/core';
import { IHistoryModel } from '../histroy';
import { IStoryModel } from '../story';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent {

  history: IHistoryModel[]

  constructor() {
    //showing results
    var nakedHistory = sessionStorage.getItem("history");
    if (nakedHistory == null) {
      nakedHistory = "[]";
    }
    this.history = JSON.parse(nakedHistory);
    console.log(this.history);
    
  }
}

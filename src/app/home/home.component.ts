import { Component } from '@angular/core';

import { HNService } from 'src/service/hn.service';
import { IStoryModel } from '../story';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  stories: IStoryModel[]

  constructor(private hnService: HNService) {
    this.stories = []
  }

  public search(searchValue: string) {
    this.hnService.getStories(searchValue)
      .subscribe(response => {
        this.stories = response.hits

        //adding in history
        var history = sessionStorage.getItem("history");
        if (history == null) {
          history = "[]";
        }
        var parsedHistory = JSON.parse(history);
        var historyItem = {
          date: new Date(),
          query: searchValue
        }
        parsedHistory.push(historyItem);
        sessionStorage.setItem("history", JSON.stringify(parsedHistory));
      });
  }
}

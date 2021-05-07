import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  starRange: number[];
  constructor(private api: ApiService) {
    this.starRange = new Array(31).fill(0).map((x, i) => i * 50);
  }
  game = "MINECRAFT_BEDWARS";
  ngOnInit(): void {
  }

  async onSearch(e) {
    e.preventDefault()
    const params = {};
    for (let i = 0; i < ($(e.target)[0].length); i++) {
      params[e.target[i].name] = e.target[i].value
    }
    console.log(await this.api.getPosts(params))
  }

  async createPost() {
    const params = {
      game: "MINECRAFT_SKYWARS",
      gamemode: "DOUBLES",
      lowStar: -1,
      highStar: -1,
      fkdr: 324,
    };
    this.api.createPost(params);
  }

}

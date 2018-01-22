import { Component, OnInit } from '@angular/core';
import {ChampionService} from '../champion.service';
@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {

  constructor(private championService: ChampionService) { }

  ngOnInit() {
    this.championService.getHeroes();
  }

}

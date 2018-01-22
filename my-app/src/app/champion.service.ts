import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChampionService {

  constructor(private http: HttpClient) { }
  url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Skyzlimitz';
  private heroesUrl = 'api/heroes';  // URL to web api
  getHeroes(): any {
    return this.http.get(this.url , { headers: new HttpHeaders().set('X-Riot-Token', 'RGAPI-233dd092-abfe-49f2-b5f9-77357a82d822')})
    .subscribe(data => {
      console.log(data);
    });
  }
}

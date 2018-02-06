import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChampionService {

  constructor(private http: HttpClient) { }
  getHeroes(): any {
    return this.http.get('http://localhost:3000/champion')
    .subscribe(data => {
      console.log(data);
    });
  }
}

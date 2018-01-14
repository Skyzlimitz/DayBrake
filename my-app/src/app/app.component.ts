import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Day Brake';
  apiRoot: string = "http://champion.gg/champion/teemo&api_key=23aa8b827f03cc34d8e9b3764370e950";

  constructor(private http: Http) { }

  ngOnInit(){
  }

  myFunction(){
      let url = `${this.apiRoot}`;
      let search = new URLSearchParams();

      this.http.get(url, {search: search}).subscribe(res => console.log(res.json()));
      //this.http.get(url).subscribe(res => console.log(res.text())); 
  }

}

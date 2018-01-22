import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ChampionComponent } from './champion/champion.component';
import { AppRoutingModule } from './app-routing.module';
import { ChampionService } from './champion.service';
import { AuthInterceptor } from './interceptors/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ChampionService, AuthInterceptor ],
  bootstrap: [AppComponent]
})
export class AppModule { }

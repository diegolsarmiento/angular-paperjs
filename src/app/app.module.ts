import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularPaperjsLibModule } from 'angular-paperjs-lib';
import { BannerComponent } from './banner/banner.component';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    PosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularPaperjsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

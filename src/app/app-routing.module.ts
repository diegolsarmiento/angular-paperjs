import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { BannerComponent } from '../app/banner/banner.component';
import { PosterComponent } from '../app/poster/poster.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'poster', component: PosterComponent },
  { path: '**',   redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

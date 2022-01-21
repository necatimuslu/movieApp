import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

//components
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TvComponent } from './pages/tv/tv.component';
import { CategoryComponent } from './pages/category/category.component';
import { FilmComponent } from './pages/film/film.component';
import { SliderComponent } from './shared/slider/slider.component';
import { ItemBannerComponent } from './components/item-banner/item-banner.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { PrimengModule } from './modules/primeng.module';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'film', component: FilmComponent },
      { path: 'film/genres/:id', component: FilmComponent },
      { path: 'film/:id', component: MovieDetailComponent },
      { path: 'tv', component: TvComponent },
      { path: 'category', component: CategoryComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TvComponent,
    CategoryComponent,
    FilmComponent,
    SliderComponent,
    ItemBannerComponent,
    MovieCardComponent,
    MovieDetailComponent,
    VideoEmbedComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), PrimengModule],
})
export class MovieModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopRatedFilmsComponent } from './top-rated-films/top-rated-films.component';
import { SearchComponent } from './search/search.component';
import { SearchedFilmsComponent } from './searched-films/searched-films.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchedTvSeriesComponent } from './searched-tv-series/searched-tv-series.component';
import { TopRatedTvSeriesComponent } from './top-rated-tv-series/top-rated-tv-series.component';
import { TrendingFilmsComponent } from './trending-films/trending-films.component';
import { TrendingTvSeriesComponent } from './trending-tv-series/trending-tv-series.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'topratedmovies', component: TopRatedFilmsComponent },
  { path: 'topratedtvseries', component: TopRatedTvSeriesComponent },
  { path: 'searchedmovies', component: SearchedFilmsComponent },
  { path: 'searchedtvseries', component: SearchedTvSeriesComponent },
  { path: 'trendingmoviesday', component: TrendingFilmsComponent, data: {time: 'day', timeString: 'Dzisiaj'} },
  { path: 'trendingmoviesweek', component: TrendingFilmsComponent, data: {time: 'week', timeString: 'Ostatni tydzień'} },
  { path: 'trendingtvseriesday', component: TrendingTvSeriesComponent, data: {time: 'day', timeString: 'Dzisiaj'} },
  { path: 'trendingtvseriesweek', component: TrendingTvSeriesComponent, data: {time: 'week', timeString: 'Ostatni tydzień'} },
];

@NgModule({
  declarations: [
    AppComponent,
    TopRatedFilmsComponent,
    SearchComponent,
    SearchedFilmsComponent,
    MainPageComponent,
    SearchedTvSeriesComponent,
    TopRatedTvSeriesComponent,
    TrendingFilmsComponent,
    TrendingTvSeriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, onSameUrlNavigation: 'reload' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

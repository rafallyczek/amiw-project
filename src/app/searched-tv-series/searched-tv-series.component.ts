import { Component, OnInit, HostListener } from '@angular/core';
import { TmdbApiService } from '../tmdb-api.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-searched-tv-series',
  templateUrl: './searched-tv-series.component.html',
  styleUrls: ['./searched-tv-series.component.scss']
})
export class SearchedTvSeriesComponent implements OnInit {

  constructor(private tmdbApiService: TmdbApiService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getSearchedTVSeries();
      }
    });
   }

  private tvShows;
  show: boolean;

  ngOnInit() {
    this.getSearchedTVSeries();
  }

   //Pobierz wyszukane seriale
   public getSearchedTVSeries(){
    this.tmdbApiService.getTVSeriesByQuery(this.tmdbApiService.getQuery()).subscribe((data)=>{
      this.tvShows = data['results']; 
      console.log(this.tvShows); 
      this.noPolishOverview();
    });   
  }

  //Sprawdź czy serial ma polski opis, jeśli nie zastąp go
  public noPolishOverview(){
    for(let i in this.tvShows){
      if(this.tvShows[i]['overview']==""){
        this.tvShows[i]['overview']="Brak opisu serialu w języku polskim.";
      }
    }
  }

  //Przewiń do góry
  public scrollUp() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  //Sprawdzanie pozycji
  @HostListener('window:scroll')
  public checkScroll() {

    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= 300) {
      this.show=true;
    } else {
      this.show=false;
    }

  }

}

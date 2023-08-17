import { Component, OnInit, HostListener } from '@angular/core';
import { TmdbApiService } from '../tmdb-api.service';

@Component({
  selector: 'app-top-rated-tv-series',
  templateUrl: './top-rated-tv-series.component.html',
  styleUrls: ['./top-rated-tv-series.component.scss']
})
export class TopRatedTvSeriesComponent implements OnInit {

  constructor(private tmdbApiService: TmdbApiService) { }

  tvShows;
  show: boolean;

  ngOnInit() {
    this.getTopRatedTVSeries();
  }

  //Pobierz najpopularniejsze seriale
  public getTopRatedTVSeries(){
    this.tmdbApiService.getTopRatedTVSeries().subscribe((data)=>{
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

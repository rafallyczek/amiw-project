import { Component, OnInit, HostListener } from '@angular/core';
import { TmdbApiService } from '../tmdb-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trending-tv-series',
  templateUrl: './trending-tv-series.component.html',
  styleUrls: ['./trending-tv-series.component.scss']
})
export class TrendingTvSeriesComponent implements OnInit {

  constructor(private tmdbApiService: TmdbApiService, private route: ActivatedRoute) { }

  tvShows;
  show: boolean;
  timeString: string;

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.timeString=data.timeString;
      this.getTrendingTVSeries(data.time);
  })
  }

  //Pobierz najpopularniejsze seriale
  public getTrendingTVSeries(time: string){
    this.tmdbApiService.getTrendingTVSeries(time).subscribe((data)=>{
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

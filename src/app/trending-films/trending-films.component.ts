import { Component, OnInit, HostListener } from '@angular/core';
import { TmdbApiService } from '../tmdb-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trending-films',
  templateUrl: './trending-films.component.html',
  styleUrls: ['./trending-films.component.scss']
})
export class TrendingFilmsComponent implements OnInit {

  constructor(private tmdbApiService: TmdbApiService, private route: ActivatedRoute) { }

  films;
  show: boolean;
  timeString: string;

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.timeString=data.timeString;
      this.getTrendingFilms(data.time);
  })
  }

  //Pobierz najpopularniejsze filmy
  public getTrendingFilms(time: string){
    this.tmdbApiService.getTrendingMovies(time).subscribe((data)=>{
      this.films = data['results']; 
      console.log(this.films); 
      this.noPolishOverview();
    });
  }

  //Sprawdź czy film ma polski opis, jeśli nie zastąp go
  public noPolishOverview(){
    for(let i in this.films){
      if(this.films[i]['overview']==""){
        this.films[i]['overview']="Brak opisu filmu w języku polskim.";
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

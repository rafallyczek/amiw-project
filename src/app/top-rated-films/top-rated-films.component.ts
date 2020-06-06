import { Component, OnInit, HostListener } from '@angular/core';
import { TmdbApiService } from '../tmdb-api.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './top-rated-films.component.html',
  styleUrls: ['./top-rated-films.component.scss']
})
export class TopRatedFilmsComponent implements OnInit {

  constructor(private tmdbApiService: TmdbApiService) { }

  private films;
  show: boolean;

  ngOnInit() {
    this.getTopRatedFilms();
  }

  //Pobierz najpopularniejsze filmy
  public getTopRatedFilms(){
    this.tmdbApiService.getTopRatedMovies().subscribe((data)=>{
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
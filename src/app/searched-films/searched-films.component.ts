import { Component, OnInit, HostListener } from '@angular/core';
import { TmdbApiService } from '../tmdb-api.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-searched-films',
  templateUrl: './searched-films.component.html',
  styleUrls: ['./searched-films.component.scss']
})
export class SearchedFilmsComponent implements OnInit {

  constructor(private tmdbApiService: TmdbApiService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getSearchedFilms();
      }
    });
  }

  private films;
  show: boolean;

  ngOnInit() {
    this.getSearchedFilms();
  }

  //Pobierz wyszukane filmy
  public getSearchedFilms(){
    this.tmdbApiService.getFilmsByQuery(this.tmdbApiService.getQuery()).subscribe((data)=>{
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

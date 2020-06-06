import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from '../tmdb-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private tmdbApiService: TmdbApiService, private router: Router) { }

  private searchInput: string = "";
  private select: number = 0;

  ngOnInit() {}

  //Prześlij parametr wyszukiwania do serwisu tmdb i przekieruj na odpowiedni adres
  public submit(){
    this.tmdbApiService.setQuery(this.searchInput);
    if(this.select==0){
      this.router.navigate(['/searchedmovies']);
    }else if(this.select==1){
      this.router.navigate(['/searchedtvseries']);
    }   
  } 

  //Enter submit
  public onKeyPress(event){
    if(event.keyCode==13){
      this.submit();
    }
  }

  //Settery
  public setInputValue(event){
    this.searchInput = event.target.value;
    console.log(this.searchInput);
  }

  public setSelectParameter(event){
    this.select = event.target.value;
    console.log(this.select);
  }

}

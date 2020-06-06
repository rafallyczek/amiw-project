import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  constructor(private httpClient: HttpClient) { }

  private api_key: string = "Your API key goes here";
  private query: string = "";

  //Pobierz najpopularniejsze filmy
  public getTopRatedMovies(){
    return this.httpClient.get("https://api.themoviedb.org/3/movie/top_rated?api_key="+this.api_key+"&language=pl-PL");
  }

  //Pobierz najpopularniejsze seriale
  public getTopRatedTVSeries(){
    return this.httpClient.get("https://api.themoviedb.org/3/tv/top_rated?api_key="+this.api_key+"&language=pl-PL");
  }

  //Pobierz wyszukiwane filmy
  public getFilmsByQuery(query: string){
    return this.httpClient.get("https://api.themoviedb.org/3/search/movie?api_key="+this.api_key+"&language=pl-PL&query="+query+"&include_adult=false");
  }

  //Pobierz wyszukiwane seriale
  public getTVSeriesByQuery(query: string){
    return this.httpClient.get("https://api.themoviedb.org/3/search/tv?api_key="+this.api_key+"&language=pl-PL&query="+query);
  }

  //Pobierz najpopularniejsze filmy
  public getTrendingMovies(time: string){
    return this.httpClient.get("https://api.themoviedb.org/3/trending/movie/"+time+"?api_key="+this.api_key+"&language=pl-PL");
  }

  //Pobierz najpopularniejsze seriale
  public getTrendingTVSeries(time: string){
    return this.httpClient.get("https://api.themoviedb.org/3/trending/tv/"+time+"?api_key="+this.api_key+"&language=pl-PL");
  }

  //Gettery i Settery
  public setQuery(query){
    this.query=query;
  }

  public getQuery(){
    return this.query;
  }

}

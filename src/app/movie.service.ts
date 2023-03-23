import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 
  constructor(private http: HttpClient) { }
  
  public registerMovie(movie: Movie){

    return this.http.post("http://localhost:8081/",movie,{responseType:'text' as 'json'});
  }

  public getMovies(){
    return this.http.get("http://localhost:8081/movies");
  }

  public getMovieByTitle(title:string){
    return this.http.get("http://localhost:8081/"+title);
  }

  public deleteMovie(title:string){
    return this.http.delete("http://localhost:8081/"+title);
  }
}

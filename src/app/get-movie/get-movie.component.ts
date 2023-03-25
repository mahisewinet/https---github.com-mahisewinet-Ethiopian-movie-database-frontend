import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MovieList } from '../moviesList';

@Component({
  selector: 'app-get-movie',
  templateUrl: './get-movie.component.html',
  styleUrls: ['./get-movie.component.css']
})
export class GetMovieComponent implements OnInit{
   
  public movieList: MovieList[];
  
  constructor(private service: MovieService,  private router: Router){
  }

  ngOnInit(){
    let resp=this.service.getMovies();
    resp.subscribe((data)=> 
    { console.log(data);
      this.movieList=data;});
  }

  // public delete(title:string){
  //   let resp= this.service.deleteMovie(title);
  //   resp.subscribe(data => 
  //     { console.log(data);
  //       this.movieList = data;});
  //  }

  movieDetails(title:string){
    this.router.navigate(['/movie-details/'+title]);
  }
}

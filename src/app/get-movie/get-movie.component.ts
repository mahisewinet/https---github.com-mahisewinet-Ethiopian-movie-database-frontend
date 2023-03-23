import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-get-movie',
  templateUrl: './get-movie.component.html',
  styleUrls: ['./get-movie.component.css']
})
export class GetMovieComponent {

  movies: any;
  
  constructor(private service: MovieService,  private router: Router){
  }

  ngOnInit(){
    let resp=this.service.getMovies();
    resp.subscribe((data)=>this.movies=data);
  }

  public delete(title:string){
    let resp= this.service.deleteMovie(title);
    resp.subscribe((data)=>this.movies=data);
   }

  movieDetails(title:string){
    this.router.navigate(['/movie-details/'+title]);
  }
}

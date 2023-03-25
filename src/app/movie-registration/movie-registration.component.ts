import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-registration',
  templateUrl: './movie-registration.component.html',
  styleUrls: ['./movie-registration.component.css']
})
export class MovieRegistrationComponent {

  movie : Movie= new Movie("","","","","","","","","",[],"","");
  actorName: any;
  message: any;

  constructor(
    private service: MovieService
  ){}

  public registerNow(){
    let resp= this.service.registerMovie(this.movie);
    resp.subscribe( (data: any) => this.movie=data);
    this.movie= new Movie("","","","","","","","","",[],"","");
  }

  addActor(){
    this.movie.actors.push(this.actorName);
  }

  remove(){
    this.actorName='';
  };
}


import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  title: any;
  movie: any;

  constructor(private route: ActivatedRoute,private router: Router,
    private movieService: MovieService) { }

  ngOnInit() {
    this.movie = new Movie("","","","","","","","","",[""],"","");;

    this.title = this.route.snapshot.params['title'];
    
    this.movieService.getMovieByTitle(this.title)
      .subscribe(data => {
        console.log(data)
        this.movie = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['get-movies']);
  }
}

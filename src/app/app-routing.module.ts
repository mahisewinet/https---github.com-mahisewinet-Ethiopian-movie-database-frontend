import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetMovieComponent } from './get-movie/get-movie.component';
import { Movie } from './movie';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieRegistrationComponent } from './movie-registration/movie-registration.component';


const routes: Routes = [
  {path:"",redirectTo:"movies",pathMatch:"full"},
  {path:"movies",component:MovieRegistrationComponent},
  {path:"get-movies",component:GetMovieComponent},
  {path:"movie-details",component:MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

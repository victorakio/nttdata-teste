import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public movie: Movie;
  displayElement = false;

  constructor(private service: MovieService) {}

  ngOnInit(): void {}

  getMovie() {
    const movieTitle = (document.getElementById('title') as HTMLInputElement)
      .value;

    this.service.searchMovie(movieTitle).then((response) => {
      console.log(response);
      this.movie = response;
      localStorage.setItem('OMDBSearch Movie', JSON.stringify(this.movie));
    });

    this.displayElement = true;
  }

  resetMovie() {
    (document.getElementById('title') as HTMLInputElement).value = '';
    localStorage.removeItem('OMDBSearch Movie');

    this.displayElement = false;
  }
}

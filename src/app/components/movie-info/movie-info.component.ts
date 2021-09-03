import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  @Input() movie: Movie;

  favorites: Movie[] = JSON.parse(
    localStorage.getItem('OMDBSearch Favorites') || '[]'
  );

  ngOnInit() {}

  setFavorite() {
    this.favorites = [...this.favorites, this.movie];
    localStorage.setItem(
      'OMDBSearch Favorites',
      JSON.stringify(this.favorites)
    );
  }
}

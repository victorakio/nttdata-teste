import { Component, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public favorites: Movie[] = JSON.parse(
    localStorage.getItem('OMDBSearch Favorites') || ''
  );
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss'],
})
export class FavoriteCardComponent implements OnInit {
  @Input() favorite: Movie;
  constructor() {}

  ngOnInit(): void {
    console.log(this.favorite);
  }
  setFavorite() {}
}

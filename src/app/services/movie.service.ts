import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../types/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey: string;

  private readonly API = environment.API;

  constructor(private http: HttpClient) {
    this.apiKey = '&apikey=f4751881';
  }

  searchMovie(title: string) {
    return this.http
      .get<Movie>(`${this.API}?t=${title}&plot=full${this.apiKey}`)
      .toPromise();
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FavoriteCardComponent } from './components/favorite-card/favorite-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MovieInfoComponent,
    NotFoundComponent,
    FavoriteCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

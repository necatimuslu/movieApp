import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { GenresDto } from '../models/genre';
import {
  Movie,
  MovieCredits,
  MovieDto,
  MovieImages,
  MovieVideoDto,
} from '../models/movie';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(type: string = 'popular', count: number = 12): Observable<Movie[]> {
    return this.http
      .get<MovieDto>(
        `${environment.apiUrl}movie/${type}?api_key=${environment.apiKey}&language=tr-TR&page=1`
      )
      .pipe(map((res) => res.results.slice(0, count)));
  }
  searchMovies(page: number, searchValue?: string): Observable<Movie[]> {
    const uri = searchValue ? 'search/movie' : 'movie/popular';
    return this.http
      .get<MovieDto>(
        `${environment.apiUrl}${uri}?api_key=${environment.apiKey}&query=${searchValue}&language=tr-TR&page=${page}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  getMoviesGenreId(id: string, page: number) {
    return this.http.get<MovieDto>(
      `${environment.apiUrl}discover/movie?with_genres=${id}&api_key=${environment.apiKey}&language=tr-TR&page=${page}`
    );
  }
  getMovieVideo(id: string) {
    return this.http
      .get<MovieVideoDto>(
        `${environment.apiUrl}movie/${id}/videos?api_key=${environment.apiKey}&language=tr-TR`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
  getMovieImages(id: string) {
    return this.http.get<MovieImages>(
      `${environment.apiUrl}movie/${id}/images?api_key=${environment.apiKey}&language=tr-TR`
    );
  }
  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(
      `${environment.apiUrl}movie/${id}/credits?api_key=${environment.apiKey}&language=en-US`
    );
  }
  getMoviesGenres() {
    return this.http.get<GenresDto>(
      `${environment.apiUrl}genre/movie/list?api_key=${environment.apiKey}&language=tr-TR`
    );
  }
  getTv(count: number = 12): Observable<Movie[]> {
    return this.http
      .get<MovieDto>(
        `${environment.apiUrl}tv/popular?api_key=${environment.apiKey}&language=tr-TR&page=1`
      )
      .pipe(map((res) => res.results.slice(0, 12)));
  }
  getMovieById(id: string): Observable<Movie> {
    return this.http.get(
      `${environment.apiUrl}movie/${id}?api_key=${environment.apiKey}&language=tr-TR`
    );
  }
}

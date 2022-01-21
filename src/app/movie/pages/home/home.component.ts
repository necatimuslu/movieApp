import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  populerMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  nowPlaying: Movie[] = [];
  endSub$: Subject<any> = new Subject();
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this._getPopulerMovie();
    this._getUpcomingMovies();
    this._getTopRatedMovies();
    this._getNowPlayingMovies();
  }
  private _getPopulerMovie(): void {
    this.movieService
      .getMovies()
      .pipe(takeUntil(this.endSub$))
      .subscribe((result) => {
        this.populerMovies = result;
      });
  }
  private _getUpcomingMovies(): void {
    this.movieService
      .getMovies('upcoming')
      .pipe(takeUntil(this.endSub$))
      .subscribe((data) => {
        this.upcomingMovies = data;
      });
  }
  private _getTopRatedMovies(): void {
    this.movieService
      .getMovies('top_rated')
      .pipe(takeUntil(this.endSub$))
      .subscribe((data) => {
        this.topRatedMovies = data;
      });
  }

  private _getNowPlayingMovies(): void {
    this.movieService
      .getMovies('now_playing')
      .pipe(takeUntil(this.endSub$))
      .subscribe((data) => {
        this.nowPlaying = data;
      });
  }
}

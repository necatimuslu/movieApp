import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Cast,
  Movie,
  MovieCredits,
  MovieImages,
  MovieVideo,
} from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

import { IMAGES_SIZES } from '../../constants/imageSize';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movieId!: string | any;
  movie?: Movie;
  movieVideo?: MovieVideo[] = [];
  movieImage: MovieImages | null = null;
  moviesCredits: MovieCredits | null = null;
  imagesSizes = IMAGES_SIZES;
  endSub$: Subject<any> = new Subject();
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
    this._getMovieById(this.movieId);
    this._getMovieVideos(this.movieId);
    this._getMovieImages(this.movieId);
    this._getMovieCredits(this.movieId);
  }

  ngOnDestroy(): void {
    this.endSub$.next();
    this.endSub$.complete();
  }

  private _getMovieById(id: string) {
    this.moviesService
      .getMovieById(id)
      .pipe(takeUntil(this.endSub$))
      .subscribe((data) => {
        this.movie = data;
      });
  }

  private _getMovieVideos(id: string) {
    this.moviesService
      .getMovieVideo(id)
      .pipe(takeUntil(this.endSub$))
      .subscribe((data) => {
        this.movieVideo = data;
      });
  }

  private _getMovieImages(id: string) {
    this.moviesService
      .getMovieImages(id)
      .pipe(takeUntil(this.endSub$))
      .subscribe((data) => {
        this.movieImage = data;
      });
  }

  private _getMovieCredits(id: string) {
    this.moviesService
      .getMovieCredits(id)
      .pipe(takeUntil(this.endSub$))
      .subscribe((data) => {
        this.moviesCredits = data;
        console.log(this.moviesCredits);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  movies: Movie[] = [];
  totalRecords = 1000;
  endSub$: Subject<any> = new Subject();
  genreId!: string;
  page: number = 1;
  movieSearch: string = '';
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ id }) => {
      if (id) {
        this.genreId = id;
        this._getMoviesByGenre(id, this.page);
      } else {
        this._getMovies(1);
      }
    });
  }

  private _getMovies(page: number, searchValue?: string): void {
    this.moviesService
      .searchMovies(page, searchValue)
      .pipe(takeUntil(this.endSub$))
      .subscribe((data) => {
        this.movies = data;
      });
  }
  private _getMoviesByGenre(id: string, page: number) {
    this.moviesService.getMoviesGenreId(id, page).subscribe((data) => {
      this.movies = data.results;
      console.log(data);
    });
  }
  paginate(event: any) {
    if (this.genreId) {
      this._getMoviesByGenre(this.genreId, event.page + 1);
    } else {
      if (this.moviesService) {
        this._getMovies(event.page + 1, this.movieSearch);
      } else {
        this._getMovies(event.page + 1);
      }
    }
  }

  searchMovie() {
    if (this.movieSearch) {
      this._getMovies(1, this.movieSearch);
    }
    console.log(this.movieSearch);
  }
}

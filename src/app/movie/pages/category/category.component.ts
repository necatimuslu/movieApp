import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Genre } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  genres: Genre[] = [];
  endSub$: Subject<any> = new Subject();
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this._getMoviesGenres();
  }

  private _getMoviesGenres() {
    this.moviesService
      .getMoviesGenres()
      .pipe(takeUntil(this.endSub$))
      .subscribe((data) => {
        this.genres = data.genres;
      });
  }
}

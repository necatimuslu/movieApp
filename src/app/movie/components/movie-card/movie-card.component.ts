import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/imageSize';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() item!: Movie;
  imagesSizes = IMAGES_SIZES;
  constructor() {}

  ngOnInit(): void {}
}

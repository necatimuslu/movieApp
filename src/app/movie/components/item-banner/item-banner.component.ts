import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.scss'],
})
export class ItemBannerComponent implements OnInit {
  @Input() upcoming: Movie[] = [];
  @Input() toprated: Movie[] = [];
  @Input() playing: Movie[] = [];

  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}

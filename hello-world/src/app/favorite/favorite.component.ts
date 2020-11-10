import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isFavorite = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleFavorite(): void {
    console.log('onToggle', this.isFavorite);
    this.isFavorite = !this.isFavorite;
  }

}

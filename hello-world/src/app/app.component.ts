import { FavoriteChangedArgs } from './favorite/favorite.component';
import { Component, OnInit } from '@angular/core';

interface Tweet {
  isLiked: boolean;
  likesCount: number;
  body: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  isOpen = false;

  testIf = [];

  post = {
    title: 'Title',
    isFavorite: true
  };

  nbTweeter = 3;
  initLikeCount = 10;
  likeClients = Array(this.nbTweeter);
  tweet: Tweet = {
    body: 'Here is the body of a tweet...',
    likesCount: this.initLikeCount,
    isLiked: false,
  };

  totalLikes = 0;
  ngOnInit(): void {
    this.totalLikes = this.initLikeCount * this.nbTweeter;
  }

  onFavoriteChanged(eventArgs: FavoriteChangedArgs): void {
    console.log('Favorite changed', eventArgs);
  }

  onLikesCount(event: any): void {
    console.log('onLikesCount', event);
    this.tweet.likesCount = event;
  }
  onChanged(change: boolean): void {
    this.totalLikes += change ? 1 : -1;
    console.log('onChanged', );
  }

  openModal(): void {
    console.log('openModal S0', this.isOpen);
    this.isOpen = true;
    console.log('openModal S1', this.isOpen);
  }
}

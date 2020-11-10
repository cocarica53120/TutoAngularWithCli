import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {

  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  @Output('hasChanged') hasChanged = new EventEmitter();

  onClick(): void {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
    this.hasChanged.emit(this.isActive);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {

  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;
  @Output('hasChanged') hasChanged = new EventEmitter();

  onClick(): void {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
    this.hasChanged.emit(this.isActive);
  }
}

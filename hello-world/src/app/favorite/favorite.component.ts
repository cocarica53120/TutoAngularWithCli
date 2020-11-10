import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {

  // Alias on this input: is-favorite in html (kebabCase), isFavorite in ts (camelCase)
  // Make refactoring easier
  @Input('is-favorite') isSelected: boolean;
  @Output('change') changeFavorite = new EventEmitter();

  onClick(): void {
    this.isSelected = !this.isSelected;
    this.changeFavorite.emit({newValue: this.isSelected});
  }

}

export interface FavoriteChangedArgs {
  newValue: boolean;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  imageUrl = 'http://lorempixel.com/400/200';
  isActive = false; // class binding
  tel = '01234'; // 2 way binding
  course = { // For pipes
    title: 'The Angular course',
    rating: 4.95785,
    students: 258980,
    price: 10.50,
    releaseDate: new Date(2020, 1, 12)
  };
  text = 'A very long text , which is really toooooooooooooooooooooooooooooo lonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnggggggggg';

  onDiv(): void {
    console.log('Div was clicked');
  }

  onSave(event: any): void {
    event.stopPropagation(); // To stop bubble propagation on outer div
    console.log('Save was clicked', event.target);
  }

  onKeyUp(event: any): void {
    console.log('ENTER was pressed', 'target is', event.target);
  }

  onKeyUpValue(value: string): void {
    console.log('ENTER was pressed', 'value is', value);
  }

  onKeyUpTel(): void {
    console.log('Tel was pressed', this.tel);
  }

}

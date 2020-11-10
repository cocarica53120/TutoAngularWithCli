import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structurals',
  templateUrl: './structurals.component.html',
  styleUrls: ['./structurals.component.css'],
})
export class StructuralsComponent implements OnInit {

  isSelected = false;
  shift = 10;
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onAdd(): void {
    this.courses.push({ id: 4, name: 'course4' });
    console.log('onAdd', this.courses);
  }

  onRemove(course): void {
    this.courses.splice(this.courses.indexOf(course), 1);
  }

  onResetAll(): void {
    this.courses = [];
  }

  onChange(course): void {
    course.name += ' updated';
  }

  onKeyUp(event): void {
    this.shift = +event.target.value;
  }

  toggle():void {
    this.isSelected = !this.isSelected;
  }
}

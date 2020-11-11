import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input('title') title: string;

  isExpanded = false;

  onClick(): void {
    this.isExpanded = !this.isExpanded;
  }
}
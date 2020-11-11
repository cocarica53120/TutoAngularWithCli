import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy-sol-css',
  templateUrl: './zippy-sol-css.component.html',
  styleUrls: ['./zippy-sol-css.component.css']
})
export class ZippySolCssComponent {
  @Input('title') title: string;
  isExpanded: boolean = false;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

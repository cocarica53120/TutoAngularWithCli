import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-casing',
  templateUrl: './title-casing.component.html',
  styleUrls: ['./title-casing.component.css']
})
export class TitleCasingComponent implements OnInit {

  sentence = '';
  title = 'Enter a sentence to transform';

  constructor() { }

  ngOnInit(): void {
  }

}

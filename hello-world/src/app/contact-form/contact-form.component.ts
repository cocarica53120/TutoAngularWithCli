import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id: 1, name: 'Email 1'},
    {id: 2, name: 'Email 2'},
  ]
  log(value):void {
    console.log('log', value);
  }

  submit(value): void {
    console.log('subnmit', value);
    this.isOpenChange.emit(false);
  }

  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter();

}

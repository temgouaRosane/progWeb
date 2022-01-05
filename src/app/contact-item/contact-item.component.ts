import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  constructor() { }
  @Input() name:any
  @Input() phoneNumber:any

  ngOnInit(): void {
  }

}

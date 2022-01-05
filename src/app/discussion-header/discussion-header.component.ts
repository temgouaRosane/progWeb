import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion-header',
  templateUrl: './discussion-header.component.html',
  styleUrls: ['./discussion-header.component.css']
})
export class DiscussionHeaderComponent implements OnInit {
  @Input() name: any ;
  @Input() PhoneNumber: any ;
  constructor() { }

  ngOnInit(): void {
  }

}

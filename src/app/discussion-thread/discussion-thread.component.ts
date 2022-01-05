import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion-thread',
  templateUrl: './discussion-thread.component.html',
  styleUrls: ['./discussion-thread.component.css']
})
export class DiscussionThreadComponent implements OnInit {
  @Input() name: any ;
  @Input() lastMessage: any ;
  contact = [
    {
      name : 'Aziz',
      phoneNumber : '+237 655 545 120',
      lastMessage : 'Pourquoi ?',
      type : 'sent'
    },
    {
      name : 'Samira',
      phoneNumber : '+237 658 117 758',
      lastMessage : 'Merci',
      type : 'sent'
    },
    {
      name : 'Teddy',
      phoneNumber : '+237 697 765 934',
      lastMessage : 'Je ne sais pas, je vais voir..',
      type : 'received'
    },
    {
      name : 'Freddy',
      phoneNumber : '+237 694 093 142',
      lastMessage : 'OK',
      type : 'received'
    },
    {
      name : 'Yvanna',
      phoneNumber : '+237 698 500 273',
      lastMessage : 'Non je ne pense pas',
      type : 'sent'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

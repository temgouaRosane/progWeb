import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './app-navigation-bar.component.html',
  styleUrls: ['./app-navigation-bar.component.css']
})
export class AppNavigationBarComponent implements OnInit {

  Firstname: string = 'Teddy ';
  LastName: string ='William';
  phone : string = '+237 697 765 934';

  account = {
    name : this.Firstname + this.LastName,
    phoneNumber : this.phone
  };

  constructor() { }

  ngOnInit(): void {
  }

}

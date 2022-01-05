import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contact = [
    {
      name : '',
      phoneNumber : '',
      lastMessage : '',
      discussion: 0,
    }
  ];
  constructor(private http: HttpClient) { 
}
  @Input() user:any

  ngOnInit(): void {
           
    const url = 'http://127.0.0.1:8080/contact/all?user='+this.user;
  this.http.get<any>(url).subscribe(data => {
    while (this.contact.length) { this.contact.pop(); }
    return data.result.map((e: any) => {
      let last = ""
      console.log(data.result.length)
      this.contact.push({name:e.firstname,phoneNumber:e.number,lastMessage:last,discussion:e.iddiscussion});
    })
  });
  }

}

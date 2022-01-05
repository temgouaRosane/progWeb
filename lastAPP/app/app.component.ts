import { Component, OnInit } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/bootstrap-icons-1.5.0/bootstrap-icons.css','../assets/bootstrap.min.css']
})
export class AppComponent implements OnInit {
  user = "658402020"
  title = 'envoi-des-sms';
  correctPassword : boolean = true;
  isConversation : boolean = true;
  isContactList : boolean = false;
  
  selectedName = "Select Contact"
  selectedPhoneNumber = "Number"
  currentDiscussion = 1
  messages = [{
    content : "Yeah",
    discussion: 1,
    type : 'sent'
  }];
  contact = [
    {
      name : 'Batch',
      phoneNumber : '+237 655 545 120',
      lastMessage : 'Pourquoi ?',
      discussion: 1,
    }
  ];
  
  newChatForm(){
    document.querySelector<HTMLElement>('.new-chat-wrapper')!.style.visibility="visible";
    document.querySelector<HTMLElement>('.new-chat-form')!.style.animation="popup .25s ease";
  }
  closeForm(){
    document.querySelector<HTMLElement>('.new-chat-wrapper')!.style.visibility="hidden";
    document.querySelector<HTMLElement>('.new-chat-form')!.style.animation="none";
    
  }
  
  message : string = '';
  
  sendMessage (){
    
    if (this.message.trim() === ''){
      return;
    }
    else{
      console.log(this.message);
      this.messages.push({
        content : this.message.toString(),
        discussion: this.currentDiscussion,
        type : 'sent'
      });
      const url = 'http://127.0.0.1:8080/message/add/discussion?discussion='+this.currentDiscussion+'&content='+this.message.replace('\n',"%0A");
      this.http.get<any>(url).subscribe(data => {
        console.log(data.result)
      })
      this.message = '' ;
    }
    
  }
  constructor(private http: HttpClient) { 
    
    const url = 'http://127.0.0.1:8080/contact/all?user='+this.user;
    this.http.get<any>(url).subscribe(data => {
      while (this.contact.length) { this.contact.pop(); }
      return data.result.map((e: any) => {
        let url2 = 'http://127.0.0.1:8080/message/last?number='+e.number;
        let last = ""
        this.http.get<any>(url2).subscribe(data => {
          last = data.result[0].content;
        })
        this.contact.push({name:e.firstname,phoneNumber:e.number,lastMessage:last,discussion:e.iddiscussion});
      })
    });
   }
  
  ngOnInit(): void {
  }
  selectContact(name:any,number:any,discussion:any){
    this.currentDiscussion = discussion;
    this.selectedName = name;
    this.selectedPhoneNumber = number;
    const url = 'http://127.0.0.1:8080/message/all?discussion='+this.currentDiscussion;
    this.http.get<any>(url).subscribe(data => {
      while (this.messages.length) { this.messages.pop(); }
      return data.result.map((e: any) => {
        this.messages.push({content:e.content,discussion:e.discussion,type:e.type});
      })
    });
  }


  


}

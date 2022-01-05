import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { globalVariables } from './globalVariables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/bootstrap-icons-1.5.0/bootstrap-icons.css','../assets/bootstrap.min.css']
})
export class AppComponent  {

  title = 'envoi-des-sms';
  @Input () correctPassword : boolean = true;
  isConversation : boolean = true;
  isContactList : boolean = false;

  selectedName = "Select Contact"
  selectedPhoneNumber = "Number"
  currentDiscussion = 1
  user = '658402020'

  Firstname: string = 'Teddy';
  LastName: string ='William';
  phone : string = '+237 697 765 934';

  account = {
    name : this.Firstname +" "+ this.LastName,
    phoneNumber : this.phone
  };

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
  
  
  changeBool(x : boolean){
    x = !x ;
  }

  newChatForm(){
    document.querySelector<HTMLElement>('.new-chat-wrapper')!.style.visibility="visible";
    document.querySelector<HTMLElement>('.new-chat-form')!.style.animation="popup .25s ease";
  }
  closeForm(){
    document.querySelector<HTMLElement>('.new-chat-wrapper')!.style.visibility="hidden";
    document.querySelector<HTMLElement>('.new-chat-form')!.style.animation="none";
  }
  
  newContactForm(){
    document.querySelector<HTMLElement>('.add-contact-wrapper')!.style.visibility="visible";
    document.querySelector<HTMLElement>('.add-contact-form')!.style.animation="popup .25s ease";
  }
  closeContactForm(){
    document.querySelector<HTMLElement>('.add-contact-wrapper')!.style.visibility="hidden";
    document.querySelector<HTMLElement>('.add-contact-form')!.style.animation="none";
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
      let msg = this.message.split("\n").join("%0A");
      const url = 'http://127.0.0.1:8080/message/add/discussion?discussion='+this.currentDiscussion+'&content='+msg;
      this.http.get<any>(url).subscribe(data => {
        console.log(data.result)
      })
      this.message = '' ;
    }
    
    var apilogin="f16187da70b6";
    var apikey="b6901d40-f211-930a-8e0c-1cdad7a64f99";
   var  requestOptions = {
        method: 'POST',
        headers: { 
            Authorization:'Basic '+ btoa(apilogin + ":" + apikey),
            'Content-Type': 'application/json',
            'Accept': 'application/json',
       },
     body: JSON.stringify({ phoneNumber: this.user,message:this.messages })
    };
    fetch('http://proxysms.mufoca.com/api/v0/shortMessages', requestOptions)
    .then(response => response.json())
    .then(data => {console.log(data)
       
    })
    .catch((err) => {
      console.log(err)
    })
  }
    constructor(private http: HttpClient,public param:globalVariables) { 
    
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
  firstNameC:any
  lastNameC:any
  phoneNumberC:any
  createcontact(){
    const url = 'http://127.0.0.1:8080/contact/create?number='+this.phoneNumberC+'&firstName='+this.firstNameC+'&lastName='+this.lastNameC+'&user='+this.user
    this.http.get<any>(url).subscribe(data => {
      this.closeContactForm();
    });
    const url2 = 'http://127.0.0.1:8080/discussion/create?contact='+this.phoneNumberC+'&user='+this.user
    this.http.get<any>(url2).subscribe(data => {
      this.closeContactForm();
    })

  }
}

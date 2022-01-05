import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { globalVariables } from '../globalVariables';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  constructor(private http: HttpClient,public param:globalVariables){

  }
  phonenumber:any
  password:any
  @Input() isforgottenPassword : boolean = false ;
  @Input() isCodeSent : boolean = false ;
  @Input() isCreateAccount : boolean = false ;

  ngOnInit(): void {
  }
  mylogin(){
    let url = 'http://127.0.0.1:8080/user/login?number='+this.phonenumber+'&password='+this.password
    this.http.get<any>(url).subscribe(data => {
      this.password=''
      this.phonenumber=''
      this.param.correctPassword = data.result.length>0
    })
  }

}

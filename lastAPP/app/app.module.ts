import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavigationBarComponent } from './app-navigation-bar/app-navigation-bar.component';
import { DiscussionThreadComponent } from './discussion-thread/discussion-thread.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { DiscussionHeaderComponent } from './discussion-header/discussion-header.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { SmsInputComponent } from './sms-input/sms-input.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationBarComponent,
    DiscussionThreadComponent,
    ContactItemComponent,
    DiscussionHeaderComponent,
    ContactHeaderComponent,
    SmsInputComponent,
    LoginFormComponent,
    ContactListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

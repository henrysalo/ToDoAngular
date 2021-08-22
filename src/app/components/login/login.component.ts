import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required)
  });
  socialUser = new SocialUser ;
  isLoggedin: boolean = false;  
  
  @Output() newItemEvent = new EventEmitter<any>();

  user={
    firstName: 'this.socialUser.firstName',
    lastName: 'this.socialUser.lastName',
    id: 'this.socialUser.id',
    photoUrl: 'this.socialUser.photoUrl',
    isLoggedin: true
  }
  
  constructor(
    private socialAuthService: SocialAuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe(async (user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
      await this.addNewItem(this.socialUser)
    });
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  addNewItem(value:any) {
    this.user.firstName = value.firstName
    this.user.lastName= value.lastName
    this.user.id= value.id
    this.user.photoUrl= value.photoUrl
    this.user.isLoggedin= true
    this.newItemEvent.emit(this.user);
  }
  

  logOut(): void {
    this.socialAuthService.signOut();
    window.location.reload()
  }

  goToTasks() {
    this.route.navigate(['/tasks'],);
  }
}





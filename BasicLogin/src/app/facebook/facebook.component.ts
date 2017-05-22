import { Component, OnInit } from '@angular/core';
import {FacebookService,LoginResponse,LoginOptions,InitParams} from 'ngx-facebook';
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
  title = '';
  no_friend ='';
  Email='';
  Gender='';
  image='';
  constructor(
    private fb: FacebookService
  ) {

    console.log('Initializing Facebook');

    fb.init({
      appId: '1524274457596537',
      version: 'v2.9'
    });

  }


  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
         console.log('Logged in', res);
         this.getProfile();
         this.getFriends();
         this.getEmail();
    })
  }
      
//   login() {
//     this.fb.login()
//       .then((res: LoginResponse) => {
//         console.log('Logged in', res);
//         this.fb.api('/me')
//     .then((res: any) => {
//       console.log('Got the users profile', res.name);
//       this.title=res.name;
// })
//       })
// }

 getProfile() {
    this.fb.api('/me')
      .then((res: any) => {
        //console.log('Got the users profile', res.name);
        this.title=res.name;
         alert("Hello "+this.title);
      })
 }
 
  // getusername(){
  //    alert("Hello "+this.title);
  // }


 getFriends() {
    this.fb.api('/me/friends')
      .then((res: any) => {
        console.log('Got the users friends', res);
        this.no_friend=res.summary.total_count;
      })
      
  }

  // loginWithOptions() {

  //   const loginOptions: LoginOptions = {
  //     enable_profile_selector: true,
  //     return_scopes: true,
  //     scope: 'public_profile,user_friends,email,pages_show_list'
  //   };

  //   this.fb.login(loginOptions)
  //     .then((res: LoginResponse) => {
  //       console.log('Logged in', res);
  //     })
  // }
  ngOnInit() {
  }

  getEmail(){
   this.fb.api('/me?fields=gender,first_name,last_name,email,picture')
      .then((res: any) => {
        console.log('Got the users profile', res);
        this.Email=res.email;
        this.Gender=res.gender;
        this.image=res.picture.data.url;
      })
  }

//   getImage(){
//   this.fb.api('/me'+'/?access_token=')
//       .then((res: any) => {
//         // console.log('Got the users profile', res);
//         this.image=res.name;
//       })
      
// }
logout(){
this.fb.logout();
console.log("logged out");
}
}

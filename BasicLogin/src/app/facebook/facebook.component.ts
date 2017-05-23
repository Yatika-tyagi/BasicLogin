import { Component, OnInit } from '@angular/core';
import {FacebookService,LoginResponse,LoginOptions,InitParams} from 'ngx-facebook';
@Component({
  selector: 'app-facebook',
  templateUrl:'./facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
  title = '';
  no_friend ='';
  Email='';
  Gender='';
  image='';
  post='';
  Feed='';
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
         this.getFeed();
        // this.loginWithOptions();
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
getFeed(){
  this.fb.api('/me/feed')
      .then((res:any) => {
         console.log('Total Post', res.data);
        this.Feed=res.data.length;
    })

}


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

  loginWithOptions() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'publish_actions,public_profile,user_friends,email,pages_show_list,user_posts'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
  }
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

   updatepost(post){
     this.fb.api('/me/feed','post',
     {message:"this is a test message"},
   )
   .then((res: any) => {
        console.log('post is',res);
  alert('Status '+ post + '  updated succesfully');
      })
 // console.log('post is',post);
  alert('Status '+ post + '  updated succesfully');
}

logout(){
this.fb.logout();
console.log("logged out");
alert("Your account have been Logged Out");
}
//  <fb-post href="https://www.facebook.com/20531316728/posts/10154009990506729/"></fb-post>

}

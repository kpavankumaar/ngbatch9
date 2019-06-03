import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails;
  user;
  constructor(private authservice:AuthService, private router:Router) {}

  ngOnInit() {
    console.log("ng OnInit loginComponent", this.authservice.authenticate)
    this.userDetails = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',Validators.required)
    })
  }
  submit(){
    this.user = {}
    this.user.email = this.userDetails.get('email').value;
    this.user.password = this.userDetails.get('password').value;
    console.log(this.router.routerState.snapshot);
    var url = this.router.routerState.snapshot.url;
    
    if(this.authservice.authenticate){
      this.authservice.logOut().subscribe((res:boolean) =>{
        this.authservice.authenticate = false;
      })
    }else{
      this.authservice.logIn(this.user).subscribe((res:boolean) => {
        this.authservice.authenticate = true;
        if(this.authservice.redirectUrl){
          // this.authservice.authenticate = true;
          let url = this.authservice.redirectUrl;
          this.authservice.redirectUrl = "";
          console.log("authenticate", this.authservice.authenticate, url);
          this.router.navigate([url]);
        }else{
          // this.authservice.authenticate = false;
          this.router.navigate(["customers"])
        }
      })
    }
  }

}

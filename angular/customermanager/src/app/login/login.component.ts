import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails;
  user;
  constructor(private authservice:AuthService) {}

  ngOnInit() {
    this.userDetails = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',Validators.required)
    })
  }
  submit(){
    this.user = {}
    this.user.email = this.userDetails.get('email').value;
    this.user.password = this.userDetails.get('password').value;
    if(this.authservice.authenticate){
      this.authservice.logOut().subscribe((res:boolean) =>{
        this.authservice.authenticate = false;
      })
    }else{
      this.authservice.logIn(this.user).subscribe((res:boolean) => {
        if(res){
          this.authservice.authenticate = true;
        }else{
          this.authservice.authenticate = false;
        }
      })
    }
  }

}

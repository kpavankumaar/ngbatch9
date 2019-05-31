import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginOrLogOutText:string;

  constructor(private authService: AuthService) { 

  }

  ngOnInit() {
    this.loginOrOut();
  }
  loginOrOut(){
    if(this.authService.authenticate){
      this.loginOrLogOutText = "logout";
    }else{
      this.loginOrLogOutText = "login";
    }
  }
}

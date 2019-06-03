import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginOrLogOutText:string;

  constructor(private authService: AuthService,private router:Router, private dataService:DataService) { 

  }

  ngOnInit() {
    this.loginOrLogOutText = "login";
  }
  loginOrOut(){
    if(this.authService.authenticate){
      this.authService.logOut().subscribe((res)=>{
        this.authService.authenticate = false;
      })    
    }else{
      this.router.navigate(["login"]);
    }
  }
  ngDoCheck(){
    console.log("ngDoCheck",this.authService.authenticate)
    if(this.authService.authenticate){
      this.loginOrLogOutText = "logout"
      console.log("ngDoCheck",this.authService.authenticate)
    }else{
      
      this.loginOrLogOutText = "login"
    }
  }
}

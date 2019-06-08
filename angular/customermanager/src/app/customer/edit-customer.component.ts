import { Component, OnInit, state } from '@angular/core';
import { DataService } from '../core/service/data.service';
import { RouterState, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerDetails:any = {
    firstName:"",
    lastName:"",
    address:"",
    city:"",
    state:""
  }
  constructor(private authService:AuthService,private dataService:DataService, private router:Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.router.routerState.snapshot.url);
    console.log(this.activatedRoute.parent.params);
    this.activatedRoute.parent.params.subscribe((res)=>{
      console.log(res.id)
      let id = res.id;
      if(id > 0){
        this.dataService.getCustomerDataById(id).subscribe((res) =>{
          this.customerDetails = res;
        })
      }
      
    })
    // 
  }
  cancel(){
    this.router.navigate(["customers"]);
  }
  canDeactivate(){
    console.log("test");
    var verify = confirm("would you like to leave the page");
    this.authService.authenticate = true;
    return verify;
  }

}

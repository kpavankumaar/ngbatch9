import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/service/data.service';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(public route:ActivatedRoute, private dataService:DataService) {

   }
  idval;
  customer;
  
  ngOnInit() {
    // this.idval = this.route.parent.params.pipe(
    //   map((res)=> res)
    // )
    
    // this.idval.subscribe((res:number) =>{
    //   this.idObj =  res;
    //   console.log(this.idObj.id);
    // })
    this.route.parent.params.subscribe((res)=> {
     this.idval =  res.id;
     this.dataService.getCustomerDataById(this.idval).subscribe((res) =>{
      this.customer = res;
    })
    })
    console.log(this.idval);
    

  }

}

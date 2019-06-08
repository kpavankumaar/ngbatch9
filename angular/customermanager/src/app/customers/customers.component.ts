import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[DataService]
})
export class CustomersComponent implements OnInit {

  constructor(private dataService: DataService, private router:Router) { }
  customers;
  cardView : boolean;
  listView : boolean;
  newCust : boolean;
  ngOnInit() {
    this.dataService.getCustomersData().subscribe(
      (response) => { this.customers = response }
      
    )
  }
  loadcomponent(val:string){
    console.log(val);
    if(val === 'card'){
      this.cardView = true;
      this.listView = false;
      this.newCust = false;
    }
    if(val === 'list'){
      this.listView = true;
      this.cardView = false;
      this.newCust = false;
    }
    if(val === 'newcustomer'){
      this.newCust = true;
      this.cardView = false;
      this.listView = false;
      this.router.navigate(["customers/0/edit"]);
    }
  }

}

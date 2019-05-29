import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/service/data.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[DataService]
})
export class CustomersComponent implements OnInit {

  constructor(private dataService: DataService) { }
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
    }
  }

}

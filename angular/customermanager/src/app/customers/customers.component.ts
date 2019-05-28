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
  ngOnInit() {
    this.dataService.getCustomersData().subscribe(
      (response) => { this.customers = response }
      
    )
  }

}

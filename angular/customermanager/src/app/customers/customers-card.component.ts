import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.css']
})
export class CustomersCardComponent implements OnInit {
  @Input() customers;
  constructor() { 
    console.log("customers card component constructor");
  }

  ngOnInit() {
    console.log("customers in ngOninit ",this.customers);
  }

}

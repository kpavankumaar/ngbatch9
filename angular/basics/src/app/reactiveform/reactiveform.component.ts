import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  customerForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      username:new FormControl(''),
      password:new FormControl()
    })
    console.log(this.customerForm);
  }
  submit(){
    console.log(this.customerForm);
  }

}

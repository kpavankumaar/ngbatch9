import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  customerForm;
  constructor() { }

  ngOnInit() {
    
  }
  submit(val){
    console.log(val);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samplecomponent',
  templateUrl: './samplecomponent.component.html',
  styleUrls: ['./samplecomponent.component.css']
})
export class SamplecomponentComponent implements OnInit {
  testPropForChangeDetection
  constructor() {
    console.log('constructor function in sample component');
   }
   test(){
    // this.testPropForChangeDetection = 10;
   }
  ngOnInit() {
    console.log('ngOninit function in sample component');
  }
  ngDoCheck(){
    console.log("ngDoCheck in sample component")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit in sample component")
  }
}

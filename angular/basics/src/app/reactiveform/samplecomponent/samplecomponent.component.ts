import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samplecomponent',
  templateUrl: './samplecomponent.component.html',
  styleUrls: ['./samplecomponent.component.css']
})
export class SamplecomponentComponent implements OnInit {

  constructor() {
    console.log('constructor function in sample component');
   }

  ngOnInit() {
    console.log('ngOninit function in sample component');
  }

}

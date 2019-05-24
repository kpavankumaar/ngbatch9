import { Component, ViewChild, ElementRef, OnChanges, OnInit, DoCheck } from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h3>{{title}}</h3>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,OnInit, DoCheck {
  @ViewChild('username') username:ElementRef;
  ngmodelbinding = 'ramskrishna';
  title = 'Angular application building';
  color = 'grey';
  imgPath = '../assets/images/images.jpg';
  inputVal;
  testFn(recieve:string){
    this.inputVal = recieve;
    console.log('event binding', recieve);
    this.username.nativeElement.style.backgroundColor = 'lightgreen';
    this.ngmodelbinding  = 'Ravi kumar';
  }
  chooseCountry(val){
    console.log(val)
  }
  countries = ['India', 'China', 'Pakistan', 'Bangladesh', 'Srilanka' ]
  testLifeCycleHooks(){
    this.userData = {
      firstName:"krishna",
      lastName:"kumar",
      rating:4
    }
  }
  userData={
    firstName:"ravi",
    lastName:"kumar",
    rating:3
  }
  ngOnChanges (){
    console.log('app component ngOnchanges');
  }
  ngOnInit(){
    console.log('app component ngOnInit');
  }
  ngDoCheck(){
    console.log('app component ngDoCheck');
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit in appcomponent")
  }
  constructor(){
    console.log('constructor function inside the app component.ts');
  }
}

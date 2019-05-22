import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h3>{{title}}</h3>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  countries = [
    'India', 'China', 'Pakistan', 'Bangladesh', 'Srilanka'
  ]

  constructor(){
    console.log('constructor function inside the app component.ts');
  }
}

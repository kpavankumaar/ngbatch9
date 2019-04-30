import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h3>{{title}}</h3>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular application building';
  color = 'grey';
  imgPath = '../assets/images/images.jpg';
  testFn(recieve){
    
    console.log('event binding', recieve);
  }
}

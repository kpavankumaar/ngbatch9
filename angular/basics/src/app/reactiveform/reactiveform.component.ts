import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';
function ratingRange(min:number,max:number){
  return function rating(c:AbstractControl):{[key:string]:boolean} | null{
    if(c.value <= max && c.value >= min ){
      return {
        match:true
      }
    }
    return null
  }
}

// function phoneValidation(c:AbstractControl): {[key:string]:boolean} | null{
//   let phone = c.value
//   if(phone.length !== 10){
//     return {
//       match:true
//     }
//   }
//   return null
// }
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  customerForm:FormGroup;
  constructor() { }
  showHideAddress: boolean = false;
  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName:new FormControl('', Validators.required),
      lastName:new FormControl(''),
      rating:new FormControl('',[Validators.required,ratingRange(0,5)]),
      // phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      // phone:new FormControl('',[Validators.required,phoneValidation]),
      phone:new FormControl(''),
      email:new FormControl('',[Validators.required]),
      notifications: new FormControl(),
      address: new FormGroup({
        hno:new FormControl(),
        street: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        zipcode: new FormControl()
      })
    })
    console.log(this.customerForm);
  }
  submit(){
    console.log(this.customerForm);
  }
  showAddress(){
    this.showHideAddress = this.showHideAddress == false ? true : false;
  }
  notificationMessage(e){
    console.log(e);
    let phone = this.customerForm.get('phone');

    if( e === 'phone'){
      phone.setValidators(Validators.required);

    }else{
      phone.clearValidators();
    }
    phone.updateValueAndValidity()
  } 

}

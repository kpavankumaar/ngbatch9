import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';
import { fbind } from 'q';
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

function phoneValidation(c:AbstractControl): {[key:string]:boolean} | null{
  let phone = c.value
  if(phone.length !== 10){
    return {
      match:true
    }
  }
  return null
}
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit,OnChanges, DoCheck {
  @Input() dataFromParentComponent;
  customerForm:FormGroup;
  constructor(private fb:FormBuilder) {

    console.log('constructor in reactive form component', this.dataFromParentComponent)
  }
  ngOnChanges(SimpleChanges){
    console.log("ng onchanges reactive form child component ", this.dataFromParentComponent);
    console.log("ng onchanges simpleChanges " +  SimpleChanges.current + SimpleChanges.previous);
  }
  showHideAddress: boolean = false;
  ngOnInit() {
    console.log('ngoninit in reactive form component', this.dataFromParentComponent);
    this.customerForm = this.fb.group({
      firstName:this.fb.control(this.dataFromParentComponent.firstName),
      lastName:new FormControl(''),
      rating:new FormControl('',[Validators.required,ratingRange(0,5)]),
      // phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      // phone:new FormControl('',[Validators.required,phoneValidation]),
      phone:new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
      email:new FormControl('',[Validators.required]),
      notifications: new FormControl(),
      address: new FormGroup({
        hno:new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zipcode: new FormControl('', Validators.required)
      })
      
    })
    

  }
  
  ngDoCheck(){
    console.log('reactive form component ngDocheck');
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit in reactiveform component")
  }
    // this.customerForm = new FormGroup({
    //   firstName:new FormControl('', Validators.required),
    //   lastName:new FormControl(''),
    //   rating:new FormControl('',[Validators.required,ratingRange(0,5)]),
    //   // phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    //   // phone:new FormControl('',[Validators.required,phoneValidation]),
    //   phone:new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
    //   email:new FormControl('',[Validators.required]),
    //   notifications: new FormControl(),
    //   address: new FormGroup({
    //     hno:new FormControl('', Validators.required),
    //     street: new FormControl('', Validators.required),
    //     city: new FormControl('', Validators.required),
    //     state: new FormControl('', Validators.required),
    //     zipcode: new FormControl('', Validators.required)
    //   })
    // })
    
    submit(){
      console.log(this.customerForm);
    }
    showAddress(){
      this.showHideAddress = this.showHideAddress == false ? true : false;
    }
    notificationMessage(e){
      console.log(e);
      let phone = this.customerForm.get('phone');
      let email = this.customerForm.get('email');
      if( e === 'phone'){
        phone.setValidators([Validators.required,phoneValidation]);
        email.clearValidators();
      }else{
        phone.clearValidators();
        email.setValidators(Validators.required);
      }
      phone.updateValueAndValidity();
      email.updateValueAndValidity();
    } 
  }

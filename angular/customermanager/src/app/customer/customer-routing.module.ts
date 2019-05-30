import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { EditCustomerComponent } from './edit-customer.component';

const route:Routes = [
  { path:'', 
    component:CustomerComponent,
    children:[
      {path:'details', component:CustomerDetailsComponent},
      {path:'orders', component:CustomerOrdersComponent},
      {path:'edit', component:EditCustomerComponent}
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class CustomerRoutingModule { }

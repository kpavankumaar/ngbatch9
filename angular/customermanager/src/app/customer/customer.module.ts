import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { EditCustomerComponent } from './edit-customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { RouterModule } from '@angular/router';
import { CanActivateGaurd } from './canactivategaurd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CustomerRoutingModule
  ],
  
  declarations: [CustomerComponent, CustomerDetailsComponent, CustomerOrdersComponent, EditCustomerComponent]
})
export class CustomerModule { }

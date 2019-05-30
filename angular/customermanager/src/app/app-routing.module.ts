import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const route:Routes= [
  {path:'', redirectTo:'customers', pathMatch:'full'},
  {path:'customers', loadChildren:'./customers/customers.module#CustomersModule'},
  {path:'customers/:id', loadChildren:'./customer/customer.module#CustomerModule'},
  {path:'orders', loadChildren:'./orders/orders.module#OrdersModule'},
  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route,{enableTracing:true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

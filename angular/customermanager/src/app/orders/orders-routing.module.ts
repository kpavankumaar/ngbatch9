import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';

const route:Routes = [
  {path:'', component:OrdersComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[
    RouterModule
  ]
})
export class OrdersRoutingModule { }

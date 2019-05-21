import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersModule } from './customers/customers.module';
import { CoreModule } from './core/core.module';

import { Routes, RouterModule } from "@angular/router";
import { OrdersComponent } from './orders/orders/orders.component';
import { OrdersModule } from './orders/orders.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    OrdersModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

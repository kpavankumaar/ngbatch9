import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers/customers.component";

const route:Routes = [
    {path:"customers",loadChildren:"./customers/customers.module#CustomersModule"},
    {path:"orders",loadChildren:"./orders/orders.module#OrdersModule"}
]

@NgModule({
    imports:[
        RouterModule.forRoot(route)
    ],
    exports:[RouterModule]

})
export class AppRoutingModule{

}
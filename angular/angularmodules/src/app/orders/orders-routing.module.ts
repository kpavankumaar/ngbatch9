import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./orders.component";


const route:Routes = [
    {path:'',component:OrdersComponent}
]
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class OrdersRoutingModule{

}
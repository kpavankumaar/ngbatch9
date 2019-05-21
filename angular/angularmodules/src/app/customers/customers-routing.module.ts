import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./customers.component";

const route:Routes = [
    {path:'',component:CustomersComponent},
]
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class CustomersRoutingModule{
    
}
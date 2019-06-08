import { Injectable, Component } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { EditCustomerComponent } from "./edit-customer.component";
import { AuthService } from "../core/service/auth.service";

@Injectable()
export class CanDeactivateGaurd implements CanDeactivate<EditCustomerComponent> {
    constructor(private authService:AuthService) {
        console.log(this.authService.authenticate);
    }
    
    canDeactivate(
        component: EditCustomerComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log(this.authService.authenticate);
        // return this.permissions.canDeactivate(this.currentUser, route.params.id);
        return component.canDeactivate()
    }
}
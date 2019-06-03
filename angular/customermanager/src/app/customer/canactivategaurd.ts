import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../core/service/auth.service";
import { routerNgProbeToken } from "@angular/router/src/router_module";
@Injectable()
export class CanActivateGaurd implements CanActivate{
    constructor(private authService: AuthService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log(route);
        console.log(state);
        let url = state.url;
        console.log(this.authService.authenticate);
        if(this.authService.authenticate) {
            
            return true;
        }else{
            this.authService.redirectUrl = state.url;
            console.log(state.url);
            this.router.navigate(["login"]);
            return false;
        }
    }
}
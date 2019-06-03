import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AuthService {
    authenticate:boolean  = false;
    redirectUrl:string;
    constructor(private http : HttpClient) {
        
    }
    logIn(userDetails){
        const url = "/api/auth/login";
        return this.http.post(url,userDetails);
    }
    logOut(){
        const url = "/api/auth/logout"
        return this.http.post(url,{});
    }
}
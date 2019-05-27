import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
// import { ICustomers } from "../../shared/interfaces";
import { Observable } from "rxjs/Observable";
@Injectable()
export class DataService{
    url="/api/customers";

    constructor(private http:HttpClient){

    }
    getCustomersData(){
        return this.http.get(this.url).pipe(
            map((res)=> res)
        )
    }
}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
// import { ICustomers } from "../../shared/interfaces";
import { Observable } from "rxjs/Observable";
@Injectable()

export class DataService{
    url="/api/customers";
    
    // url = "https://jsonplaceholder.typicode.com/photos";
    // /api/customers/:id
    constructor(private http:HttpClient){

    }
    getCustomersData(){
        return this.http.get(this.url).pipe(
            map((res)=> res)
        )
    }
    getCustomerDataById(id:number){
        console.log(this.url+'/'+id)
        return this.http.get(this.url+'/'+id).pipe(
            map((res) => res)
        );
    }
    updateCustomerData(userDetails){
        return this.http.post(this.url, userDetails)
    }
}
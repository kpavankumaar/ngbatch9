interface UserDetails {
    'firstName':string
    'age'?:number
    'details':()=> number

}

let obj_1 : UserDetails

obj_1 = {
    firstName:'krishna',
    // age:"",
    details:function(){return 10}
}

interface UserAddress extends UserDetails {
    hno:string
    streetNo:string
    city:string
}

let obj2: UserAddress ={
    hno :'new house',
    streetNo:'test',
    city:'hyd'
}

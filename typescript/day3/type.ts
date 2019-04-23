function sum(a:number,b:number=20){
    var num1 = typeof(a) == "number"? a : false;
    console.log(a+b);
}
sum(1,30);

// example1
var num_1 :number ;
num_1 = 10;
// example2
var firstName : string;
firstName = 'srikanth';
// example3
var arr: [number,number];
arr = [10,20]
arr.push(30);
// example4
var arr1:Array<number | string>
arr1 = [10,20,30,'test'];

// object example 
var obj:{'firstName':string}
obj = {
    firstName:'Krishna',
    lastName:'radhe'
}
obj.funTest ;

// object def
var obj1 :{[key:string]:(a:number,b:number)=>number}

obj1 ={
    details:function(num1,num2){
        console.log(this.firstName);
        return num1 + num2;
    }
}
obj1.details(10,15)






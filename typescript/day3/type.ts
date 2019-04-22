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
var obj1 :{[key:string]:string | number}

obj1 ={
    firstName:'Balaram',
    lastName:'y',
    age:20,
    details:function(){
        console.log(this.firstName);
    }
}




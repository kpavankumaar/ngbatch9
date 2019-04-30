abstract class Tree {
    
    constructor(public name:string,private age:number, protected noOfBranches:number ){
    }
    type:string = 'Neem Tree';
    grows(){
        console.log(this.name,this.age, this.noOfBranches);
    }
    
    public set value(v : number) {
        this.age = v;
    }
    
    public get ageVal() : number {
        return this.age;
    }
    
    
}

// let mangoTree  = new Tree('Mango', 10, 20);
// mangoTree.value = 15;
// console.log("****",mangoTree.ageVal);


class Plant {
    private name:string;
}
interface BasicNeeds{
    needs:string
}
interface SoilNeeds{
    nourishmentNeeds:string
}
class Branches extends Tree implements BasicNeeds,SoilNeeds{
    constructor(treeType, age, count){
        super(treeType,age,count);
    }
    nourishmentNeeds= 'Minerals from soil';
    needs = "water";
    typeOfTree(){
        console.log("type of tree",this.name,this.noOfBranches);
    }
    static shapes =  'curved';
    grows(){
        console.log('polymorphism');
    }
}
console.log(Branches.shapes);
let obj = new Branches('banyan', 100, 35 );
obj.typeOfTree();
console.log('age is ',obj.ageVal);
// obj.grows();
// console.log(obj.name);
// var objTree = new Tree('neem', 40, 15);
// console.log(objTree.noOfBranches);

//generics

function sum(num:number):number{
    return num;
}
function sum_1<T>(num:Array<T>):Array<T>{
    num.length
    num.push()
    return num;
}
let test:{}
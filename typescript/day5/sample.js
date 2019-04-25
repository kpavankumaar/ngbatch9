class Tree {
    
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

let mangoTree  = new Tree('Mango', 10, 20);
mangoTree.value = 15;
console.log(mangoTree.ageVal)
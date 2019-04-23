class Tree {
    constructor(val){
        console.log(val);
    }
    type:string = 'Neem Tree';
    grows(){
        console.log(this.type);
    }
}
let obj = new Tree(10);
obj.grows()
class Tree {
    constructor(name, age, noOfBranches) {
        this.name = name;
        this.age = age;
        this.noOfBranches = noOfBranches;
        this.type = 'Neem Tree';
    }
    grows() {
        console.log(this.name, this.age, this.noOfBranches);
    }
    set value(v) {
        this.age = v;
    }
    get ageVal() {
        return this.age;
    }
}
// let mangoTree  = new Tree('Mango', 10, 20);
// mangoTree.value = 15;
// console.log("****",mangoTree.ageVal);
class Plant {
}
class Branches extends Tree {
    constructor(treeType, age, count) {
        super(treeType, age, count);
        this.nourishmentNeeds = 'Minerals from soil';
        this.needs = "water";
    }
    typeOfTree() {
        console.log("type of tree", this.name, this.noOfBranches);
    }
    grows() {
        console.log('polymorphism');
    }
}
Branches.shapes = 'curved';
console.log(Branches.shapes);
let obj = new Branches('banyan', 100, 35);
obj.typeOfTree();
console.log('age is ', obj.ageVal);
// obj.grows();
// console.log(obj.name);
// var objTree = new Tree('neem', 40, 15);
// console.log(objTree.noOfBranches);

var Tree = /** @class */ (function () {
    function Tree(val) {
        this.type = 'Neem Tree';
        console.log(val);
    }
    Tree.prototype.grows = function () {
        console.log(this.type);
    };
    return Tree;
}());
var obj = new Tree(10);
obj.grows();

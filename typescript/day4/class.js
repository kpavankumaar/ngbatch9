var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tree = /** @class */ (function () {
    function Tree(val) {
        this.type = 'Neem Tree';
        this.name = val;
    }
    Tree.prototype.grows = function () {
        console.log(this.name);
    };
    return Tree;
}());
var Branches = /** @class */ (function (_super) {
    __extends(Branches, _super);
    function Branches(treeType) {
        return _super.call(this, treeType) || this;
    }
    return Branches;
}(Tree));
var obj = new Branches('banyan');
obj.grows();

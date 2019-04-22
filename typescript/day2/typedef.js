// const , lambda , this, typedefs
var obj_1 = {
    firstName: 'srk',
    details:() => {
        console.log(this);
    }
};

var num1= 20;
obj_1.firstName = 'krishna';
obj_1.details();
// console.log(run(5));
const num =  (res => res.num1+10)(window);
var  name_3 =  () => {
    console.log(this);
}
name_3();




// console.log(num);

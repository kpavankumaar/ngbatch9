var num = 10;
console.log(num);
function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(10, 20);
for(let i= 0 ; i < 10 ; i = i + 1){
    setTimeout(function(){
        console.log(i)
    }, 1000);
}

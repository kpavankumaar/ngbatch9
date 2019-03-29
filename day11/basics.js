// 'use strict'
// console.log(name_1);
// var name_1 = 'pavan';
// test();
// console.log(name_1 == 10);
// obj1 = 'radhekrishna';
// (function(win,a,b){
// 	var name1 = 'krishna';
// 	console.log(name1);
// 	console.log(a+b)
// 	win.sum = a + b;
// })(window,10, 20)

// function test(){
// 	console.log(this);
// }

// var obj_1 = {
// 	name: 'ravi',
// 	test: function(){
// 		console.log(this)
// 	}
// }
console.log('before settimeout')
setTimeout(function(){console.log('printme')}, 0)
setInterval(function(){console.log('intiveral')},1000)
console.log('after settimeout');
//1
// var func = function(a, b){
// 	var sum = a + b;
// };

// console.log(func(1,2));

// //2
// var funcReturn = function(a,b){
// 	return a+b;
// };

// console.log(funcReturn(1, 2));

// //3 no return, usage, scope

// var sumNumbers;

// var func = function(a, b){
// 	sumNumbers = a + b;
// };


// console.log(func(1,2));

// // func(1, 2);

// console.log(sumNumbers);

//4 no return, usage, scope, params - returns undefined

// var sumNumbers;

// var func = function(a, b, arg){
// 	arg = a + b;
// };


// console.log(func(1,2, sumNumbers));

// func(1, 2, sumNumbers);

// console.log(sumNumbers);

// //4 no return, usage, scope, params - returns result

var sumNumbers;

var func = function(a, b){
	return a + b;
};


sumNumbers = func(1, 2);

console.log(sumNumbers);

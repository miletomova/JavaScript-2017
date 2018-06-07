// //1
// var a = 5;

// function test(){
// 	console.log(a);
// }

// test();

// //2

// var b = 10;

// function testB(){
// 	var b = 15;
// 	console.log(b);
// }

// testB();

//3

// function testC(arg){
// 	console.log(arg);
// }

// // //result -undefined + D!
// function testD(){
// 	testC(arg);
// 	console.log(' D!');
// }

// testD();

//results OK

function testD(arg){
	testC(arg);
	console.log(' D!');
}

testD('Hello');

function testD(arg){
	testC(arg);
	console.log(' D!');
}

// function testC(arg){
// 	console.log(arg);
// }

testD('Bye');
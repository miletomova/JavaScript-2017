var arr = [1, 2, 4];

//1
// for(var i in arr){
// 	console.log(arr[i]);
// }

//2
delete arr[1];
// console.log(arr.length);
//3
for(var i in arr){
	// console.log(i);
	console.log(arr[i]);
}

//4
for (var m = 0; m < arr.length; m++){
	console.log(arr[m]);
}

var arr = [1, 2, 3];

// console.log(arr);

arr.push(111);

// console.log(arr);

arr.unshift(222);

// // console.log(arr);

// arr.push(arr[0]);

// delete arr[0];

// arr.push(arr[0]);

// // arr.push(arr[0]);

// console.log(arr.length)

var temp = arr[0];

arr[0] = arr[2];

arr[2] = temp;

var temp1 = arr.unshift(7);

console.log(arr);
console.log(temp1);

arr.pop();

console.log(arr);


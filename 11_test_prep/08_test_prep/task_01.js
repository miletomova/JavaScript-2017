// input                    		output
// ‘’                    			The input must not be an empty string
// ‘1 2 2 6 8 6 7 8’           		[1, 2, 6, 8, 7]
// ‘0 0 0 0 0’                		[0]
// ‘mk pp we vfv’            		‘The input values must be convertible to
// a number’
// ‘1 br 2 1 werr 3 1’       		[1, 2, 3]
// ‘2 “” add “” 1 1 asd 2 “” 3’    	[2 1 3]

function uniq(str){
	var flag = false, resArr = [], arr, len, i;
// 1- Функцията получава като параметър - стринг. 
	if(str){
		arr = str.split(' ');
		len = arr.length;
		for(i = 0; i < len; i++){
			if(!isNaN(arr[i])){
				flag = true;
				if(resArr.indexOf(+arr[i]) === -1){
					resArr.push(+arr[i]);
				}
			}
		}
		if(!flag){
			console.log('The input values must be convertible to a number')
		}
		
	} else {
		console.log('The input must not be an empty string. ');	
	}


// 4 - връща масив с уникални елементи - числа, indexOf
	if(resArr){
		console.log(resArr);
	}
}

//Функцията ви
// трябва да работи коректно за посочените по-долу входни данни -

var str = '2 “” add “” 1 1 asd 2 “” 3';
uniq(str);
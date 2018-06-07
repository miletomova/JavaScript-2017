var arr = [1,2,5,3,4],
    index = 10;
if (index > (arr.length - 1)) {
    console.log('invalid index');
} else {
    if (index === 0 || index === (arr.length - 1)) {
        console.log('only one member');
    } else {
        if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
            console.log('bigger');
        } else {
            console.log('not bigger');
        }
    }
} //end of else
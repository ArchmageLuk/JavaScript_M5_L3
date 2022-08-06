let a = window.InputEvent
let result = counter(a)

function counter(num) {
    let numCount = 0;
    if (typeof num != 'number'){
        console.log('Error. Please enter number');
    }
    if (numCount = 0){
        numCount = num;
    }
    else
    {
        numCount = numCount + num;
    }

    return numCount;
}

function arrAdd(any) {
let array = [];

array.push(any);
}
function num (a, b, c) {
    console.log(arguments[0]);
    if (a > b) {

    } else {
        console.log('это число больше');
    }
    console.log(arguments[1]);
    if (b < c) {

    } else {
        console.log('это число меньше');
    }

    console.log(arguments[2]);
    if (c === a) {

    } else {
        console.log('эти числа равны');
    }

}

const a = prompt('первое число...');
const  b = prompt('второе число...');
const c = prompt('третье число...');

num(1, 2, 3);  

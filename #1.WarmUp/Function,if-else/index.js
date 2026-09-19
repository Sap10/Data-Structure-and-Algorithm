function printHelloWorld(){
    console.log('hello world!');
}

printHelloWorld();

function add(a, b){
    let sum = a + b;
    console.log(sum);
}

add(7,9);

function multiplication(a, b){
    let multiply = a * b;
    console.log(multiply);
}

multiplication(20, 8);

function square(x){
    let result = x * x;
    return result;
}

console.log(square(4));

function eligibleToVote(age){
    if(age < 0){
        return 'Invalid input!';
    }else if(age >= 18){
        return 'you are eligible to vote!';
    }else{
        return 'you are not eligible to vote';
    }
}

console.log(eligibleToVote(18));
console.log(eligibleToVote(20));
console.log(eligibleToVote(17));
console.log(eligibleToVote(-17));

/**
 * create a function to check a function is even or odd
 * 
 * @param {}
 * return 'even' or 'odd'
 */

function checkEvenOrOdd(numb){
    if(numb % 2 == 0){
        return 'even';
    }else{
        return 'odd';
    }
}

//In js there is a largest nymber is Infinity

console.log(checkEvenOrOdd(2));
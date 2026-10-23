/**
 * Sum of first n numb.
 * 
 * @param {Number} - limit
 * @returns {void} - sum
 * 
 */

let sum = 0;

function sumOfFirstNnumb(limit){
    if(limit === 0){
        return sum;
    }

    sum += limit;
    --limit;
    sumOfFirstNnumb(limit);
}

sumOfFirstNnumb(10);

console.log(sum);

//for this above code I had initialize a global variable outside of the function, thinking of that it will not store the sum value while doing the every iteration. But if we return the value then we don't have to keep a variable outside of the function. Ans : https://chatgpt.com/share/6ad5b48d-72c8-83e8-ac3d-72359cb7ad39

function sumOfFirstNnumb2(limit){
    if(limit === 0) return 0;

    return limit + sumOfFirstNnumb2(limit - 1);
}

let test2 = sumOfFirstNnumb2(10);

console.log(test2, '2nd method');

//The above function is example of recursion tree.
/**
 * Given an integer x, return true if x is a palindrome, and false otherwise. -2**31 <= x <= 2**31 - 1
 * 
 * @param {number} - x
 * @returns {boolean}
 * 
 */

// function palindromeCheck(x){
//     if((x < -(2**31)) || (x > (2**31 - 1))) return;
//     if(typeof x !== 'number') return;
//     let digits = parseInt(Math.log10(x) + 1);
//     let originalNumb = x;
//     let reservenumb = 0; 
//     for(let i = 1; i <= digits; i++){
//         if(i !== 1){
//             x = parseInt(x / 10);
//         }
//         let reminder = parseInt(x % 10);
//         reservenumb += reminder * (10 ** (digits - i));
//     }
//     if(originalNumb === reservenumb) return true;
//     else return false;
// }

function palindromeCheck(x) {
    if ((x < -(2 ** 31)) || (x > (2 ** 31 - 1))) return;
    if (typeof x !== 'number') return;
    if (x < 0) return false;
   
    let originalNumb = x;
    let reservenumb = 0;
    while(x > 0) {
        let reminder = parseInt(x % 10);
        reservenumb = reservenumb * 10 + reminder;
        x = parseInt(x / 10);
    }
    console.log(originalNumb, reservenumb);
    return originalNumb === reservenumb;
}

console.log(palindromeCheck(1000000001));
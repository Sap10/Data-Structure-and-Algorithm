/**
 * We need to print the following star pattern.
 * 
 *  ****
 *  ****
 *  ****
 *  ****
 * 
 * @param {number} - n
 * @returns {void}
 */
function starSquarePattern(n){
    let star;
    for(let i = 0; i < n; i++) {
        star = "*";
        for (let j = 0; j < n; j++) {
            star += "*";
        }
        console.log(star);
    }
}

//starSquarePattern(5);

/**
 * We need to print the following star pattern.
 * 
 *  *
 *  * *
 *  * * *
 *  * * * *
 * 
 * @param {number} - n
 * @returns {void}
 */

function starPerimidPattern(n){
    for(let i = 0; i < n; i++){
        let star = "";
        for(let j = 0; j <= i; j++){
            star += "*"; 
        }
        console.log(star);
    }
}

//starPerimidPattern(4);

/**
 * Print the following number pattern.
 * 
 *  1
 *  1   2
 *  1   2   3
 *  1   2   3   4
 *  1   2   3   4   5
 * 
 * @parm {number} - n
 * @returns {void} 
 * 
 */

function printNumberPattern(n){
    let count, numbPattern;
    for(let i = 0; i < n; i++){
        count = 1;
        numbPattern = String(count);
        for(let j = 0; j < i; j++){
            numbPattern += String(++count);
        }
        console.log(numbPattern);
    }
    return;
}

//printNumberPattern(5);

/**
 * Print the following number pattern.
 * 
 *  1
 *  2 2
 *  3 3 3
 *  4 4 4 4
 *  5 5 5 5 5
 * 
 * @param {number} - n
 * @returns {void} 
 */

function sameNumbPrintPattern(n){
    for(let i = 0; i < n; i++){
        let printNumb = "";
        for(let j = 0; j < i+1; j++){
            printNumb += String(i + 1); 
        }
        console.log(printNumb);
    }
}

//sameNumbPrintPattern(5);

/**
 * Print the following number pattern.
 * 
 *  12345
 *  1234
 *  123
 *  12
 *  1
 * 
 * @param {number} - n
 * @returns {void}
 */

function printReverceNumbPattern(n){
    for(let i = 0; i < n; i++){
        let numb = "";
        for(let j = 0; j < (n - i); j++){
            numb += String(j + 1);
        }
        console.log(numb);
    }
}

//printReverceNumbPattern(7);

/**
 * Write the following star pattern.
 * 
 *  *****
 *  ****
 *  ***
 *  **
 *  *
 * 
 * @param {number} - n
 * @returns {void}
 */

function reverseStarPattern(n){
    let x;
    for(let i = 0; i < n; i++){
        x = '';
        for(let j = 0; j < n - i ; j++){
            x += '*';
        }
        console.log(x);
    }
}

//reverseStarPattern(5);

/**
 * 
 *      *
 *     **
 *    ***
 *   ****
 *  *****
 * 
 * @param {number} - n
 * @returns {void}
 */

function starPatternVariation(n){
    let x;
    for(let i = 0; i < 5; i++){
        x = "";
        for(let j = 0; j < 5; j++){
            if(j >= (n - 1) - i){
                x += "*";
            }else{
                x += " ";
            }
        }
        console.log(x);
    }
}

//starPatternVariation(5);

/**
 * Print the following pattern.
 * 
 * 1
 * 10
 * 101
 * 1010
 * 10101
 * 101010
 * 
 * @param {number} - n
 * @returns {void}
 */

function peramidPattern(n){
    let x;
    for(let i = 0; i < n; i++){
            x = "";
        for(let j = 0; j <= i; j++){
            if(((j + 1) % 2) === 0){
                x += "0";
            }else{
                x += "1";
            }
        }
        console.log(x);
    }
}

//peramidPattern(5);

/**
 * Write a function that print following pattern
 * 
 *  1
 *  01
 *  010
 *  1010
 *  10101
 * 
 * @param {number} - n
 * @returns {void}
 * 
 */

function printNumbpattern(n){
    let digit = "";
    let val = "";
    for(let i = 0; i < n; i++){
        val = "";
        for(let j = 0; j <= i; j++){
            if(digit === "1"){
                digit = "0";
            }else{
                digit = "1";
            }
            val += digit;
        }
        console.log(val);
    }
}

printNumbpattern(5);
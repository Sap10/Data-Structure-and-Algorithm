/**
 * Print 1 to n
 * 
 * @param n {number} - The heighest number wwhere the print will stop.
 * @returns {void}
 * 
 */

function printOneToN(numb){
    let n = 8;
    console.log(numb);
    if(numb === n){
        return;
    }else{
        ++numb;
        printOneToN(numb);
    }
}

printOneToN(1);
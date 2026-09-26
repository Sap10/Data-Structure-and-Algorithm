/**
 * Print 1 to n
 * 
 * @param n {number} - The heighest number wwhere the print will stop.
 * @returns {void}
 * 
 */

function printOneToN(n){
    let numb = 1;
    console.log(numb);
    numb = numb + 1;

    if(numb === n){
        return;
    }else{
        printOneToN(numb);
    }
}

printOneToN(8);
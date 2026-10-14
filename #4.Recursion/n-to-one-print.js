/**
 * Print n to 1
 * 
 * @param n {number} - The heighest number wwhere the print will stop.
 * @returns {void}
 * 
 */

function prntNtoOne(numb){
    if(numb == 0){
        return;
    }

    console.log(numb);
    numb = numb - 1;
    prntNtoOne(numb);
}

prntNtoOne(8);
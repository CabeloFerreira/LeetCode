/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let array = s.split("");
    let roman = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };
    let total = 0;

    for(let i = 0; i < array.length; i++){
        if(roman[array[i]] < roman[array[i+1]]){
            total -= roman[array[i]];
        } else {
            total += roman[array[i]];
        }
    }

    return total;
};
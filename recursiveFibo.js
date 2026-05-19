const fibo = function(n){
    let arr = [0,1];
    function complete(arr, num = n+2){
        let next = 0;
        if(arr.length === num){
            return arr.slice(2);
        } else {
            next = arr[arr.length-2] + arr[arr.length-1];
            arr.push(next);
            return complete(arr, num);
        }
    }
    return complete(arr,n);
};

console.log(fibo(7));
/* Versão do GPT */
function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(3))

/*Versão do GPT mostrando o Array todo*/

function fiboGPT(n, arr = [0, 1]) {

    if (n <= 2) {
        return arr.slice(0, n);
    }

    if (arr.length === n+1) {
        return arr;
    }

    arr.push(
        arr[arr.length - 1] +
        arr[arr.length - 2]
    );

    return fiboGPT(n, arr);
}

console.log(fiboGPT(7));
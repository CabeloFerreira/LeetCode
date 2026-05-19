const fibo = function (n) {
    let arr = [0,1];
    for(let i = 0; i < n+1; i++){
        arr.push(arr[i]+arr[i+1]);
    }
    return arr.slice(2);
}

console.log(fibo(6));
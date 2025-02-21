

//a fibonacci number is the sum of the two las fibonacci numbers, starting at 1.
//something like this: 1:1, 2:1, 3:2, 4:3, 5:5, 6:8 ...
//fib(n) = fib(n-1) + fib(n-2)
//if n < 2, n is the fibonacci number, return it
//finally working and storing all numbers in an array!

arr = [0, 1]

function fib(n){
    if (n < 2){
        return n;
    }

    return arr[n] = fib(n - 1) + fib(n - 2);
};

console.log(fib(9))
console.log(arr)


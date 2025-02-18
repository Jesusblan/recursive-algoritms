

//a fibonacci number is the sum of the two las fibonacci numbers, starting at 1.
//something like this: 1:1, 2:1, 3:2, 4:3, 5:5, 6:8 ...
//fib(n) = fib(n-1) + fib(n-2)
//if n < 2, n is the fibonacci number, return it



function fib(n){
    if (n < 2){
        return n;
    }

    return fib(n - 1) + fib(n-2);
};

console.log(fib(9))


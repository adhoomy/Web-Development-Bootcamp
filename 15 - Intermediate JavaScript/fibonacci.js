function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆

    //Write your code here:
    if(n === 1) return [0];
    if(n === 2) return [0, 1];

    var fibonacci = [0, 1]
    for(var i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
    }

    //Return an array of fibonacci numbers starting from 0.
    return fibonacci;

    //Do NOT change any of the code below 👇
}
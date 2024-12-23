// Closure
// It refers to a function that remembers the environment in which it was created, even when it’s executed outside that environment.

// Simple Explanation:
// Imagine you have a box (the function) that contains some toys (variables). When you take the box to another room (a different part of your program), it still holds onto the toys inside it. Even if you open the box later in the new room, you can still play with the toys.

function makeAdder(x) {
    return function(y) {
        return x + y;  // This inner function remembers 'x'
    };
}

const add5 = makeAdder(5);  // 'x' is 5 here
console.log(add5(3));  // This will output 8 (5 + 3)

// makeAdder is the outer function that takes a number x.
// The inner function (the closure) takes another number y and adds it to x.
// When we call add5(3), it remembers that x was set to 5, so it adds 5 and 3 together.


// Lexical Scoping 
// is a way of determining the scope (or visibility) of variables in programming based on where they are defined in the source code. In simpler terms, it means that a function can access variables from its own scope and from any outer (parent) scopes where it was defined


// Simple Explanation:
// Think of it like a nested box system. You have a big box (the global scope) that contains smaller boxes (functions). Each smaller box can access everything inside it and in the bigger box. However, it cannot access things in smaller boxes that are inside other smaller boxes
const outerVariable = "I'm outside!";  // A variable in the global scope

function outerFunction() {
    const innerVariable = "I'm inside!";  // A variable in the outer function's scope

    function innerFunction() {
        console.log(outerVariable);  // Accessing the outer variable   //I'm outside!
        console.log(innerVariable);   // Accessing the inner variable  //I'm inside!
    }

    innerFunction();  // Call the inner function
}

outerFunction();  // This will call the outer function

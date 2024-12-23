// Log "Hello!" to the console immediately
console.log("Hello!");

// Set a timer to log a message after 2 seconds (2000 milliseconds)
setTimeout(() => {
    console.log("This message appears after 2 seconds!");
}, 1000);

// Log "Goodbye!" to the console immediately
console.log("Goodbye!");

// Output : 
// Hello!
// Goodbye!
// This message appears after 2 seconds!
let count = 0;

const intervalId = setInterval(() => 
    {
    count++;
    console.log("Count is:", count);

    // Stop the interval after 5 counts
    if (count === 5) 
        {
        clearInterval(intervalId);
        console.log("Interval stopped.");
        }
}, 1000);

// // Creating a new Promise named promise1
// const promise1 = new Promise(function(resolve, reject) {
//   // setTimeout runs a function after 1 second
//   setTimeout(function() {
//       console.log("Async task is complete");
//       resolve(); // Call resolve to indicate the promise is fulfilled
//   }, 1000);
// });

// // Now we consume the promise
// promise1.then(function() {
//   console.log("Promise Consumed");
// });

// // Output: 
// // Async task is complete
// // Promise Consumed

// new Promise(function(resolve, reject) {
//   setTimeout(function() {
//       console.log("Async task 2");
//       resolve();
//   }, 1000);
// }).then(function() {
//   console.log("Async 2 resolved");
// });

// // Output: 
// // Async task 2
// // Async 2 resolved

// // Using resolve value in then() method
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(function() {
//       console.log("Async operation");
//       resolve({ username: "Apoorv", email: "apoorvsahu678@gmail.com" });
//   }, 1000);
// });

// promise3.then(function(user) {
//   console.log(user);
// });

// // Output: 
// // Async operation
// // { username: 'Apoorv', email: 'apoorvsahu678@gmail.com' }

// // Objective: Handle success and error cases in Promises
// const promise5 = new Promise((resolve, reject) => {
//   let error = true; 
//   if (!error) {
//       resolve({ username: "Apoorv", email: "apoorvsahu678@gmail.com" });
//   } else {
//       reject('ERROR: Something went wrong'); // Reject the promise with an error
//   }
// });

// promise5
//   .then(function(user) {
//       console.log(user);
//       return user.username;
//   })
//   .catch(function(error) {
//       console.log(`Error: `, error);
//   })
//   .finally(function() {
//       console.log("The Promise has either resolved or failed");
//   });

// // Output: 
// // Error:  ERROR: Something went wrong
// // The Promise has either resolved or failed

// const promise6 = new Promise((resolve, reject) => {
//   let error = false; 
//   if (!error) {
//       resolve({ username: "Apoorv", email: "apoorvsahu678@gmail.com" });
//   } else {
//       reject('ERROR: Something went wrong'); // Use reject for errors
//   }
// });

// promise6
//   .then(function(user) {
//       console.log(user);
//       return user.username;
//   })
//   .catch(function(error) {
//       console.log(`Error: `, error);
//   })
//   .finally(function() {
//       console.log("The Promise has either resolved or failed");
//   });

// // Output: 
// // { username: 'Apoorv', email: 'apoorvsahu678@gmail.com' }
// // The Promise has either resolved or failed

// // Objective: Consume a Promise using async/await syntax, with error handling
// const promise7 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//       let error = true;
//       if (!error) {
//           resolve({ username: "javascript", password: "123" });
//       } else {
//           reject('ERROR: JS went wrong'); // Use reject for errors
//       }
//   }, 1000);
// });

// // Consume promise7 using async/await
// async function consumePromiseSeven() {
//   try {
//       const response = await promise7; // Wait for promise7 to resolve or reject
//       console.log(response);
//   } catch (error) {
//       console.log(error);
//   }
// }

// consumePromiseSeven(); // Executing the function

// // Output: ERROR: JS went wrong

// // Fetching data from an API
// async function getAllUsers() {
//   try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json(); // Convert response to JSON
//       console.log(data);
//   } catch (error) {
//       console.log("E: ", error);
//   }
// }
// getAllUsers();

// // Fetching data from GitHub API
// fetch('https://api.github.com/users/Mahul777')
//   .then((response) => {
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       return response.json(); // Handle response
//   })
//   .then((data) => {
//       console.log(data);
//   })
//   .catch((error) => console.log(error));

// // Simple Promise Example
// let fetchData = new Promise((resolve, reject) => {
//     // Simulate a network request
//     setTimeout(() => {
//         const success = false; // Change to false to simulate an error
//         if (success) {
//             resolve("Data received!"); // Operation was successful
//         } else {
//             reject("Error fetching data."); // Operation failed
//         }
//     }, 2000); // Wait for 2 seconds
// });

// // Using the Promise
// fetchData
//     .then(result => {
//         console.log(result); // This runs if the promise is fulfilled
//     })
//     .catch(error => {
//         console.log(error); // This runs if the promise is rejected
//     });

// Function to simulate fetching data
function fetchData() {
  // Return a new Promise object
  return new Promise((resolve, reject) => {
    // Set a timeout to simulate a delay of 1 second
    setTimeout(() => {
      // Resolve the promise with a success message
      resolve("Data fetched successfully");
    }, 1000); // 1000 milliseconds = 1 second
  });
}

// Function to simulate processing data
function processData(data) {
  // Return a new Promise object
  return new Promise((resolve, reject) => {
    // Set a timeout to simulate a delay of 1 second
    setTimeout(() => {
      // Resolve the promise with the processed data
      resolve(data + " and processed"); // Concatenate the original data with a new message
    }, 1000); // 1000 milliseconds = 1 second
  });
}

// Function to simulate displaying data
function displayData(data) {
  // Return a new Promise object
  return new Promise((resolve, reject) => {
    // Set a timeout to simulate a delay of 1 second
    setTimeout(() => {
      // Log the data to the console
      console.log(data);
      // Resolve the promise indicating the display is complete
      resolve("Display complete");
    }, 1000); // 1000 milliseconds = 1 second
  });
}

// Chain the promises
fetchData() // Call fetchData function to initiate the process
  .then(result => { // Handle the resolved value from fetchData
    console.log(result); // Output: "Data fetched successfully"
    return processData(result); // Pass the result to processData and return the promise
  })
  .then(result => { // Handle the resolved value from processData
    console.log(result); // Output: "Data fetched successfully and processed"
    return displayData(result); // Pass the result to displayData and return the promise
  })
  .then(result => { // Handle the resolved value from displayData
    console.log(result); // Output: "Display complete"
  })
  .catch(error => { // Handle any errors that occur in the promise chain
    console.error("An error occurred:", error); // Log the error message to the console
  });

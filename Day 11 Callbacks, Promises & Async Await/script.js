function getData(dataId) {
  setTimeout(() => {
    console.log("Data", dataId);
    console.log("Is this printed after 2 seconds or not?");
  }, 2000);
}
getData(5); // call the function and getData is 5

// Now learning the promises 
// its mean when we order something from the online shop 
// its have 2 option resolve or reject so actually the promieses work like for that.

let promies = new Promise((resolve, reject) =>{ 
  // when the work is done sucessfully the resolve is evoked
  //  and when work is not sucessfully done the reject is envoked.
  console.log("I am a Promise");
  // promise have 3 state 1.Pending 2.Fullfilled 3.Rejected
  // want to buld some real life example in promieses.
}
);


// A Promise represents the eventual result of an asynchronous operation.

// Imagine you're ordering a pizza. You don't get the pizza instantly.
// You get a promise that you'll get it later.

// Creating a Promise:
const myPizzaPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation (like fetching data or a timer)
  setTimeout(() => {
    const pizzaReady = Math.random() > 0.3; // Randomly decide if pizza is ready

    if (pizzaReady) {
      // If the operation is successful, call 'resolve' with the result.
      resolve("Delicious pizza!"); // Pass the result (the pizza)
    } else {
      // If the operation fails, call 'reject' with an error.
      reject("Sorry, the pizza oven broke!"); // Pass the error message
    }
  }, 2000); // Simulate a 2-second delay
});

// Using the Promise:
myPizzaPromise
  .then((pizza) => {
    // 'then' is called when the Promise resolves (success).
    console.log("Success:", pizza); // Print the pizza message
    //Perform other actions with the pizza
  })
  .catch((error) => {
    // 'catch' is called when the Promise rejects (failure).
    console.error("Error:", error); // Print the error message.
    //Handle the error, like offering a refund.
  })
  .finally(()=>{
    //'finally' is called whether the promise resolves or rejects.
    console.log("Order processing complete.")
  });

// Example with a function that returns a Promise:

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        resolve(data); // Resolve with the parsed data
      })
      .catch((error) => {
        reject(error); // Reject with the error
      });
  });
}

// Using the fetchData function:
fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then((todo) => {
    console.log("Todo:", todo);
  })
  .catch((error) => {
    console.error("Fetch Error:", error);
  });

// Example with async/await (cleaner syntax for Promises):

async function getTodo() {
  try {
    const todo = await fetchData("https://jsonplaceholder.typicode.com/todos/1");
    console.log("Async/Await Todo:", todo);
  } catch (error) {
    console.error("Async/Await Error:", error);
  } finally {
      console.log("Async/await operation complete.")
  }
}

getTodo();

//Key concepts:
// 1. Pending: The initial state; neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.
// .then(): Handles the fulfilled state.
// .catch(): Handles the rejected state.
// .finally(): Handles the completion, regardless of success or failure.
// async/await: Cleaner syntax for working with Promises.


function hamza() {
  return new Promise((resolve, reject) => { // Corrected: Promise
    setTimeout(() => {
      console.log("Some Data");
      resolve("Hamza");
    }, 2000);
  });
}

console.log("Fetching Data......");
let p1 = hamza();
p1.then((data) => {
  console.log("Data Fetched", data);
});


/*This is the fetch APIS using the js concept*/
// This is work for the fetch API and this is actual methos to call the APIS in the js.
const URL = "https://api.thecatapi.com/v1/facts";
 const getFacts = async () => {
  console.log("Fetching Data......");
  let promise = await fetch(URL);
  console.log(promise);
  let data = await promise.json();
  console.log(data);
 }
 getFacts();
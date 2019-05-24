// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
    return cb(arr.length);
}

getLength(items, (len) => {
    console.log("This is the length of items array: " + len);
});

// ----------------------------------------------------------
function last(arr, cb) {
    // last passes the last item of the array into the callback.
    return cb(arr[arr.length - 1]);
}

last(items, (el) => {
    console.log("This is the last item of the array: " + el);
});

// -----------------------------------------------------------
function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
    return cb(x + y);
}

sumNums(1, 2, (sum) => {
    console.log("this is the sum of 1 and 2: " + sum)
});

// -----------------------------------------------------------
function multiplyNums(x, y, cb) {
    // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb(x * y);
}

multiplyNums(2, 4, (num) => {
    console.log("This is the product of 2 and 4: " + num);
});

// -----------------------------------------------------------
function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
    let isTrue = list.find((fItem) => {
        return fItem === item
    });
    cb(isTrue);
}


contains("Gumasdsad", items, (el) => {
    if (el === true) {
        console.log("Item found: true");
    } else {
        console.log("Item found: false");
    }
});






/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
    // console.log(array.map());
}
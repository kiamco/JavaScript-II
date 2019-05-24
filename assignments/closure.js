// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// first example
const add = (x) => {
    return (y) => {
        return x + y;
    }
};

let base1 = add(1);
console.log(base1(7));



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
    let count = 0;
    return () => {
        return count++;
    }
};
// Example usage: const newCounter = counter();
const sample = counter(); // 1

console.log(sample());
console.log(sample());
console.log(sample());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    //     let counter = 0;

    //     const obj = {
    //         "increment": () => {
    //             return counter++;
    //         },
    //         "decrement": () => {
    //             return counter--;
    //         }


    //     }

    //     let sample2 = counterFactory();
    //     console.log(sample2().increment());
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
};
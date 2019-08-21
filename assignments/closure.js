// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const closureVar = 'Hi from outside!';

function closure () {
  return function () {
    return closureVar;
  }
}

console.log(closure()());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  let count = 0;
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  function counter () {
    return count++;
  }
  // 3- Return the `counter` function.
  return counter;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

const myCounter = counterMaker();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

const counterMaker2 = (limit) => {
  let count = 0;
  function counter () {
    if (count <= limit) {
      return count++;
    } else {
      count = 0;
      return count;
    }
  }
  return counter;
}

const myCounter2 = counterMaker2(1);
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  return {
    count: 0,
    increment: function () {
      this.count++;
    },
    decrement: function () {
      this.count--;
    }
  }
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
}

const myCounter3 = counterFactory();
console.log(myCounter3.count + ' initial value');
myCounter3.increment();
console.log(myCounter3.count + ' after increment');
myCounter3.decrement();
console.log(myCounter3.count + ' after decrement');
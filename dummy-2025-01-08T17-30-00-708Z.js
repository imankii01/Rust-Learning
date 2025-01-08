
// filepath: /Users/ankit/development/simple-git/repo/Rust-Learning/dummy-2025-01-08T17-30-00-708Z.js
function multiply(a, b) {
      return a * b;
    }

function helloWorld() {
      console.log('Hello, world!');
    }

function divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    }

module.exports = { helloWorld, add, subtract, multiply, divide };

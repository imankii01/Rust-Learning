
// filepath: /Users/ankit/development/simple-git/repo/Rust-Learning/dummy-2025-01-04T15-30-00-109Z.js
function add(a, b) {
      return a + b;
    }

function divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    }

function multiply(a, b) {
      return a * b;
    }

module.exports = { helloWorld, add, subtract, multiply, divide };

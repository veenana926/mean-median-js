// productCondition.js
// Accepts one OR many integers per line.
// Checks if any two multiply to a third.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const nums = [];

function findProductCondition(arr) {
  if (arr.length < 3) return null;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const product = arr[i] * arr[j];
      for (let k = 0; k < arr.length; k++) {
        if (k !== i && k !== j && arr[k] === product) {
          return { a: arr[i], b: arr[j], c: arr[k] };
        }
      }
    }
  }
  return null;
}

function finish() {
  console.log("\nYou entered:", nums);

  const result = findProductCondition(nums);
  if (result) {
    console.log(`Condition is met: ${result.a} x ${result.b} = ${result.c}`);
  } else {
    console.log("Condition was not met");
  }

  rl.close();
}

function promptUser() {
  rl.question("Enter integer(s) or 'q' to quit: ", (input) => {
    const trimmed = input.trim();

    if (trimmed.toLowerCase() === "q") {
      finish();
      return;
    }

    // 🔥 THIS IS THE KEY PART — split list input
    const parts = trimmed.split(/[,\s]+/);

    for (const p of parts) {
      const n = Number(p);
      if (!Number.isInteger(n)) {
        console.log("Error: Please enter only integers or q.");
        promptUser();
        return;
      }
      nums.push(n);
    }

    promptUser();
  });
}

promptUser();

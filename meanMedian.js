const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function askForNumber() {
    rl.question("Enter an integer (or 'q' to quit): ", (input) => {

        if (input.toLowerCase() === 'q') {
            if (numbers.length === 0) {
                console.log("No numbers entered.");
            } else {
                calculateResults();
            }
            rl.close();
            return;
        }

        let num = parseInt(input);

        if (isNaN(num)) {
            console.log("Invalid input. Please enter an integer.");
        } else {
            numbers.push(num);
        }

        askForNumber(); 
    });
}

function calculateResults() {
    let sum = numbers.reduce((a, b) => a + b, 0);
    let mean = sum / numbers.length;

    let sorted = [...numbers].sort((a, b) => a - b);
    let median;
    let mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        median = (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        median = sorted[mid];
    }

    console.log("Numbers:", numbers);
    console.log("Mean:", mean);
    console.log("Median:", median);
}

askForNumber();

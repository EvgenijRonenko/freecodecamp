041
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

042
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

043
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(['dog', 3]);

044
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
let removedFromMyArray = myArray.pop();

045
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
let removedFromMyArray = myArray.shift();

046
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(['Paul', 35]);

047
const myList = [
    ['Chocolate Bar', 15],
    ['Tomato', 3],
    ['Meat', 5],
    ['Eggs', 10],
    ['Beer', 20],
    ['Fish', 2]
];

048
function reusableFunction () {
    console.log('Hi World');
}
reusableFunction();

049
function functionWithArgs (num1, num2) {
    console.log(num1 + num2);
}

functionWithArgs(2, 3);

050
function timesFive(num) {
    return num * 5;
}

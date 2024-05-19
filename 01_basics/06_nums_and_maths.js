// ++++++++++++++++  Number  +++++++++++++++++++ //
const score = 400

const balance = new Number(400)
console.log(score);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 400.00

const otherNumber = 23.558544

console.log(otherNumber.toPrecision(2));// 24

const anotherNumber = 1000000000

console.log(anotherNumber.toLocaleString()); // 1,000,000,000


// +++++++++++++++++++++ Maths +++++++++++++//

console.log(Math);
console.log(Math.abs(-6)); // -6 => 6
console.log(Math.round(5.5)); // 5.5 => 6
console.log(Math.ceil(4.9)); // 4.9 => 5
console.log(Math.floor(1.2)); // 1.2 => 1
console.log(Math.max(4, 5, 7)); // => 7
console.log(Math.min(4, 5, 7)); // => 4

console.log(Math.random()); // every time generate a random number between 0 and 1

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random()*(max - min + 1)) + min);

const min = 10
const max = 100

console.log(Math.floor(Math.random()*(max - min + 1)) + min);






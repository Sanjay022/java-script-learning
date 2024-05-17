const name = "SanjayBakoliya"
const repoCount = 50;

console.log(name + repoCount +  "value");
console.log(`Hello my name is ${name} and this is my repo count ${repoCount}`);


const gameName = new String("Sanjay-BB")

console.log(gameName[2]); // => n
console.log(gameName.__proto__); // => {}

console.log(gameName.length); // => 8
console.log(gameName.toUpperCase()); // => SANJAYBB

console.log(gameName.charAt('2')); // => n  he print the value of 2 position

console.log(gameName.indexOf('j')); // => 3 he print the position of key  

const newString = gameName.substring(0, 4)
console.log(newString); // => Sanj   

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); //=> anj

const newStringOne = "   Sanjay   "
console.log(newStringOne);
console.log(newStringOne.trim());

const newStringTwo = "http://sanjay.com/sanjay%20bakoliya"
console.log(newStringTwo.replace("%20", "-"));
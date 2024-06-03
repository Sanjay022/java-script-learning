const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr);

myArr.push(6)
myArr.pop()

console.log(myArr);
console.log(myArr);

myArr.unshift(9);

console.log(myArr);

console.log(myArr.includes(7));
console.log(myArr.indexOf(3));

const myArr2 = myArr.slice(1, 3)
const myArr3 = myArr.splice(1, 3)

console.log(myArr2);
myArr.join()
console.log(myArr3);
console.log(myArr);

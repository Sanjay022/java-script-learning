
const myDate = new Date()

console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());


const myCreatedDate =  new Date(2026, 6, 22)
const myCreatedDate2 =  new Date(2027, 6, 22)
const myCreatedDate3 =  new Date(2028, 6, 22)
const myCreatedDate4 =  new Date(2029, 6, 22)
const myCreatedDate5 =  new Date(2030, 6, 22)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate3.toDateString());
console.log(myCreatedDate4.toDateString());
console.log(myCreatedDate5.toDateString());

const newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDate());

 console.log(newDate.toLocaleString('default',{
    weekday: "short"
}))




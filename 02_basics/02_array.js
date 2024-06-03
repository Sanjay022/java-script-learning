const marvel_heros = ["thor", "Ironman", "hulk"] 
const dc_heros = ["superman", "flash", "aquaman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

const new_heros = marvel_heros.concat(dc_heros)

console.log(new_heros);

const another_heros = [...marvel_heros, ...dc_heros]

console.log(another_heros);

// +++++++++++++ flate

const new_array = [1,2,3,[4,5,[6,7,8]]]

console.log(new_array.flat(Infinity));

console.log(Array.isArray("hitesh"));
console.log(Array.from("sanjay"));

let a = 144
let b = 144
let c = 144

console.log(Array.of(a, b, c));
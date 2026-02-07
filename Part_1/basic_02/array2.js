const heros = ["Quaid", "Iqbal", "Muhammad"];
const hero2 = ["nadir", "hamza", "iqbal"]
// heros.push(hero2)


// console.log(heros)
// console.log(heros[3][0])

// const all = heros.concat(hero2)
// console.log(all)

const all_new = [...heros, ...hero2]
// console.log(all_new)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Nadir"))
console.log(Array.from("Nadir"))


console.log(Array.from({name: "Nadir"}))
//will return empty array because it is not iterable, but if we add length property then it will return array with undefined values


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
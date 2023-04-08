let person1 = prompt("Enter your name")
let person2 = prompt("Enter their name")
let rand = Math.random()
console.log(rand)
let number = (rand*100) + 1
let loveNumber = Math.floor(number)

if((person1 != null && person1 != "") && (person2 != null && person2 != "")) {

alert(`Love number is ${loveNumber}%`)
}

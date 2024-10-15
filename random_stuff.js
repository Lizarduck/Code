let numberOne = prompt(`Pick a number`);
let numberTwo = prompt(`Pick some other number`);
let sum = parseFloat(numberOne) + parseFloat(numberTwo);
alert(sum);

let randomLetters = "nvkjhbsekhrb";
randomLetters.charAt(4);

if (!city) {
  alert("City is a required field");
}

let symbol1 = Symbol(`mysymbol`);
let symbol2 = Symbol(`mysymbol`);
symbol1 === symbol2;

x = x ^ 2;

Boolean(0 == `0`);

let userName = prompt(`What is your name?`);
let welcomeMessage = alert(`Welcome, ` + userName);

let wiggle = 23;
if (
  wiggle === 20 ||
  wiggle === 21 ||
  wiggle === 22 ||
  wiggle === 23 ||
  wiggle === 24 ||
  wiggle === 25 ||
  wiggle === 26 ||
  wiggle === 27 ||
  wiggle === 28 ||
  wiggle === 29
) {
  bingles = "yes";
}

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

for (let bogus = 300; bogus <= 1; bogus--) {
  console.log(bogus);
}

const pets = [`cat`, `dog`, `chicken`];
for (let pet of pets) {
  console.log(pet);
}

let text = `callum`;
for (character of text) {
  console.log(character);
}
let phoneNumber = `555-757-1212`;
for (let digit of phoneNumber) {
  if (digit === `-`) continue;
  console.log(digit);
}

const box = [1, 4, 8, 1, 2];

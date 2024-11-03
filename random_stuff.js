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

for (let i = 1; i <= 320000; i++) {
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

const myArray = [3434, 56, 2];
let total = 0;
for (let i = 0; i < myArray.length - 1; i++) {
  total += myArray[i];
}
console.log(`${total}`);

function squareIt(num) {
  return num * num;
}

function doMath(value, mathToDo) {
  let result = mathToDo;
  return result;
}

let prices = [4.99, 3, 98, 54.99];
let theTotal = prices.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
theTotal;

const ingredients = [
  "eggs",
  `milk`,
  `cheese`,
  `garlic`,
  `onion`,
  `kale`,
  `salt`,
  `pepper`,
];
let listItems = ingredients.map(
  (singleIngredient) => `<li>${singleIngredient}</li>`
);

const animalNames = [
  `aardvark`,
  `alligator`,
  `alpaca`,
  `boar`,
  `beaver`,
  `cat`,
  `dog`,
  `elephant`,
];
const animalsStartingWithA = animalNames.filter((animal) =>
  animal.startsWith(`a`)
);

const person = { eyes: 2, feet: 2, eyeColor: `brown` };

function Cat(name, type) {
  this.name = name;
  this.type = type;
}
const ourCat = new Cat(`murray`, `domestic short hair`);

class Kaiju {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

const newKaiju = new Kaiju(`Godzilla`, `Irradiated reptile`);

function Kaiju(name, description) {
  this.name = name;
  this.description = description;
}

const myHouse = {
  rooms: {
    bedrooms: 2,
    bathrooms: 2,
  },
  city: {
    population: 1000,
    name: `San Francisco`,
  },
};

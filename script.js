'use strict';
const quiz = new Map([
  ['quiz', 'What is the best programming language in the world?'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(quiz);

// quiz app

console.log(quiz.get('quiz'));
for (const [key, value] of quiz) {
  if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
}
//const answer = Number(prompt('your answer'));
const answer = 3;
console.log(answer);

console.log(quiz.get(quiz.get('correct') === answer));

// convert map into array
console.log([...quiz]);
console.log([...quiz.entries()]);
console.log([...quiz.values()]);
console.log([...quiz.keys()]);

// conver object to maps
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
};
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

const categories = ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'];
const categoriesMap = new Map(Object.entries(categories));
console.log(categoriesMap);

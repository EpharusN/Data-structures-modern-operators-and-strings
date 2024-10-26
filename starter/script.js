'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} and will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your yummmy pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const rest1 = {
  name: 'Lavida restaurant',
  // numGuests: 10,
  numGuests: 0,
};
const rest2 = {
  name: 'Lamalina restaurant',
  owner: 'Rossi',
};

// rest1.numGuests = rest1.numGuests || 5;
// rest2.numGuests = rest2.numGuests || 5;

// rest1.numGuests ||= 5;
// rest2.numGuests ||= 5;

rest1.numGuests ??= 5;
rest2.numGuests ??= 5;

// rest1.owner = rest1.owner && '<Anonymus>';
// rest2.owner = rest2.owner && '<Anonymus>';

rest1.owner &&= '<Anonymus>';
rest2.owner &&= '<Anonymus>';
console.log(rest1, rest2);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

//destructuring an array you do const [ give an following letters eg a,b,c, i,j,k, x,y,z etc]
//then assign to the array you have given to your array
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const [i, j, k] = arr;
// console.log(i, j, k);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

/* switching variables*/
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // const [starterMenu, mainMenu] = this.starterMenu;
// // console.log(first, second);

// //receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //destructering nested arrays

// const nested = [2, 4, [5, 6]];
// // const [d, , e] = nested;
// // console.log(nested);

// //destructing nested of nested array

// const [d, , [e, f]] = nested;
// console.log(d, e, f);

// //destructring when you dont know the number of arrays
// //default values

// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// // destructuring objects
// //we use the curly braces {} just like how we write objects

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Kinunge Drive, Ruaka',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating objects
// let a = 111;
// let b = 999;
// const obj = { a: 3, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [3, 6, 7];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newCategories = [...restaurant.categories, 'Kenyan', 'Swahili'];
// console.log(newCategories);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuu);

// //iterables are arrays, strings, maps, sets, NOT objects

// const str = 'summer';
// const letters = [...str, '', 's.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt('lets make pasta! Ingredient 1?'),
//   prompt('ingredient 2?'),
//   prompt(`ingredient3`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //objects

// const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Tee' };
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Sean';
// console.log(restaurant.name);

// console.log(restaurantCopy.name);
// console.log(newRestaurant);

//rest pattern and parameters
//spread because of the right hand side
// const arr = [1, 2, ...[3, 4]];

// //rest because of the left hand side
// const [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(a, b, rest);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('olives');

// //short circuiting && and ||
// //can use any data type and return any data type, short-circuiting

// console.log('___OR___');
// console.log(3 || 'summer'); //3
// console.log('' || 'summer'); //summer
// console.log(true || 0); //true
// console.log(undefined || null); //null

// console.log(undefined || 0 || '' || 'Summer' || 23 || null);

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);
// //when there is one false the operation is terminated and the false value is returned
// console.log('____AND____');
// console.log(0 && 'summer');
// console.log(true && false);
// console.log(7 && 'summer');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// //the or operator will return the first truthy value of all the operands or the last value if all are falsy
// //the and operator will return the first falsy value or the last value if all are truthy
// // || used in application to set default value  and the && operator is used to execute code in the second operand if the first is true

// //The nullish coalescing operator ?
// // restaurant.numGuests = 0;
// //nullish: null and undefined (not 0 or "" it takes these as truthy values)
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

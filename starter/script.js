'use strict';

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
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
  //enhanced ES6 object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} and will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your yummmy pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// const rest1 = {
//   name: 'Lavida restaurant',
//   // numGuests: 10,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'Lamalina restaurant',
//   owner: 'Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 5;
// // rest2.numGuests = rest2.numGuests || 5;

// // rest1.numGuests ||= 5;
// // rest2.numGuests ||= 5;

// rest1.numGuests ??= 5;
// rest2.numGuests ??= 5;

// // rest1.owner = rest1.owner && '<Anonymus>';
// // rest2.owner = rest2.owner && '<Anonymus>';

// rest1.owner &&= '<Anonymus>';
// rest2.owner &&= '<Anonymus>';
// console.log(rest1, rest2);

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

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// console.log(game.players);

// // Coding Challenge #1
// // We're building a football betting app (soccer for my American friends 😅)!
// // Suppose we get data from a web service about a certain game ('game' variable on
// // next page). In this challenge we're gonna work with that data.
// // Your tasks:
// // 1. Create one player array for each team (variables 'players1' and
// // 'players2')
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2. The first player in any player array is the goalkeeper and the others are field
// // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // field players
// // spead operator for the rest ...fieldPlayers gk for goalkeeper
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22
// // players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// // // 5. Based on the game.odds object, create one variable for each odd (called
// // 'team1', 'draw' and 'team2')

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // names (not an array) and prints each of them to the console, along with the
// // number of goals that were scored in total (number of player names passed in)
// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator.

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
// // Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// // Then, call the function again with players from game.scored
// // GOOD LUCK 😀

// //the for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //item logged 1 by 1
// for (const item of menu) console.log(item);

// // for (const item of menu.entries()) {
// //   console.log(`${item[0]+1 }; ${item[1]}`);
// // }
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

/*
Enhanced Object literal
removing the function keyword that is the () and the : colon
declaring objects separately and chaining them with the main object; in the restaurant object, I can remove the hours and call them in the restaurant object again
for the weekdays, i can also remove the days and chain them in the weekdays and call them using the weekday and the index of the day i want
*/

//optional chaining ?
if (restaurant.openingHours && restaurant.openingHours.Mon)
  console.log(restaurant.openingHours.Mon?.open);

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//arrays
// const users = [{ name: 'summer', email: 'hey@summer.io' }];
const users = [];
console.log(users[0]?.name ?? 'user array is empty');

//looping objects : Objects keys, values and entries

//property name
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `we are open on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

//property values
// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

for (const [i, player] of game.scored.entries()) {
  console.log(` Goal ${i + 1} ${player}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
// GOOD LUCK 😀

//just like an array, sets are also iterable
const ordersSet = new Set(['pasta', 'pizza', 'pasta', 'risotto', 'pizza']);

console.log(new Set('summer'));
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('milk');
ordersSet.delete('pasta');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['pasta', 'pizza', 'pasta', 'risotto', 'pizza']).size);
console.log(new Set('summer').size);

//maps are useful than sets// they are used to map values to keys //key:value pairs
//in maps keys can have any type of keys //many types of keys like objects etc
//the best way to work with map is to create an empty map and pass in values to it
//set is a method in the map constructor function
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'vegetarian', 'organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :(');
console.log(rest.get('name'));
console.log(rest.get(false));
console.log(rest.get(2));

// const time = 10;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

rest.set([1, 2], 'Test');

console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try Again'],
]);

console.log(question); //

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your Answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//convert map to array

console.log(...question);
console.log([...question.keys()]);
console.log([...question.values()]);

//WHICH DATA TO USE

//ARRAYS VS. SETS AND OBJECTS VS MAPS
//ARRAYS VS SETS
//ARRAYS                                  //SETS
// tasks =['code', 'Eat', 'code']           task = new Set(['code', 'Eat', 'code'])
//['code', 'Eat', 'code']                         //['code', 'Eat']

//use when you need ordered list            //use when you need to work with unique values
//of values(might contain duplicates)       //use when high performance is really important
//use when you need to manipulate data      //use to remove duplicates in an array

//OBJECTS VS MAPS

//OBJECTS                                                           //MAPS
// task ={                                                          task ={                                                                  }
//   task: 'code',                                                  ['task': 'code'],
//   date: 'today',                                                 ['code':, 'today']
//   repeat: true                                                    [false, 'start coding']
//       }                                                               ]}

/*
= more 'traditional' key/value store ('abused' , objects)           // better performance
= easier to write and access values with . and []                   //keys can have any data type
= use when when you need to include functions(method)               //easy to iterate
= use when working with JSON (can convert to map)                   //easy to computer size
                                                                    // use when you simply need to map key to values   
                                                                    //use when you need keys that are not strings                                                           
*/
// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// ⚽
// [FIRST HALF] 17:
// GOAL
// GOOD LUCK 😀
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1.
const events = [...new Set(gameEvents.values())];

//2.
gameEvents.delete(64);

//3
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on
  average, every ${time / gameEvents.size} minutes`);

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

//working with strings
const airline = 'The Kenya Airways';
const plane = 'B730';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);
console.log('B730'.length);
console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('Airways'));

console.log(airline.slice(3));
console.log(airline.slice(3, 9));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are the middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('summer'));
console.log(typeof new String('summer'));
console.log(typeof new String('summer').slice(1));


//fix capitalization in name
const passenger = 'jONas' //Jonas
const lowerPassenger = passenger.toLowerCase()

const upperPassenger = lowerPassenger.charAt(0).toUpperCase() + lowerPassenger.slice(1)
console.log(upperPassenger)

//check email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail)

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email ===normalizedEmail);


//replace 

const priceGB = '287,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23';

// console.log(announcement.replaceAll('door', 'gate'))

console.log(announcement.replace(/door/g, 'gate'))

//Booleans
const plant = 'Airbus A320neo';
console.log(plant.includes('A320'));
console.log(plant.includes('Boeing'));
console.log(plant.startsWith('A3'));

if(plant.startsWith('Airbus')&& plant.endsWith('neo')){
  console.log('Part of the new Airbus family')
}

const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun') || baggage.includes('spear')){
    console.log('You are under arrest')
  }else {
    console.log('Welcome aboard')
  }

}

checkBaggage('I have a gun, Knife and food');
checkBaggage(' socks and camera');
checkBaggage('Got some snacks and a spear for protection')
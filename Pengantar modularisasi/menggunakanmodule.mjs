//Cara ekspor variable
export const nama = 'John Doe';

//Export array
export const favoriteFood = ['pizza', 'pasta', 'sushi'];

//Eksport function, langsung biar ga ribett
const name = 'John';
const favoriteFood = ['pizza', 'pasta', 'sushi'];
 
function sayHi(name) {
  console.log(`Hi, ${name}!`);
}
 
export { name, favoriteFood, sayHi };

//Impor variable
import { name, favoriteFood } from './module.mjs';
import { name, favoriteFood as food } from './module.mjs';


//Impor function
import { name, favoriteFood as food, sayHi } from './module.mjs';
import * as user from './module.mjs';
 
console.log(user.name);
console.log(user.favoriteFood);
user.sayHi(user.name);
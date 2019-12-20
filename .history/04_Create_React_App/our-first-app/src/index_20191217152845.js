import foods from './foods'
import {choice, remove} from './helpers'

// Randomly draw a fruit from the array
let fruit = choice(foods);
// Log the message "I'd like one RANDOMFRUIT, please"
console.log(`I'd like one ${fruit}, please`);
// Log the "Here you go: RANDOMFRUIT"
console.log(`Here you go: ${fruit}`);
// Log the message "Delicious! May I have another?"
// Remove the fruit from the array of fruits
// Log the message "I'm sorry, we're all out. We have FRUITSLEFT left" 
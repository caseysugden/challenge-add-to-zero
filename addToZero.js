// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
addToZero = true;

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i === j) { continue; }
    if (array[i] + array[j] === 0) {
      return console.log(`${addToZero} ${array[i]} ${array[j]}`);
    }
  }
}

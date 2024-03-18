let myArray = [];

myArray[0] = 'Dave';
myArray[1] = 2;
myArray[2] = true;

myArray.push('Push');
myArray.unshift(42);
console.log(myArray);
console.log(myArray.pop());
console.log(myArray.shift());
myArray.splice(1, 0, 43)
console.log(myArray);

const array = ['A', 'B', 'C', 'D', 'E'];
console.log(array.slice(1,4));
console.log(array.reverse());

const joinString = array.join(',');
console.log(joinString);
console.log(joinString.split(','));

const array1 = ['X', 'Y', 'Z'];
const array2 = ['a', 'b', 'c'];

// const newArray = array1.concat(array2);
const newArray = [...array1, ...array2];
console.log(newArray);
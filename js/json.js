const myObj = {
    name: 'Dave',
    hobbies: ['eat', 'sleep', 'repeat'],
    hello: () => console.log('Hello')
}

console.log(myObj);
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
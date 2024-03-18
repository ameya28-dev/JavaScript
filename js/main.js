// // const myVariable = "Hello World!";
// // console.log(myVariable.length);
// // console.log(myVariable.charAt(0));
// // console.log(myVariable.indexOf("z"));
// // console.log(myVariable.lastIndexOf("l"));
// // console.log(myVariable.slice(5));
// // console.log(myVariable.slice(8,15));
// // console.log(myVariable.slice(5,2));
// // console.log(myVariable.slice(9,10));
// // console.log(myVariable.toUpperCase());
// // console.log(myVariable.toLowerCase());
// // console.log(myVariable.includes('H'));
// // console.log(myVariable.split('l'));

// const myNumber = 42;
// const float = 41.02;
// let myString ="42";
// console.log(float);
// console.log(myString === myNumber);
// console.log(Number(myString));
// console.log(Number("ellonakj"));
// console.log(Number(true));
// console.log(Number.isInteger(myNumber));
// console.log(Number.parseFloat("4678.2cakjac8"));
// console.log(Number.parseFloat("4678.78970").toFixed(2));
// console.log(typeof(Number.parseFloat("4678.78970").toFixed(2)));
// console.log(Number.isNaN("Dave"));
// console.log(isNaN(578986));

// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(Math.PI));
// console.log(Math.ceil(Math.PI));
// console.log(Math.floor(Math.PI));
// console.log(Math.pow(2, 0.5));
// console.log(Math.min(2, 0.5, 10, -1, 89));
// console.log(Math.max(2, 0.5, 10, -1, 89));
// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);


// const myName = "AmeyaGMahale";
// // console.log(myName.length)
// // console.log(Math.floor(Math.random()*(myName.length)))
// console.log(myName.charAt(Math.floor(Math.random()*(myName.length))));

// let soup = "Chicken noodle soup";
// let reply;
// if(soup){
//     reply = `Here's your ${soup}`;
// }else{
//     reply = "We are out of soup";
// }
// console.log(reply);

// alert("Hello World!");
let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);

let yourName = prompt("Please enter your name:");
console.log(yourName ?? "No name");
const myObject = {
    name : "Ameya",
    hobbies: ['Eat',  'Sleep', 'Repeat'],
    logName : function(){
        console.log(this.name);
    }
}

const myArray = ['Eat',  'Sleep', 'Repeat'];

myObject.logName();
localStorage.setItem('SetStorage', JSON.stringify(myObject));
console.log(JSON.parse(localStorage.getItem('SetStorage')));

console.log(localStorage.key(0));
console.log(localStorage.length);
localStorage.removeItem("SetStorage");
localStorage.clear();
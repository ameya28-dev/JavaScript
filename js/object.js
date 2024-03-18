const myObj = { Name: 'Ameya' };
console.log(myObj);

const anotherObj = {
    alive: true,
    answer: 22,
    hobbies: ['Eat', 'sleep', 'repeat'],
    beverage: {
        morning: 'coffee',
        evening: 'tea'
    },
    action: (value) => `Hello World ${value}`
};

console.log(anotherObj.beverage.morning);
console.log(anotherObj['alive']);
console.log(anotherObj.action('Dave'));

const Vehicle = {
    wheels: 4,
    engine: () => "Vroom"
};

const truck = Object.create(Vehicle);
truck.door = 2;
truck.engine = () => 'Whooosh';
console.log(truck);
console.log(truck.wheels);
const car = Object.create(truck);
console.log(car.engine());



const band = {
    vocals: 'Robert Plant',
    guitar : 'Jimmy Page',
    drum: 'John Bonham',
    bass: 'John Paul Jones'
};

delete band.drum;
console.log(band.hasOwnProperty('drum'));

console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
    console.log(`On ${job}, it is ${band[job]}`);
}

const {guitar: myGuitar, bass: myBass} = band;
console.log(myGuitar);
console.log(myBass);
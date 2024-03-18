class Pizza{
    constructor(pizzaType){
        this.type = pizzaType;
        // this.size = 'medium';
        this.crust = 'thin-crust';
        // this.toppings = [];
    }

    // get pizzaCrust(){
    //     return this.crust;
    // }

    // set pizzaCrust(crust){
    //     this.crust = crust;
    // }

    getCrust(){
        return this.crust;
    }

    setCrust(crust){
        this.crust = crust;
    }

    // getToppings(){
    //     return this.toppings;
    // }

    // setToppings(topping){
    //     this.toppings.push(topping);
    // }

    // bake(){
    //     console.log(`Baking a ${this.size}, ${this.crust}, ${this.type} pizza`)
    // }
}

class SpecialtyPizza extends Pizza {
    constructor(pizzaType){
        super(pizzaType);
        this.type = 'It works';
    }

    slice(){
        console.log(`Our ${this.type} ${this.pizzaType} pizza`);
    }
}

let pizza = new SpecialtyPizza('Thin-crust');
pizza.slice();
// let pizza =new Pizza('pepperoni');
// pizza.setCrust('cheese burst');
// pizza.bake();
// console.log(pizza.getCrust());
// pizza.setToppings('sausage');
// pizza.setToppings('pineapple');
// console.log(pizza.getToppings());


function pizzaFactory(pizzaSize){
    const crust = 'original';
    const size = pizzaSize;
    
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    }
}

let newPizza = pizzaFactory('small');
newPizza.bake();

class Cookie{
    crust = 'original';
    #sauce = 'strawberry';
    #size;
    constructor(size){
        this.#size = size;
    }
}

let cookie = new Cookie('small');
cookie.crust;
console.log(cookie.crust);


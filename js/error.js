
'use strict'
let variable = "Dave";
console.log(variable);

// Object..create();



const makeError = () =>{
    try{
        throw new customError('This is a custom error');
    } catch (ex){
        console.table(ex);
        console.error(ex.name);
        console.error(ex.message);
        console.error(ex.stack);
    } finally{
        console.log('Function completed');
    }
}

makeError();

console.log('program continues');

function customError(message){
    this.name = 'Custom error';
    this.message = message;
    this.stack = `${this.name} ${this.message}`;
}
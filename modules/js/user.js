export default class User{
    constructor(email, name){
        this._id = email;
        this._name = name;
    }

    greeting(){
        return `This is the ${this._name}`;
    }
}
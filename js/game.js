let myNumber = 0
// while (myNumber < 50) {
//     myNumber++;
//     console.log(myNumber);
// }

function sum(num1, num2) {
    return num1 + num2;
}

function getUsernameFromEmail(email){
    // console.log(email.split('@'));
    return email.split('@')[0];
}

const getUsernameFromEmail2 = function(email){
    // console.log(email.split('@'));
    return email.split('@')[0];
}

const getUsernameFromEmail3 = (email) => email.split('@')[0];

let x = 1

function main(){
    let y = 2
    return 2
}

// console.log(y)

console.log(sum(4, 5))
console.log(getUsernameFromEmail("ameya28.mahale@gmail.com"))
console.log(getUsernameFromEmail2("ameya28.mahale@gmail.com"))
console.log(getUsernameFromEmail3("ameya28.mahale@gmail.com"))
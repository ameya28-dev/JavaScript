// Document Object Model

const value1 = document.getElementById('view1');
console.log(value1);
const value2 = document.querySelector('#view2');
console.log(value2);
value1.style.display = "flex";
value2.style.display = "flex";

const values = document.getElementsByClassName('view');
// Gives HTML Collection
console.log(values);

const sameViews = document.querySelectorAll('.view');
console.log(sameViews);

const divs = value1.querySelectorAll('div');
console.log(divs);

const sameDivs = value1.getElementsByTagName('div');
console.log(sameDivs);

const evenDivs = value1.querySelectorAll('div:nth-of-type(2n)');
console.log(evenDivs);

for(let i = 0; i <evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "darkblue";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}

const navText = document.querySelector('nav h1');
console.log(navText);
navText.textContent = "Hello World";

const navBar = document.querySelector('nav');
navBar.innerHTML = '<h1>Hello</h1> <p>This should align to the right</p>';
console.log(navBar);
navBar.style.justifyContent = "space-evenly";

console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].children);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.childElementCount);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.firstChild);

value1.style.display = 'none';
value2.style.display = 'flex';
value2.style.flexDirection = 'row';
value2.style.flexWrap = 'wrap';
value2.style.margin = '10px';

while(value2.lastChild){
    value2.lastChild.remove();
}

const newDiv = (parent, iterator) => {
    const newDiv = document.createElement('div');
    newDiv.textContent = iterator;
    newDiv.style.backgroundColor = "black"; 
    newDiv.style.width = "100px"; 
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    // newDiv.style.flexDirection = "column";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv); 
}

for(let i = 0; i < 12; i++){
    newDiv(value2, i+1);
}
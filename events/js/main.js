
import playguitar from "../../modules/js/guitar";
import { shredding, plucking } from "../../modules/js/guitar";

// let clicked = false;
// // console.log(h2);
// // view.style.display = "none";

// // const doSomething = () => {
// //     alert("Clicked");
// // }

// // h2.addEventListener("click", doSomething, false);
// // h2.removeEventListener("click", doSomething, false);

// document.addEventListener("readystatechange", (event) => {
//     if(event.target.readyState === "complete"){
//         console.log("Ready");
//         initApp();
//     }
// });

// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     view.addEventListener("click", (event) => {
//         // event.stopPropagation();
//         // event.target.style.backgroundColor = "purple";
//         view.classList.toggle("purple");
//         view.classList.toggle("darkblue");
//     }, true);
    
//     div.addEventListener("click", (event) => {
//         // event.stopPropagation();
//         event.target.style.backgroundColor = "blue";
//     }, true);

//     h2.addEventListener("click", (event) => {
//         // event.stopPropagation();
//         // console.log(event.target);
//         // clicked = !clicked;
//         // event.target.textContent = clicked ? "Clicked" : "My 2nd view";
//         event.target.textContent = "Clicked";
//     }, true);

//     const nav = document.querySelector("nav");
//     nav.addEventListener("mouseover", (event) => {
//        event.target.classList.add("height100"); 
//     });

//     nav.addEventListener("mouseout", (event) => {
//         event.target.classList.remove("height100");
//     });
// }

document.addEventListener("readystatechange", (event) =>{
    if(event.target.readyState === "complete"){
        console.log("ready");
        initApp();
    }
});

const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Form submitted");
    })
    console.log()
};

playguitar()
shredding()
plucking()
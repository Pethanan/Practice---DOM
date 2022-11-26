const parentOfItems = document.querySelector("#items").parentElement;

//parentOfItems.textContent = "this is the parent of items ";

const lastelementch = document.querySelector("#items").lastElementChild;

lastelementch.style.color = "blue";

const lastCh = document.querySelector("#items").lastChild;

console.log(lastCh);

const firstelementchi = document.querySelector("#items").firstElementChild;

firstelementchi.style.backgroundColor ="orange";

const firstchi = document.querySelector("#items").firstChild;

firstchi.style.color = "red";

const nextsibl = document.querySelector("#thirdItem").nextSibling;

nextsibl.textContent= "this is the next sibling of third item";

const nextelementsibl = document.querySelector("#thirdItem").nextElementSibling;

nextelementsibl.textContent = "this is the next sibling element of third item";

const prevsibl = document.querySelector("#thirdItem").previousSibling;

prevsibl.textContent= "this is the prev sibling of third item";

const previouselementsibl = document.querySelector("#thirdItem").previousElementSibling;

previouselementsibl.textContent = "this is the next sibling element of third item";



let newDiv = document.createElement("div");



newDiv.setAttribute("title", "attributeSet");

let newTextElement = document.createTextNode("newly added text node");

newDiv.appendChild(newTextElement);



let container = document.querySelector("header .container");

let h1 = document.querySelector("header h1")



container.insertBefore(newDiv, h1);


//does not work
const itemsList = document.getElementsByClassName("list-group-item");
//itemsList[4].style.backgroundColor = "green";

//this works
const itemsListbyTag = document.getElementsByTagName("li");
itemsListbyTag[4].style.backgroundColor = "green";

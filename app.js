
const nthChild = document.querySelector("li:nth-child(2)");
nthChild.style.color = "red";

const oddChild = document.querySelectorAll("li:nth-child(odd)");
for(let i=0; i<oddChild.length; i++)
  {
  oddChild[i].style.backgroundColor = "green";
  }





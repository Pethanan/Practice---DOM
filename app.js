let itemsList = document.querySelector("#items");
const addForm = document.querySelector("#addForm");
addForm.addEventListener("submit", addingForm);

function addingForm(e)
{
  
  
  e.preventDefault();

 const newLi = document.createElement("li");
  newLi.className = "list-group-item";
  newLi.appendChild(document.createTextNode(document.querySelector('#item').value));
  const delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("X"));
  delBtn.className = "btn btn-danger btn-sm float-right delete";
  newLi.appendChild(delBtn);
  itemsList.appendChild(newLi);
  }

const liItem = document.querySelectorAll(".list-group-item");

const editBtn = document.createElement("button");
editBtn.appendChild(document.createTextNode("Edit"));
for (let i=0; i<liItem.length; i++)
{
  liItem[i].appendChild(editBtn);
}

filter.addEventListener("keyup", filterFn);

function filterFn(e)
{
let searchText = e.target.value.toLowerCase();
 let singleItems = itemList.getElementsByTagName("li");
  let itemsArray = Array.from(singleItems);
  
  itemsArray.forEach(function(item) 
  { 
    let itemName = item.firstChild.textContent.toLowerCase();
    if(itemName.indexOf(searchText) != -1)
      {
        item.style.display = "block";
      }
    else
    {
        item.style.display = "none";
      }
    
  })
  
}

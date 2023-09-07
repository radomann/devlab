let newItem = document.createElement("li");
let newText = document.createTextNode("Item 5");
let list = document.getElementById("items");

list.appendChild(newItem);
newItem.appendChild(newText);
newItem.classList.add("list-group-item");

// list.querySelector("li").classList.remove("list-group-item");

let secondItem = list.children[1];
// list.insertBefore(newItem, secondItem);

// list.innerHTML += "<li class='list-group-item'>Item 5</li>";

list.removeChild(secondItem);

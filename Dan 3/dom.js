// console.log(document);
// console.dir(document);
// console.log(document.title);

document.title = "Novi title";

// console.dir(document.body);

let list = document.getElementById("items");
// console.log(list)

// let items = document.querySelectorAll("#items li")
let items = list.getElementsByClassName("list-group-item");
// console.log(items);

for (item of items) {
  // console.log(item);
  item.setAttribute("style", "background-color: blue");
  item.style.color = "white";
  item.style.backgroundColor = "red";
}

items[0].removeAttribute("style");

let = header = document.getElementById("header-title");
// console.log(header.innerHTML);
// console.log(header.innerText);
// console.log(header.textContent);
// document.getElementsByClassName("btn-dark")[0].setAttribute("disabled", "");
// document.getElementsByClassName("btn-dark")[0].value = "Prihvati";

let form = document.getElementsByTagName("form")[0];

// console.log(form.firstChild);
// console.log(form.firstElementChild);

console.log(form.children);
console.log(form.childNodes);

var ul = document.getElementById("listContainer");
var inp = document.getElementById("input");

function add() {
    var listItem = document.createElement("li");
    listItem.innerHTML = inp.value + "<input type='checkbox' onclick='del(event)'>";
    ul.append(listItem);
}

function del(event) {
    event.target.parentElement.style.textDecoration = "line-through";
}
var ul = document.getElementById("listContainer");
var inp = document.getElementById("input");

function add() {
    var listItem = document.createElement("li");

    var textSpan = document.createElement("span");
    textSpan.textContent = inp.value;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = del;

    listItem.appendChild(textSpan);
    listItem.appendChild(checkbox);
    ul.appendChild(listItem);

    inp.value = "";
}

function del(event) {
    event.target.parentElement.style.textDecoration = "line-through";
}
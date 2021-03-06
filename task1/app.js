var input = document.getElementById("input");
var todoUl = document.getElementById("todo-ul");

function addItem() {

    if (check(input.value)) {

        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item list-group-item-primary");

        var liTextNode = document.createTextNode(input.value);

        var editButton = document.createElement("button");
        editButton.setAttribute("class", "btn btn-secondary");
        editButton.setAttribute("onclick", "editItem(this)");

        var editButtonText = document.createTextNode("Edit");

        var deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "btn btn-danger");
        deleteButton.setAttribute("onclick", "deleteItem(this)");

        var deleteButtonText = document.createTextNode("Delete");

        editButton.appendChild(editButtonText);
        deleteButton.appendChild(deleteButtonText);

        li.appendChild(liTextNode);
        li.appendChild(deleteButton);
        li.appendChild(editButton);

        todoUl.appendChild(li);

        input.value = "";
    } 
    else {
        alert("Todo can not be empty!");

    }
}

function check(str) {

    if (str === "") {
        return false;
    } else {
        return true;
    }
}

function editItem(editBtn) {
    var newVal = prompt("Enter New Value", editBtn.parentNode.childNodes[0].nodeValue);
    editBtn.parentNode.firstChild.nodeValue = newVal;
}

function deleteItem(delBtn) {
    delBtn.parentNode.remove();
}

function deleteAll() {
    todoUl.innerHTML = "";
}
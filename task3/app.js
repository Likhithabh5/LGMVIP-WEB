var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);

var row=1;

function displayDetails() {
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var websitelink=document.getElementById("websitelink").value;
    var img=document.getElementById("img").value;
    var gender=document.getElementById("gender").value;
    var skills=document.getElementById("skills").value;

    if(!name || !email || !websitelink || !img || !gender || !skills ){
        alert("Please fill all the detials");
        return;
    }
    var display=document.getElementById("display");

    var newRow=display.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);

    cell1.innerHTML=name;
    cell2.innerHTML=
}
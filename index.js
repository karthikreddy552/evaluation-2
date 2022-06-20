// fill in javascript code here
document.querySelector("form").addEventListener("submit", fillform);

function fillform() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var docid = document.getElementById("docID").value;
    var dept = document.getElementById("dept").value;
    var exp = document.getElementById("exp").value;
    var emailid = document.getElementById("email").value;
    var mbol = document.getElementById("mbl").value;

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = name;
    var td2 = document.createElement("td");
    td2.innerText = docid;
    var td3 = document.createElement("td");
    td3.innerText = dept;
    var td4 = document.createElement("td");
    td4.innerText = exp;
    var td5 = document.createElement("td");
    td5.innerText = emailid;
    var td6 = document.createElement("td");
    td6.innerText = mbol;
    var td7 = document.createElement("td");
    td7.innerText = exp;
    if (exp > 5) {
        td7.innerText = "Senior";
    } else if (exp <= 1) {
        td7.innerText = "Trainee";
    } else if (exp >= 2 && exp <= 5) {
        td7.innerText = "Junior";
    }

    var td8 = document.createElement("td");
    td8.innerText = "Delete";
    td8.addEventListener("click", deleterow);
    td8.style.backgroundColor = "red";
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    document.querySelector("tbody").append(tr);




}

function deleterow(event) {
    event.target.parentNode.remove()

}
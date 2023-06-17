const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list");

function addTask(){

    if(inputBox.value == '')
    {
        alert("You must write something!");          /*Function to add task to the list*/ 
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span  = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function(x){
    if(x.target.tagName === "LI")
    {
        x.target.classList.toggle("checked");        /* Function to toggle and delete the task from the list*/
        saveData()
    }
    else if(x.target.tagName ==="SPAN")
    {
        x.target.parentElement.remove();
        saveData()
    }
},false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);      /* Function for saving data to retain after refresh*/
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");   /*Function to getdata after the page again*/
}
showTask();
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


//function to display already stored note in the local storage
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
//function to store this in the local server
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", ()=>{

        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        img.src = "del.jpg";
        notesContainer.appendChild(inputBox).appendChild(img);

    //the above functions listen to a click on the button and display the input box
    updateStorage();
})

//function to delete the note input field

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    //function that updates the storage once we start typing in the p tag
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

 //function nto prevent the default enter keyword
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
        updateStorage();
    }
})

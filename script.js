let info = prompt("Enter your information:")
let ul = document.getElementById("ul");
let addbutton = document.getElementById("add_button");
let remove = document.getElementById("remove");

function InfoControl(info) {
    if (info === null || info.trim() === "") {
        return alert("You must enter some information!")
    } else {
        
    }
}


addbutton.addEventListener("click", () => {
  let li = document.createElement("li");
li.innerText = info
  ul.appendChild(li);
});

remove.addEventListener("click", () => {
  if (ul.children.length > 0) {
    ul.firstChild.remove();
  } else {
    alert("ERROR");
  }
});

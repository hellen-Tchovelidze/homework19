let addbutton = document.getElementById("button")
let ul = document.querySelector("ul")

addbutton.addEventListener("click", () => {
    let info = prompt ("please enter your information")
    if (info) { let li = document.createElement("li")
        li.innerText = info
    ul.appendChild(li)
    let delateinfo = document.createElement("button")
    li.appendChild(delateinfo)
    delateinfo.innerText = "delate"
    delateinfo.addEventListener("click", () => {
        ul.removeChild(li)
    })
        
    } else {
        alert("please, add your information")
    }
})
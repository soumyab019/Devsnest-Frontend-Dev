
function addMore(){
    document.getElementById("error").innerHTML="";

    let name = document.getElementById("name").value;
    if(name==""){
        document.getElementById("error").innerHTML="Write your note"
    }
    else{
        let box = document.getElementById("box");

        let li=document.createElement("li");
        li.textContent=name;

        box.appendChild(li);

        let a = document.createElement("a");
        a.textContent="Delete";
        // a.href=
        li.appendChild(a);
    }
    document.getElementById("name").value="";
}

let btn = document.querySelector("ul");
btn.addEventListener("click", (e)=>{
    let box=document.getElementById("box");
    let li = e.target.getElementById("remove");
    box.removeChild("li");
})
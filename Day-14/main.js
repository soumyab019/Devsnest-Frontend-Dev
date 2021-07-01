
const myinput = document.getElementById("myinput");
const mybox2 = document.getElementById("mybox2");
const mybox3 = document.getElementById("mybox3");

myinput.addEventListener("input", ()=>{
    myinput.style.color="green";
});

function kp(){
    mybox2.style.background="pink";
}

mybox3.addEventListener("click", (e)=>{
    mybox3.style.background="yellow";
})

const items = document.querySelectorAll(".item");

items.addEventListener("click", () => {
    if(items.classList.contains("itemClicked")){
        items.classList.remove("itemClicked");
    }
    else{
        items.classList.add("itemClicked");
    }
})

// item.addEventListener("click", ()=>{
//     if(item.style.background === background-color: rgb(59, 8, 8){
//         item.style.background === white;
//     }

//     else-if(item.style.background === white){
//         item.style.background === rgb(59, 8, 8); 
//         }
// })
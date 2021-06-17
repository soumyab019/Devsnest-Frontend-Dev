
box1 = document.getElementById("box1");
plusOperation = function(){

   var number1 = document.getElementById("number1");
   var number2 = document.getElementById("number2");

   var sum = parseInt(number1.value) + parseInt(number2.value);

   var output = document.getElementById("output");
    output.innerText = sum;
    // console.log(sum);

}

box1.addEventListener("click", plusOperation);


box2 = document.getElementById("box2");
minusOperation = function(){

   var number1 = document.getElementById("number1");
   var number2 = document.getElementById("number2");

   var difference = parseInt(number1.value) - parseInt(number2.value);

   var output = document.getElementById("output");
    output.innerText = difference;
    // console.log(difference);

}

box2.addEventListener("click", minusOperation);


box3 = document.getElementById("box3");
multiplyOperation = function(){

   var number1 = document.getElementById("number1");
   var number2 = document.getElementById("number2");

   var multiply = parseInt(number1.value) * parseInt(number2.value);

   var output = document.getElementById("output");
    output.innerText = multiply;
    // console.log(difference);

}

box3.addEventListener("click", multiplyOperation);


box4 = document.getElementById("box4");
divisonOperation = function(){

   var number1 = document.getElementById("number1");
   var number2 = document.getElementById("number2");

   var divison = parseInt(number1.value) / parseInt(number2.value);

   var output = document.getElementById("output");
    output.innerText = divison;
    // console.log(difference);

}

box4.addEventListener("click", divisonOperation);

// switch(){
//     case "Add +":
//         box1.addEventListener("click", plusOperation);
//         break;
//     case "Subtarct -":
//         box2.addEventListener("click", minusOperation);
//         break;
//     case "Multiply *":
//         box3.addEventListener("click", multiplyOperation);
//         break;
//     case "Divide /":
//         box4.addEventListener("click", divisionOperation);
//         break;
// }
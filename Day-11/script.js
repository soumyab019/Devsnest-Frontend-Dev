
function output(){
    let score = 0;

    if(document.getElementById("correct1").checked){
        score++;
    }
    if(document.getElementById("correct2").checked){
        score++;
    }
    if(document.getElementById("correct3").checked){
        score++;
    }
    if(document.getElementById("correct4").checked){
        score++;
    }
    if(document.getElementById("correct5").checked){
        score++;
    }

    document.write("Hurray! you have scored:", score);
}
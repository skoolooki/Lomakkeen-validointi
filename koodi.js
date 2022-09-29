function IDtesti(arvo){
    if (arvo.length < 6){
        document.getElementById("virhe").style.display = "inline";
    } else {
        document.getElementById("virhe").style.display = "none";
    }
}

function tyhja(value, id){
    if (value.length < 1){
        id.style.display = "inline";
    } else {
        id.style.display = "none";
    }
}
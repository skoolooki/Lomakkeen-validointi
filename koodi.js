function IDtesti(arvo){
    if (arvo.length < 6 || arvo.includes(" ")){
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

function postinumero(arvo, id){
    if (arvo.length != 5 || arvo.includes("-") || arvo.includes("+")){
        id.style.display = "inline";
    } else {
        id.style.display = "none";
    }
}

function gmail(arvo, id){
    if (arvo.includes("@")){
        id.style.display = "none";
    } else {
        id.style.display = "inline";
    }
}

function submit(suku, kieli){
    var mies = document.getElementById("mies");
    var nainen = document.getElementById("nainen");
    var suomi = document.getElementById("suomi")
    var muu = document.getElementById("muu")
    if (mies.checked == false && nainen.checked == false){
        suku.style.display = "inline";
    } else {
        suku.style.display = "none";
    }
    if (suomi.checked == false && muu.checked == false){
        kieli.style.display = "inline";
    } else {
        kieli.style.display = "none";
    }
}
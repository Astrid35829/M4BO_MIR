// product pagina mushroom variant
let mushroomImg = document.getElementById("js--mushroomImg");

let mushroomBlue = document.getElementById("js--mushroomBlue")
let mushroomGreen = document.getElementById("js--mushroomGreen")
let mushroomPink = document.getElementById("js--mushroomPink")

mushroomBlue.onclick = function(){
    mushroomImg.setAttribute("src", "img/mushroom.webp");
    mushroomBlue.style.border = "0.2rem solid black";
    mushroomGreen.style.border = "none";
    mushroomPink.style.border = "none";
    
}

mushroomGreen.onclick = function(){
    mushroomImg.setAttribute("src", "img/mushroomGreen.webp");
    mushroomGreen.style.border = "0.2rem solid black";
    mushroomBlue.style.border = "none";
    mushroomPink.style.border = "none";
}

mushroomPink.onclick = function(){
    mushroomImg.setAttribute("src", "img/mushroomPink.webp");
    mushroomPink.style.border = "0.2rem solid black";
    mushroomBlue.style.border = "none";
    mushroomGreen.style.border = "none";
}
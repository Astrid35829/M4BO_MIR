// Shoppingcart button
const addToCartButton = document.getElementsByClassName("product__addCart");
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;
let mushroom = 0;
let sailboat = 0;
let squid = 0;
let lamb = 0;

for(let i = 0; i <addToCartButton.length; i++){
    addToCartButton[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButton[i].dataset.product){
            case "mushroom":
                mushroom += 1;
                break;
            case "sailboat":
                sailboat += 1;
                break;
            case "squid":
                squid += 1;
                break;
            case "lamb":
                lamb += 1;
                break
        }
        if(modalIsOpen === false){
            shoppingModal.style.display = "flex";
            modalIsOpen = true;
            setTimeout(function(){
                shoppingModal.style.display = "none";
                modalIsOpen = false;
            },2000);
        }
    }
}

const checkoutButton = document.getElementById("js--checkoutButton");
const checkoutWindow = document.getElementById("js--checkoutWindow");
const checkoutClose = document.getElementById("js--checkout__close");
const mainWindow = document.getElementById("js--productoverview");
let checkoutOpen = false;



checkoutButton.onclick = function(){
    console.log("click");
    if(checkoutOpen === false){
        mainWindow.style.display = "none";
        checkoutWindow.style.display = "block";
        checkoutOpen = true;
        document.getElementById("js--amount-mushroom").innerHTML = mushroom + "x";
        document.getElementById("js--amount-sailboat").innerHTML = sailboat + "x";
        document.getElementById("js--amount-squid").innerHTML = squid + "x";
        document.getElementById("js--amount-lamb").innerHTML = lamb + "x";
        let mushroomTotal = mushroom *10;
        let sailboatTotal = sailboat *10;
        let squidTotal = squid * 6;
        let lambTotal = lamb * 20;  
        document.getElementById("js--price1").innerHTML = mushroomTotal;
        document.getElementById("js--price2").innerHTML = sailboatTotal;
        document.getElementById("js--price3").innerHTML = squidTotal;
        document.getElementById("js--price4").innerHTML = lambTotal;
        document.getElementById("js--checkout-total").innerHTML = mushroomTotal + sailboatTotal + squidTotal + lambTotal;
        return;
    }
}

checkoutClose.onclick = function(){
    checkoutWindow.style.display = "none";
    mainWindow.style.display = "flex";
    checkoutOpen = false;
}

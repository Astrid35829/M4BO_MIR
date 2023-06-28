//giveaway
const giveawayButton = document.getElementById("js--giveawayButton");
const giveaway = document.getElementById("js--giveaway");
const giveawayExit = document.getElementById("js--giveawayExit");

giveawayButton.onclick = function(){
    giveaway.style.display = "flex";
}

giveawayExit.onclick = function(){
    giveaway.style.display = "none";
}

const dropdown = document.getElementById("js-dropdown");
const dropdownButton = document.getElementById("js--dropdownButton");
const dropdownOptions = document.getElementById("js--dropdownOptions");
const dropdownClose = document.getElementById("js--dropdown-close");
dropdownButton.onclick = function(){
    console.log("click");
    dropdownOptions.style.display = "block";
    
}

dropdownClose.onclick = function(){
    dropdownOptions.style.display = "none";
}

const allProduct = document.getElementsByClassName("product");
const dropdownPrice1 = document.getElementById("js--dropdown-price1");
const dropdownPrice2 = document.getElementById("js--dropdown-price2");
const dropdownPrice3 = document.getElementById("js--dropdown-price3");
const dropdownAll = document.getElementById("js--dropdown-all");

dropdownPrice1.onclick = function(){
    for(let i = 0; i < allProduct.length; i++){
        if(allProduct[i].dataset.category === "keychain"){
            allProduct[i].style.display = "flex";
        }
        else{
            if(allProduct[i].dataset.category === "smallPlush"){
                allProduct[i].style.display = "none";
            }
            if(allProduct[i].dataset.category === "mediumPlush"){
                allProduct[i].style.display = "none";
            }
            if(allProduct[i].dataset.category === "largePlush"){
                allProduct[i].style.display = "none";
            }
        }
    }
}

dropdownPrice2.onclick = function(){
    for(let i = 0; i < allProduct.length; i++){
        if(allProduct[i].dataset.category === "smallPlush"){
            allProduct[i].style.display = "flex";
        }
        else{
            if(allProduct[i].dataset.category === "keychain"){
                allProduct[i].style.display = "none";
            }
            if(allProduct[i].dataset.category === "mediumPlush"){
                allProduct[i].style.display = "none";
            }
            if(allProduct[i].dataset.category === "largePlush"){
                allProduct[i].style.display = "none";
            }
        }
    }
}

dropdownAll.onclick = function(){
    for(let i = 0; i < allProduct.length; i++){
        allProduct[i].style.display = "flex";
    }
}

dropdownPrice3.onclick = function(){
    for(let i = 0; i < allProduct.length; i++){
        if(allProduct[i].dataset.category === "mediumPlush"){
            allProduct[i].style.display = "flex";
        }
        else if(allProduct[i].dataset.category === "largePlush"){
            allProduct[i].style.display = "flex";
        }
        else{
            if(allProduct[i].dataset.category === "keychain"){
                allProduct[i].style.display = "none";
            }
            if(allProduct[i].dataset.category === "smallPlush"){
                allProduct[i].style.display = "none";
            }
        }
    }
}






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
        document.querySelector("main").style.height = "100rem";
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
    document.querySelector("main").style.height = "";
    checkoutWindow.style.display = "none";
    mainWindow.style.display = "flex";
    checkoutOpen = false;
}


//json
const img1 = document.getElementById("js--img1");
const price1 = document.getElementById("js--price1");
const name1 = document.getElementById("js--name1");

const img2 = document.getElementById("js--img2");
const price2 = document.getElementById("js--price2");
const name2 = document.getElementById("js--name2");

const img3 = document.getElementById("js--img3");
const price3 = document.getElementById("js--price3");
const name3 = document.getElementById("js--name3");

const img4= document.getElementById("js--img4");
const price4 = document.getElementById("js--price4");
const name4 = document.getElementById("js--name4");

const img5= document.getElementById("js--img5");
const price5 = document.getElementById("js--price5");
const name5 = document.getElementById("js--name5");

const img6= document.getElementById("js--img6");
const price6 = document.getElementById("js--price6");
const name6 = document.getElementById("js--name6");

const img7= document.getElementById("js--img7");
const price7 = document.getElementById("js--price7");
const name7 = document.getElementById("js--name7");

const img8= document.getElementById("js--img8");
const price8 = document.getElementById("js--price8");
const name8 = document.getElementById("js--name8");

const img9= document.getElementById("js--img9");
const price9 = document.getElementById("js--price9");
const name9 = document.getElementById("js--name9");

const img10= document.getElementById("js--img10");
const price10 = document.getElementById("js--price10");
const name10 = document.getElementById("js--name10");

const img11= document.getElementById("js--img11");
const price11 = document.getElementById("js--price11");
const name11 = document.getElementById("js--name11");

const img12= document.getElementById("js--img12");
const price12 = document.getElementById("js--price12");
const name12 = document.getElementById("js--name12");

//data
let data = fetch("../producten.json").then(
    function(binnenGekomenData){
        return binnenGekomenData.json();
    }).then(
        function(echteData){
            img1.setAttribute("src", echteData.img1);
            img1.setAttribute("alt", echteData.alt1);
            price1.innerHTML = echteData.price1;
            name1.innerHTML = echteData.name1;

            img2.setAttribute("src", echteData.img2);
            img2.setAttribute("alt", echteData.alt2);
            price2.innerHTML = echteData.price2;
            name2.innerHTML = echteData.name2;

            img3.setAttribute("src", echteData.img3);
            img3.setAttribute("alt", echteData.alt3);
            price3.innerHTML = echteData.price3;
            name3.innerHTML = echteData.name3;

            img4.setAttribute("src", echteData.img4);
            img4.setAttribute("alt", echteData.alt4);
            price4.innerHTML = echteData.price4;
            name4.innerHTML = echteData.name4;

            img5.setAttribute("src", echteData.img5);
            img5.setAttribute("alt", echteData.alt5);
            price5.innerHTML = echteData.price5;
            name5.innerHTML = echteData.name5;

            img6.setAttribute("src", echteData.img6);
            img6.setAttribute("alt", echteData.alt6);
            price6.innerHTML = echteData.price6;
            name6.innerHTML = echteData.name6;

            img7.setAttribute("src", echteData.img7);
            img7.setAttribute("alt", echteData.alt7);
            price7.innerHTML = echteData.price7;
            name7.innerHTML = echteData.name7;

            img8.setAttribute("src", echteData.img8);
            img8.setAttribute("alt", echteData.alt8);
            price8.innerHTML = echteData.price8;
            name8.innerHTML = echteData.name8;

            img9.setAttribute("src", echteData.img9);
            img9.setAttribute("alt", echteData.alt9);
            price9.innerHTML = echteData.price9;
            name9.innerHTML = echteData.name9;

            img10.setAttribute("src", echteData.img10);
            img10.setAttribute("alt", echteData.alt10);
            price10.innerHTML = echteData.price10;
            name10.innerHTML = echteData.name10;

            img11.setAttribute("src", echteData.img11);
            img11.setAttribute("alt", echteData.alt11);
            price11.innerHTML = echteData.price11;
            name11.innerHTML = echteData.name11;

            img12.setAttribute("src", echteData.img12);
            img12.setAttribute("alt", echteData.alt12);
            price12.innerHTML = echteData.price12;
            name12.innerHTML = echteData.name12;
        }
);

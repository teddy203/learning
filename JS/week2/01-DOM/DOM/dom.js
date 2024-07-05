//const image = document.querySelector(".pruduct-image");
//let tag = document.getElementsByClassName("tag");




let RedColor = document.querySelector(".red")
let cartButton = document.querySelector("#button")
let itemTag = document.querySelector(".tag")
let image = document.querySelector(".product-image")



RedColor.addEventListener('click', () =>{
    cartbutton.style.backgroundColor = "red";
itemTag.style.backgroundColor = "red";
image.style.backgroundimage = 'url("red-benz.webp")';
});



let grayColor = document.querySelector(".gray")


grayColor.addEventListener('click', () =>{
    cartbutton.style.backgroundColor = "gray";
itemTag.style.backgroundColor = "gray";
image.style.backgroundimage = 'url("red-benz.webp")';
});





let file = "Ajax.txt";

//fetch(file)
//.then(x => x.text())
//.then(y => document.getElementById("demo").innerHTML = y);


//let myObject = await fetch(file);
//let mytext = await myObject.text();
//document.getElementById("demo").innerHTML = mytext;
//}

async function getText(file){
let myObject = await fetch(file);
let mytext = await myObject.text();
document.getElementById("demo").innerHTML = mytext;
}

async function myfucntion(){
return"heloo class";
}

function myfucntion(){
return Promise.resolve("hello")
}

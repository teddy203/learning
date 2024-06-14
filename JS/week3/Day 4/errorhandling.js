try{
alert("first error");
}
catch(error){

document.getElementById("demo").innerHTML = error.message;

}

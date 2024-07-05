const paragraph = document.querySelector("#myParagraph");
const changeButton = document.querySelector("#changeButton");
    const resetButton = document.querySelector("#resetButton");
   
    changeButton.addEventListener("click", () =>{
      paragraph.textContent = "Hello, World!";
    });
    
    resetButton.addEventListener("click",  () =>{ 
      paragraph.textContent = "This is a paragraph." });
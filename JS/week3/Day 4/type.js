


try {
    let num = 10;
    let text = false;

    let result = num + text; 
    console.log(result);
} catch (error) {
   console.log(error instanceof TypeError);
}

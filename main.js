let buttonSize = document.getElementById("size");
let buttonRGB = document.getElementById("rgb");
let container = document.getElementById("container");
let newSize = 0;

function requestSize(){
    let rsize = prompt("Type the grid size (1-100): ");
    newSize = rsize;
    if (newSize < 0 || newSize > 100 || newSize == '') {
        alert("Just type numbers between 1 to 100");
        requestSize();
    }
    console.log(newSize);
    return newSize;
}

function randomColors(){
    let shades = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let random = Math.floor(Math.random() * 16);
    let colors = shades[random];                
    return colors;
}

function createColumns(n){
    let gridiv = document.createElement("div");
    
}

buttonSize.addEventListener("click", function (_e) {
    requestSize();
});

buttonRGB.addEventListener("click", function (_e) {
    
});
let buttonSize = document.getElementById("size");
let buttonBlack = document.getElementById("black");
let buttonRgb = document.getElementById("rgb");
let buttonClear = document.getElementById("clear");
let buttonErase = document.getElementById("erase");


function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



buttonSize.addEventListener("click", () => {
    while (true) {
        let newSize = prompt("How many squares per side to make the new grid?");
        if (newSize < 0 || newSize > 100 || newSize == '') {
            alert("Just type numbers between 1 and 100");
        }else{
            createGrid(newSize);
            break;
        }
    }
});



buttonBlack.addEventListener("click", () => {
    const divs = document.querySelectorAll('.grids');
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })
    });
});



buttonRgb.addEventListener("click", () => {
    const divs = document.querySelectorAll('.grids');
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = generateRandomColor();
        })
    });
});



buttonClear.addEventListener("click", () => {
    const divs = document.querySelectorAll('.grids');
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    });
});

buttonErase.addEventListener("click", ()=> {
    let divs = Array.from(document.querySelectorAll('.grids'));
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "white";
            /*div.removeAttribute('style');*/
        })
    });
});


createGrid(16);

function createGrid(n) {

    const content = document.getElementById("container");
    while (content.firstChild) {
        content.firstChild.remove();
    }


    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = "white";
        div.classList.add('grids');
        container.appendChild(div);
    }
    hoverColor();
}




function hoverColor() {
    const divs = document.querySelectorAll('.grids');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        });
    });
}
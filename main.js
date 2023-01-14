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

function paintGrid (color) {
    let divs = Array.from(document.querySelectorAll('.grids'));
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = color;
        })
    });
}

buttonBlack.addEventListener("click", () => {
    paintGrid("black");
});

buttonRgb.addEventListener("click", () => {
    paintGrid(generateRandomColor());
});

buttonClear.addEventListener("click", () => {
    paintGrid("white");
});

buttonErase.addEventListener("click", ()=> {
    paintGrid("white");
});

function createGrid(n) {
    const content = document.getElementById("grid");
    while (content.firstChild) {
        content.firstChild.remove();
    }

    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = "white";
        div.classList.add('grids');
        grid.appendChild(div);
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

createGrid(16);
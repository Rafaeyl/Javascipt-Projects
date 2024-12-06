// const container = document.querySelector(".container");
// const containerbutton = document.querySelector(".containerbutton");
// const button = document.querySelector("button");
// let divs = document.createElement("div");

// function creatGrid(size = 250){
  

//     divs.style.cssText = `width: ${size}px; height: ${size}px;`;
//     divs.classList.add("bg");

//     divs.addEventListener("mouseover", () => {
//         divs.classList.remove("bg");
//         divs.classList.add("boxHover");
//     });

//     divs.addEventListener("mouseout", () => {
//         divs.classList.remove("boxHover");
//         divs.classList.add("bg");
//     });

//     container.appendChild(divs);
   
// }

// button.addEventListener("click", () =>{
//     let value = prompt("Enter size:");

//     if(isNaN(value)){
//         alert("Enter a valid size in number");
//     }
//     else if(value >= 1000){
//         alert("Size should not exceed in 100");
//     }
//     else{
//         if(value == ""){
//             creatGrid();
//         }else{
//             creatGrid(value);
//         }
        
//     }


//     container.removeChild(divs);
// });


// for (let index = 1; index < 4; index++) {
//     let divs = document.createElement("div");
//     // divs.textContent = `DIV ${index}`;
//     divs.classList.add("box");

//     divs.addEventListener("mouseover", () => {
//         divs.classList.remove("box");
//         divs.classList.add("boxHover");
//     });

//     divs.addEventListener("mouseout", () => {
//         divs.classList.remove("boxHover");
//         divs.classList.add("box");
//     });

//     container.appendChild(divs);

  
// }



function setupGrid(squares){
    // Clear the grid first
    gridContainer.innerHTML = "";
    
    const squareWidth = gridContainer.clientWidth / squares;
    const squareHeight = gridContainer.clientHeight / squares;

    populateGrid(squareWidth, squareHeight, (squares*squares));
}

function populateGrid(w, h, totalSquares){
    // Variable for storing all square elements of the grid
    const gridArray = [];

    for(let i = 0; i < totalSquares; i++){
        gridArray[i] = document.createElement("div");
        let styleString = "width: " + w + "px; height: " + h + "px;"
        gridArray[i].setAttribute("style", styleString);
        gridContainer.appendChild(gridArray[i]);

        gridArray[i].addEventListener("mouseover", () => {
            gridArray[i].setAttribute("style", styleString + " background-color: black;");
        });
    }
}

// By default the grid can contain 16 squares for each axis
const DEFAULT_SQUARES = 16;
// Init grid
const gridContainer = document.querySelector(".gridContainer");

setupGrid(DEFAULT_SQUARES);

// Init button
const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () =>{
    let squares = prompt("How many squares for the x and y axis you would like (MAX: 100)");
    if(squares > 100 || squares < 1 || isNaN(squares)){
        alert("Invalid entry. Try again.");
    }
    setupGrid(squares);
});

const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", () =>{
    gridContainer.innerHTML = "";
});
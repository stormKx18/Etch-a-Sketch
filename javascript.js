console.log('Etch-a-Sketch');

let rows = 16; //Default grid size
const MAX_ROWS=100; //Max number of rows

/* Create Grid*/
function drawGrid(rows) {
    let grid = document.querySelector('.grid');
    grid.innerHTML=""; //Clear previous grid

    for (let j = 0; j < rows; j++) { //Create rows
        const row = document.createElement("div");
        row.classList.add("row");

        for(let i=0; i < rows; i++){ //Create cells
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell)
        }

        grid.appendChild(row);
    }


    /* Add event listeners */
    grid.addEventListener('mouseover',(event)=>{
        let target = event.target;
        
        target.classList.add("painted");

        if(target.classList.contains('row') || target.classList.contains('grid')){
            target.classList.remove("painted");
        }
    })
}

/* Clear Grid */
let btnGrid = document.querySelector(".createGrid");

btnGrid.addEventListener('click',(event)=>{
    console.log('Clear Grid');
    drawGrid(rows);
});

/* Resize Grid */
let btnResize = document.querySelector('.resizeGrid');

btnResize.addEventListener('click',(event)=>{
    console.log('Resize Grid');

    const userInput = +prompt('Please enter grid size (max:100):', '16');

    if (userInput !== null) {
        rows = Math.min(userInput,MAX_ROWS); //Limit to max rows
        drawGrid(rows);
    }
})


//Create initial Grid
drawGrid(rows);
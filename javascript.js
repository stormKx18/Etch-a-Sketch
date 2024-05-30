console.log('Etch-a-Sketch');

/* Create Grid*/
let rows = 10;
let cols = 10;

let grid = document.querySelector('.grid');

for (let j = 0; j < rows; j++) { //Create rows
    const row = document.createElement("div");
    row.classList.add("row");

    for(let i=0; i < cols; i++){ //Create cells
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



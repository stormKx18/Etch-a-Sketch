console.log('Etch-a-Sketch');

let grid = document.querySelector('.grid');

grid.addEventListener('click',(event)=>{
    let target = event.target;

    target.classList.add("painted");

    console.log(target);
})
let color = "black";
let click = true;

function getBoardSquares(size) {
    let board = document.querySelector('.sketch-board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div)=> div.remove())

    board.style.gridTemplateColumns=`repeat(${size},1fr)`;
    board.style.gridTemplateRows=`repeat(${size},1fr)`;
    
    let total = size * size;
    for(let i=0 ; i<total ;i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor="white";
        board.insertAdjacentElement("beforeend",square);
    };
}

getBoardSquares(16)

function changeSize(userInput){
    if(userInput >=4 && userInput <=100){
        getBoardSquares(userInput);
    } else {
        console.log('nope')
    }
};

function colorSquare(){
    if(click) {
        this.style.backgroundColor = color;
    }
}

function changeColor(userChoice){
    color = userChoice;
}

function resetBoard (){
    let board = document.querySelector('.sketch-board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div)=> div.style.backgroundColor="white")
}

document.querySelector("body").addEventListener("click", () =>{
    click = !click;
});
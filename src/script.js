//------------------------------------Index--------------------------------------
//Section 1: Constants, Variables and Board State
//Section 2: Board and Piece Rendering
//Section 3: Buttons
//Section 4: Game Logic 
//-------------------------------------------------------------------------------



//----------------------------Constants and Variables----------------------------
const board = document.getElementsByClassName('board')[0];
var selected1 = 0, final = 0, initialmove = false;
var initialRow, initialCol, finalRow, finalCol;
var flippedDrn = 1;
const options = document.getElementsByClassName('options')[0];

var boardState = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"]
];
//---------------------------------------------------------------------------------



//-----------------------------Board and Piece Rendering---------------------------------------
//------------------------------------Board Rendering------------------------------------------
var whitemove = true, blackmove = false;

for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
        const cell = document.createElement('button');
        cell.classList.add('cell');
        cell.id = `${i}${j}`;
        cell.textContent = " ";

        if ((i + j) % 2 === 0) {
            cell.classList.add('white');
        }
        else {
            cell.classList.add('black');
        }


        cell.addEventListener('click', function () {

            if (whitemove) {
                console.log(`White's turn`);
            }
            else {
                console.log(`Black's turn`);
            }

            {
                if (initialmove) {
                    final = `${i}${j}`;
                    console.log(`Clicked on final cell: ${final}`);
                    initialmove = false;

                    finalRow = Math.floor(final / 10) - 1;
                    finalCol = (final % 10) - 1;

                    // const initialRow = parseInt(initial.charAt(0)) - 1;
                    // const initialCol = parseInt(initial.charAt(1)) - 1;
                    // const finalRow = parseInt(final.charAt(0)) - 1;
                    // const finalCol = parseInt(final.charAt(1)) - 1;

                    if (validmove(selected1, final)) {
                        movePiece();
                        whitemove = !whitemove;
                        blackmove = !blackmove;
                    }
                    //printBoardState();
                    document.getElementById(selected1).classList.remove('selected');

                } else {
                    selected1 = `${i}${j}`;

                    initialRow = Math.floor(selected1 / 10) - 1;  //zero indexed
                    initialCol = (selected1 % 10) - 1;


                    if (alternateMove()) {
                        document.getElementById(selected1).classList.add('selected');
                        // document.getElementById(selected1).classList.remove('cell');
                        initialmove = true;
                        console.log(`Clicked on initial cell: ${selected1}`);
                    }
                }
                checkForPromotion();
                renderBoard();
                              
            }
        });

        board.appendChild(cell);

    }
}

//-----------------------------Piece Rendrering---------------------------------------
function renderBoard() {
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            const cell = document.getElementById(`${i}${j}`);
            if (boardState[i - 1][j - 1] == "p") {
                cell.textContent = "♟";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('black-piece');
                tempcell.classList.remove('white-piece');
            }
            else if (boardState[i - 1][j - 1] == "r") {
                cell.textContent = "♜";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('black-piece')
                tempcell.classList.remove('white-piece');
            }
            else if (boardState[i - 1][j - 1] == "n") {
                cell.textContent = "♞";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('black-piece')
                tempcell.classList.remove('white-piece');
            }
            else if (boardState[i - 1][j - 1] == "b") {
                cell.textContent = "♝";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('black-piece')
                tempcell.classList.remove('white-piece');
            }
            else if (boardState[i - 1][j - 1] == "q") {
                cell.textContent = "♛";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('black-piece')
                tempcell.classList.remove('white-piece');
            }
            else if (boardState[i - 1][j - 1] == "k") {
                cell.textContent = "♚";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('black-piece')
                tempcell.classList.remove('white-piece');
            }
            else if (boardState[i - 1][j - 1] == "P") {
                cell.textContent = "♟";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('white-piece')
                tempcell.classList.remove('black-piece');
            }
            else if (boardState[i - 1][j - 1] == "R") {
                cell.textContent = "♜";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('white-piece');
                tempcell.classList.remove('black-piece');
            }
            else if (boardState[i - 1][j - 1] == "N") {
                cell.textContent = "♞";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('white-piece');
                tempcell.classList.remove('black-piece');
            }
            else if (boardState[i - 1][j - 1] == "B") {
                cell.textContent = "♝";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('white-piece');
                tempcell.classList.remove('black-piece');
            }
            else if (boardState[i - 1][j - 1] == "Q") {
                cell.textContent = "♛";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('white-piece');
                tempcell.classList.remove('black-piece');
            }
            else if (boardState[i - 1][j - 1] == "K") {
                cell.textContent = "♚";
                const tempcell = document.getElementById(`${i}${j}`);
                tempcell.classList.add('white-piece');
                tempcell.classList.remove('black-piece');
            }
            else {
                cell.textContent = " ";
            }
        }
    }
}
//-------------------------------------------------------------------------------


//-----------------------------Buttons ------------------------------------------
//-----------------------------Flip Button---------------------------------------
const flipButton = document.createElement('button');
flipButton.classList.add('flip-button');
flipButton.textContent = "↕";
flipButton.addEventListener('click', function () {
    flipBoard();
    renderBoard();
});
options.appendChild(flipButton);
function flipBoard() {
    console.log("Flipping the board");
    for (let i = 0; i < 8; i++) {
        boardState[i].reverse();
    }
    boardState.reverse();
    flippedDrn *= -1;
}


//-----------------------------Reset Button---------------------------------------
const resetButton = document.createElement('button');
resetButton.classList.add('reset-button');
resetButton.textContent = "Reset";
resetButton.addEventListener('click', function () {
    resetBoard();
});
options.appendChild(resetButton);

function resetBoard() {
    boardState = [
        ["r", "n", "b", "q", "k", "b", "n", "r"],
        ["p", "p", "p", "p", "p", "p", "p", "p"],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        ["P", "P", "P", "P", "P", "P", "P", "P"],
        ["R", "N", "B", "Q", "K", "B", "N", "R"]
    ];
    renderBoard();
    whitemove = true;
    blackmove = false;
}

//-----------------------------Game Logic---------------------------------------
//-----------------------------Promotion Logic----------------------------------
function checkForPromotion() {
    for (let j = 0; j < 8; j++) {
        if (flippedDrn == 1) {
            if(boardState[0][j] == "P") {
                boardState[0][j] = "Q";
                console.log(`White pawn promoted at 0, ${j}`);
            }
            if(boardState[7][j] == "p") {
                boardState[7][j] = "q";
                console.log(`Black pawn promoted at 7, ${j}`);
            }
        }
        else {
            if(boardState[7][j] == "P") {
                boardState[7][j] = "Q";
                console.log(`White pawn promoted at 7, ${j}`);
            }
            if(boardState[0][j] == "p") {
                boardState[0][j] = "q";
                console.log(`Black pawn promoted at 0, ${j}`);
            }
        }
    }   
}

//-----------------------------Elimation Logic----------------------------------
function pieceElimination() {
    console.log(`Elimination check`);
    console.log(`Initial piece: ${boardState[initialRow][initialCol]}, Final piece: ${boardState[finalRow][finalCol]}`);

    const whiteTakesBlack = (boardState[initialRow][initialCol] >= 'A' && boardState[initialRow][initialCol] <= 'Z') && (boardState[finalRow][finalCol] >= 'a' && boardState[finalRow][finalCol] <= 'z');
    const blackTakesWhite = (boardState[initialRow][initialCol] >= 'a' && boardState[initialRow][initialCol] <= 'z') && (boardState[finalRow][finalCol] >= 'A' && boardState[finalRow][finalCol] <= 'Z');

    const isPawn = (boardState[initialRow][initialCol] == "P" || boardState[initialRow][initialCol] == "p");

    if (whiteTakesBlack) {
        if (!isPawn){
            console.log("White eliminates Black");
            return 1;
        }
        else if (isPawn && (finalRow-initialRow==-1*flippedDrn)&&(Math.abs(finalCol-initialCol)==1)){
            console.log("White pawn eliminates Black");
            return 1;            
        }
    }
    else if (blackTakesWhite) {
        if (!isPawn) {
            console.log("Black eliminates White");
            return 1;
        }
        else if (isPawn && (finalRow-initialRow==1*flippedDrn)&&(Math.abs(finalCol-initialCol)==1)){
            console.log("Black pawn eliminates White");
            return 1;            
        }
    }
    console.log("No elimination");
    return 0;
}


//-----------------------------Alternative Move Logic----------------------------------
function alternateMove() {
    return (whitemove && (boardState[initialRow][initialCol] >= 'A' && boardState[initialRow][initialCol] <= 'Z') || (blackmove && (boardState[initialRow][initialCol] >= 'a' && boardState[initialRow][initialCol] <= 'z')))
}

function validmove(initial, final) {
    //pawn logic
    if (pieceElimination()||((boardState[initialRow][initialCol] == "p" && ((initialRow - finalRow == -1*flippedDrn) || ((initialRow == 1) && (initialRow - finalRow == -2)))) || (boardState[initialRow][initialCol] == "P" && ((initialRow - finalRow == 1*flippedDrn) || (initialRow == 6) && (initialRow - finalRow == 2)))) && initialCol == finalCol && (boardState[finalRow][finalCol] == " " )) {
        console.log("valid pawn move");
        return 1;
    }
    //rook logic
    if ((boardState[initialRow][initialCol] == "r" || boardState[initialRow][initialCol] == "R") && (initialRow == finalRow || initialCol == finalCol) && (boardState[finalRow][finalCol] == " " || pieceElimination())) {
        if (validPathRook()) return 1;
        else return 0;
    }
    //knight logic
    if ((boardState[initialRow][initialCol] == "n" || boardState[initialRow][initialCol] == "N") && ((Math.abs(initialRow - finalRow) == 2 && Math.abs(initialCol - finalCol) == 1) || (Math.abs(initialRow - finalRow) == 1 && Math.abs(initialCol - finalCol) == 2)) && (boardState[finalRow][finalCol] == " " || pieceElimination())) {
        return 1;
    }
    //bishop logic
    if ((boardState[initialRow][initialCol] == "b" || boardState[initialRow][initialCol] == "B") && (Math.abs(initialRow - finalRow) == Math.abs(initialCol - finalCol)) && (boardState[finalRow][finalCol] == " " || pieceElimination())) {
        if (validPathBishop()) return 1;
        else return 0;
    }
    //queen logic
    if ((boardState[initialRow][initialCol] == "q" || boardState[initialRow][initialCol] == "Q") && (Math.abs(initialRow - finalRow) == Math.abs(initialCol - finalCol) || initialRow == finalRow || initialCol == finalCol) && (boardState[finalRow][finalCol] == " " || pieceElimination())) {
        if ((validPathRook() && (initialRow == finalRow || initialCol == finalCol)) || (validPathBishop() && (Math.abs(initialRow - finalRow) == Math.abs(initialCol - finalCol)))) return 1;
        else return 0;
    }
    //king logic
    if ((boardState[initialRow][initialCol] == "k" || boardState[initialRow][initialCol] == "K") && (Math.abs(initialRow - finalRow) <= 1 && Math.abs(initialCol - finalCol) <= 1) && (boardState[finalRow][finalCol] == " " || pieceElimination())) {
        return 1;
    }
    console.log("invalid move");
    return 0;
}

//-----------------------------Piece Block Logic: Rook----------------------------------
function validPathRook() {
    if (initialCol == finalCol) {
        for (let i = Math.min(initialRow, finalRow) + 1; i < Math.max(initialRow, finalRow); i++) {
            if (boardState[i][initialCol] != " ") {
                console.log(`Path blocked at ${i}, ${initialCol}`);
                return 0;
            }
        }
    }
    else if (initialRow == finalRow) {
        for (let j = Math.min(initialCol, finalCol) + 1; j < Math.max(initialCol, finalCol); j++) {
            if (boardState[initialRow][j] != " ") {
                console.log(`Path blocked at ${initialRow}, ${j}`);
                return 0;
            }
        }
    }
    return 1;
}

//-----------------------------Piece Block Logic: Bishop----------------------------------
function validPathBishop() {
    const rowStep = finalRow > initialRow ? 1 : -1;
    const colStep = finalCol > initialCol ? 1 : -1;

    let tempRow = initialRow + rowStep;
    let tempCol = initialCol + colStep;

    while (tempRow !== finalRow && tempCol !== finalCol) {
        if (boardState[tempRow][tempCol] !== " ") {
            console.log(`Path blocked at ${tempRow}, ${tempCol}`);
            return 0;
        }
        tempRow += rowStep;
        tempCol += colStep;
    }
    return 1;
}

//-----------------------------Move Logic----------------------------------
function movePiece(selected1, final) {

    boardState[finalRow][finalCol] = boardState[initialRow][initialCol];
    boardState[initialRow][initialCol] = " ";

}

//-----------------------------Swap Logic----------------------------------
function swapPieces(selected1, final) {
    // swap the board state values
    // const initialRow = parseInt(initial.charAt(0)) - 1;
    // const initialCol = parseInt(initial.charAt(1)) - 1;
    // const finalRow = parseInt(final.charAt(0)) - 1;
    // const finalCol = parseInt(final.charAt(1)) - 1;
    const temp = boardState[initialRow][initialCol];
    boardState[initialRow][initialCol] = boardState[finalRow][finalCol];
    boardState[finalRow][finalCol] = temp;
}

//-----------------------------Board State----------------------------------

function printBoardState() {
    console.log("Current Board State:");
    for (let i = 0; i < 8; i++) {
        console.log(boardState[i].join("|"));
    }
}

printBoardState();
renderBoard();

function updatePieceColors() {

}


//------------------------------------------------------------------------
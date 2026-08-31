const board = document.getElementsByClassName('board')[0];
var initial = 0, final = 0, initialmove = false;
var initialRow, initialCol, finalRow, finalCol;

//creating options
const options = document.getElementsByClassName('options')[0];
const resetButton = document.createElement('button');
resetButton.classList.add('reset-button');
resetButton.textContent = "Reset";
resetButton.addEventListener('click', function () {
    resetBoard();   
});
options.appendChild(resetButton);

//creating the board
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
            if (initialmove) {
                final = `${i}${j}`;
                console.log(`Clicked on final cell: ${final}`);
                initialmove = false;

                initialRow = Math.floor(initial / 10) - 1;  //zero indexed
                initialCol = (initial % 10) - 1;
                finalRow = Math.floor(final / 10) - 1;
                finalCol = (final % 10) - 1;

                // const initialRow = parseInt(initial.charAt(0)) - 1;
                // const initialCol = parseInt(initial.charAt(1)) - 1;
                // const finalRow = parseInt(final.charAt(0)) - 1;
                // const finalCol = parseInt(final.charAt(1)) - 1;

                if (validmove(initial, final)) { swapPieces(initial, final); }
                printBoardState();
                document.getElementById(initial).classList.remove('selected');

            } else {
                initial = `${i}${j}`;
                document.getElementById(initial).classList.add('selected');
                // document.getElementById(initial).classList.remove('cell');
                initialmove = true;
                console.log(`Clicked on initial cell: ${initial}`);
            }
            renderBoard();
        });

        board.appendChild(cell);

    }
}


function validmove(initial, final) {
    //pawn logic
    if (((boardState[initialRow][initialCol] == "p" && ((initialRow - finalRow == -1) || ((initialRow == 1) && (initialRow - finalRow == -2)))) || (boardState[initialRow][initialCol] == "P" && ((initialRow - finalRow == 1) || (initialRow == 6) && (initialRow - finalRow == 2)))) && initialCol == finalCol && boardState[finalRow][finalCol] == " ") {
        console.log("valid pawn move");
        return 1;
    }
    console.log("invalid move");
    return 0;
}

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
}

function swapPieces(initial, final) {
    // swap the board state values
    // const initialRow = parseInt(initial.charAt(0)) - 1;
    // const initialCol = parseInt(initial.charAt(1)) - 1;
    // const finalRow = parseInt(final.charAt(0)) - 1;
    // const finalCol = parseInt(final.charAt(1)) - 1;
    const temp=boardState[initialRow][initialCol];
    boardState[initialRow][initialCol]=boardState[finalRow][finalCol];
    boardState[finalRow][finalCol]=temp;
}

//addiong pieces
// for (let i = 1; i <= 8; i++) {
//     for (let j = 1; j <= 8; j++) {
//         const cell = document.getElementById(`${i}${j}`);
//         if (i == 2||i==7) {
//             cell.textContent = "♟";
//         }
//         else if (i == 1||i==8) {
//             if (j == 1 || j == 8) {
//                 cell.textContent = "♜";
//             }
//             else if (j == 2 || j == 7) {
//                 cell.textContent = "♞";
//             }
//             else if (j == 3 || j == 6) {
//                 cell.textContent = "♝";
//             }
//             else if (j == 4) {
//                 cell.textContent = "♛";
//             }
//             else if (j == 5) {
//                 cell.textContent = "♚";
//             }
//         }
//     }
// }

//board logic array
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

function printBoardState() {
    console.log("Current Board State:");
    for (let i = 0; i < 8; i++) {
        console.log(boardState[i].join("|"));
    }
}
    
printBoardState();
renderBoard(); 

function renderBoard() {
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            const cell = document.getElementById(`${i}${j}`);
            if (boardState[i - 1][j - 1] == "p") {
                cell.textContent = "♟";
            }
            else if (boardState[i - 1][j - 1] == "r") {
                cell.textContent = "♜";
            }
            else if (boardState[i - 1][j - 1] == "n") {
                cell.textContent = "♞";
            }
            else if (boardState[i - 1][j - 1] == "b") {
                cell.textContent = "♝";
            }
            else if (boardState[i - 1][j - 1] == "q") {
                cell.textContent = "♛";
            }
            else if (boardState[i - 1][j - 1] == "k") {
                cell.textContent = "♚";
            }
            else if (boardState[i - 1][j - 1] == "P") {
                cell.textContent = "♙";
            }
            else if (boardState[i - 1][j - 1] == "R") {
                cell.textContent = "♖";
            }
            else if (boardState[i - 1][j - 1] == "N") {
                cell.textContent = "♘";
            }
            else if (boardState[i - 1][j - 1] == "B") {
                cell.textContent = "♗";
            }
            else if (boardState[i - 1][j - 1] == "Q") {
                cell.textContent = "♕";
            }
            else if (boardState[i - 1][j - 1] == "K") {
                cell.textContent = "♔";
            }
            else {
                cell.textContent = " ";
            }
        }
    }
}
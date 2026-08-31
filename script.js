const board = document.getElementsByClassName('board')[0];
var initial = 0, final = 0, initialmove = false;
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
                if (validmove(initial, final)) { swapPieces(initial, final); }

            } else {
                initial = `${i}${j}`;
                initialmove = true;
                console.log(`Clicked on initial cell: ${initial}`);
            }
        });

        board.appendChild(cell);

    }
}

function validmove(initial, final) {
return 1;
}



function swapPieces(initial, final) {
    const initialCell = document.getElementById(initial);
    const finalCell = document.getElementById(final); //copy the cell number

    const initialPiece = initialCell.textContent;
    const finalPiece = finalCell.textContent; //copy state values

    initialCell.textContent = finalPiece;
    finalCell.textContent = initialPiece; //copy display values

    // Update the board state
    const initialRow = initial / 10;
    const initialCol = initial % 10;
    const finalRow = final / 10;
    const finalCol = final % 10;
    // const initialRow = parseInt(initial.charAt(0)) - 1;
    // const initialCol = parseInt(initial.charAt(1)) - 1;
    // const finalRow = parseInt(final.charAt(0)) - 1;
    // const finalCol = parseInt(final.charAt(1)) - 1;

    boardState[initialRow - 1][initialCol - 1] = finalPiece;
    boardState[finalRow - 1][finalCol - 1] = initialPiece;   //swap board state values
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
const boardState = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"]
];

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
                cell.textContent = "";
            }
        }
    }
}
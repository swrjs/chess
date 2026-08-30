const board = document.getElementsByClassName('board')[0];


//creating the board
for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `${i}${j}`;
        cell.textContent = " ";

        if ((i + j) % 2 === 0) {
            cell.classList.add('white');
        }
        else {
            cell.classList.add('black');
        }

        board.appendChild(cell);

    }
}

//addiong pieces
for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
        const cell = document.getElementById(`${i}${j}`);
        if (i == 2||i==7) {
            cell.textContent = "♟";
        }
        else if (i == 1||i==8) {
            if (j == 1 || j == 8) {
                cell.textContent = "♜";
            }
            else if (j == 2 || j == 7) {
                cell.textContent = "♞";
            }
            else if (j == 3 || j == 6) {
                cell.textContent = "♝";
            }
            else if (j == 4) {
                cell.textContent = "♛";
            }
            else if (j == 5) {
                cell.textContent = "♚";
            }
        }
    }
}
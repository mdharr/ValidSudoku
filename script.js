let sudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2], // 0
    [6, 7, 2, 1, 9, 5, 3, 4, 8], // 1
    [1, 9, 8, 3, 4, 2, 5, 6, 7], // 2
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9] // 8
];

function checkRows() {
    let rows = new Set();
    for (let row = 0; row < sudoku.length; row++) {
        rows = new Set();
        for (let col = 0; col < sudoku[row].length; col++) {
            let value = sudoku[row][col];
            if (rows.has(value)) {
                // console.log('invalid');
                return false;
            }
            rows.add(sudoku[row][col]);
        }
    }
    // console.log('valid');
    return true;
}

function checkCols() {
    let cols = new Set();
    for (let col = 0; col < sudoku[0].length; col++) {
        cols = new Set();
        for (let row = 0; row < sudoku[col].length; row++) {
            let value = sudoku[row][col];
            if (cols.has(value)) {
                // console.log('invalid');
                return false;
            };
            cols.add(sudoku[row][col]);
        }
    }
    // console.log('valid');
    return true;
}

function checkSquares() {
    for (let rowStart = 0; rowStart < 9; rowStart += 3) {
        for (let colStart = 0; colStart < 9; colStart += 3) {
            let square = new Set();
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    let value = sudoku[rowStart + row][colStart + col];
                    if (square.has(value)) {
                        // console.log('invalid');
                        return false;
                    }
                    square.add(value);
                }
            }
        }
    }
    // console.log('valid');
    return true;
}

function checkValid() {
    const rowsCheck = checkRows();
    const colsCheck = checkCols();
    const squaresCheck = checkSquares();

    if (rowsCheck && colsCheck && squaresCheck) return true;
    return false;
}

const sudokuSolved = checkValid();
console.log(sudokuSolved);
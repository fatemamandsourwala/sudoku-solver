const sudoku_puzzle = [
    ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
];

function isValid(sudoku, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (sudoku[row][i] == k || sudoku[i][col] == k || sudoku[m][n] == k) {
            return false;
        }
    }
    return true;
}

function solve(sudoku) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] == '.') {
                for (let k = 1; k <= 9; k++) {
                    if (isValid(sudoku, i, j, k)) {
                        sudoku[i][j] = `${k}`;
                        if (solve(sudoku)) {
                            return true;
                        } else {
                            sudoku[i][j] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

console.log('sudoku_puzzle', sudoku_puzzle);

solve(sudoku_puzzle);

console.log('sudoku_puzzle_solved', sudoku_puzzle);
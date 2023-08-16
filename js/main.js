function triangle (rows, cols) {
    if ( cols === 0 || cols === rows) {
        return 1;
    } else {
        return triangle(rows - 1, cols -1) + triangle(rows - 1, cols);
    }
}

function visual(numbers) {
    for (let i = 0; i < numbers; i++) {
        let rows = " ";
        for (let k = 0; k <= i; k++){
            rows += triangle(i, k) + " ";
        }
        console.log (' '.repeat((numbers - i)) + rows);
    }
}
const rowsCount = 14;
visual(rowsCount);
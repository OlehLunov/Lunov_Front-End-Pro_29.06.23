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
            const value = triangle(i, k);
            rows += value + ' ';
        }
        console.log (' '.repeat((numbers - i)) + rows);
    }
}
const numberOfRows = 13;
visual(numberOfRows);
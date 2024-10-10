function printInvertedTriangle(rows) {
    for (let i = rows; i > 0; i--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
}


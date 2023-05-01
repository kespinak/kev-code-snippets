function logPerimeter(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const output = [];

  // Loop through the matrix
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      // Check if current cell is on the perimeter
      if (i === 0 || i === numRows - 1 || j === 0 || j === numCols - 1) {
        output.push(matrix[i][j]);
      }
    }
  }

  console.log(output.join(', '));
  console.log(output);
}

const matrix = [  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

logPerimeter(matrix);

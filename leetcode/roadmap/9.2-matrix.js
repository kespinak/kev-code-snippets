function logPerimeter(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const output = [];

  // Loop through the first row
  for (let i = 0; i < numCols; i++) {
    output.push(matrix[0][i]);
  }

  // Loop through the last column
  for (let i = 1; i < numRows - 1; i++) {
    output.push(matrix[i][numCols - 1]);
  }

  // Loop through the last row (in reverse order)
  for (let i = numCols - 1; i >= 0; i--) {
    output.push(matrix[numRows - 1][i]);
  }

  // Loop through the first column (in reverse order)
  for (let i = numRows - 2; i >= 1; i--) {
    output.push(matrix[i][0]);
  }

  console.log(output.join(', '));
}

const matrix = [  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

logPerimeter(matrix);

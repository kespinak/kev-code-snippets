function logPerimeter(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Loop through the first row
  for (let i = 0; i < numCols; i++) {
    console.log(matrix[0][i]);
  }

  // Loop through the last row
  for (let i = 0; i < numCols; i++) {
    console.log(matrix[numRows - 1][i]);
  }

  // Loop through the first column (skip the corners since they were already logged)
  for (let i = 1; i < numRows - 1; i++) {
    console.log(matrix[i][0]);
  }

  // Loop through the last column (skip the corners since they were already logged)
  for (let i = 1; i < numRows - 1; i++) {
    console.log(matrix[i][numCols - 1]);
  }
}

const matrix = [  
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

logPerimeter(matrix);

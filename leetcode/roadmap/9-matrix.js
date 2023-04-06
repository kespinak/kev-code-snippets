function riverSizes(matrix) {
  const sizes = []; //initialize answer
  const visited = matrix.map(row => row.map(value => false)); //initialize matrix with every position as false

  // we will now iterate through the matrix
  for (let i = 0; i<matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue; //if visited, skip
      traverseNode(i, j, matrix, visited, sizes); //if not visited then traverse the node (up, down, left right)
    }
  }

  return sizes;
}

function traverseNode(i = row, j = column, matrix, visited, sizes) {  //I=ROW, J=COLUMN
  let currentRiverSize = 0;

  // iterative + stack aka depth first search. we will intiialize this with our current node aka 1st node to apply traverseNode() function
  const nodesToExplore = [[i, j]]; //I=ROW, J=COLUMN
  //we will traverse/iterate through this list
  while (nodesToExplore.length) {
    //initialize the currentNode that we will explore...
    const currentNode = nodesToExplore.pop();
    i = currentNode[0]; //I=ROW, J=COLUMN
    j = currentNode[1]; //I=ROW, J=COLUMN

    //analyze the currentNode - if visited then here are our actions: 
    if (visited[i][j]) continue; //we will skip

    //analyze the currentNode - if not visited then here are our actions: 
    visited[i][j] = true; //1.mark as visited 
    if (matrix[i][j] === 0) continue; //2. if value=0, skip 
    currentRiverSize++; //3. else if value=1, then update currentriversize
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited) //4. get an array of "unvisited neighbors"
    for (const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor); // add these "unvisited neighbors" to nodesToExplore so we will visit them...
    }
  } 

  //once we break out of the while loop, we can update our answer array
  if (currentRiverSize > 0) sizes.push(currentRiverSize);    
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];

  // i > 0 means that we can check above
  if (i > 0 && !visited[i-1][j]) unvisitedNeighbors.push([i-1, j]);
  // i < matrix.length-1 means we are not in last row, and therefore can check below
  if (i < matrix.length-1 && !visited[i+1][j]) unvisitedNeighbors.push([i+1, j]);
  // j>0 means we are not in left most column and therefore can check left
  if (j > 0 && !visited[i][j-1]) unvisitedNeighbors.push([i, j-1]);
  // j < matrix[0].length means less than the row length aka not the right most column, therefore we can check to our right
  if (j < matrix[0].length-1 && !visited[i][j+1]) unvisitedNeighbors.push([i, j+1]);

  return unvisitedNeighbors;
}


const exampleMatrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

console.log(riverSizes(exampleMatrix)); // expected output: [2, 1, 5, 2]
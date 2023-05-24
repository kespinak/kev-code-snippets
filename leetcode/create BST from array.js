// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0)
  return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo)
}

function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubreeInfo) {
  //base case1: if the proOrderTraversalValues is empty aka we traversed through everything, then we will return null
  if (currentSubreeInfo.rootIdx === preOrderTraversalValues.length) return null

  // base case2: the rootValue is outside our bounds aka this is an invalid BST, then return null
  const rootValue = preOrderTraversalValues[currentSubreeInfo.rootIdx]
  if (rootValue < lowerBound || rootValue >= upperBound) return null
  // else this is a valid value to add, therefore we will create a node
  currentSubreeInfo.rootIdx += 1
  const leftSubtree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubreeInfo)
  const rightSubtree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubreeInfo)
  return new BST(rootValue, leftSubtree, rightSubtree)
}

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx
  }
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;






/*
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let count = 0;

function reconstructBst(preOrderTraversalValues) {
  count = 0; // Reset count to 0

  return buildTree(preOrderTraversalValues, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function buildTree(arr, min, max) {
  if (count >= arr.length || arr[count] < min || arr[count] >= max) {
    return null;
  }

  const value = arr[count];
  const tree = new BST(value);

  count++;
  tree.left = buildTree(arr, min, value);
  tree.right = buildTree(arr, value, max);

  return tree;
}


// Do not edit the lines below.
exports.BST = BST;
*/

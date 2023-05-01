// THIS IS ME REVISITING THIS PROBLEM 
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const answer = []
  calcRunningSum(answer, 0, root)
  return answer
}

function calcRunningSum(answer, runningSum, node) {
  if (!node) return 

  runningSum = runningSum + node.value

  if (node.left == null && node.right == null) {
    answer.push(runningSum)
    return
  }

  calcRunningSum(answer, runningSum, node.left)
  calcRunningSum(answer, runningSum, node.right)
}
// 1. recursion + iteration
//   create a recursive function to add number with previous node
//   if not on the leaf node, then call the recursive function
//   if the leaf nodes .left and .right == null, then you reached the end node aka leaf node
//   add the sum and append it to the answer aka an array of all the branch sums

/*
sample input = 
              1
          2       3
        4   5    6 7
       8 9 10 

sample output = [15, 16, 18, 10, 11]
15 = 1+2+4+8
16 = 1+2+4+9
18 = 1+2+5+10
10 = 1+3+6
11 = 1+3+7

{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": "10", "right": null, "value": 5},
      {"id": "6", "left": null, "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "10", "left": null, "right": null, "value": 10}
    ],
    "root": "1"
  }
}
*/
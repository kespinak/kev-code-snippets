const key = {
  '-1': '+',
  '-2': '-',
  '-3': '/',
  '-4': '*'
};

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function evaluateExpressionTree(tree) {
  if (tree.value >= 0) {
    return tree.value;
  }

  const leftValue = evaluateExpressionTree(tree.left);
  const rightValue = evaluateExpressionTree(tree.right);

  if (key.hasOwnProperty(tree.value)) {
    const answer = (`${leftValue} ${key[tree.value]} ${rightValue}`)
    console.log(answer)
    const evalAnswer = eval(answer)
    const roundAnswer = Math.trunc(evalAnswer)
    return roundAnswer
  }
}

// Create a binary expression tree
const root = new BinaryTree(-1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.left = new BinaryTree(-2);
root.right.right = new BinaryTree(-3);

// Evaluate the expression tree
const result = evaluateExpressionTree(root);
console.log(result);

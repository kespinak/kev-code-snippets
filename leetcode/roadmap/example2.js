class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function consoleLogTreeInOrder(tree) {
  const answer = [];

  recursiveFunction(answer, tree);

  return answer;
}

function recursiveFunction(answer, node) {
  //base case:
  if (node === null) {
    return;
  }

  answer.push(node.value);
  recursiveFunction(answer, node.left);
  recursiveFunction(answer, node.right);
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.left.left.left = new BinaryTree(6);

console.log(consoleLogTreeInOrder(root));

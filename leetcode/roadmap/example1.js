class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function consoleLogTreeInOrder(tree) {
  const answer = [];
  const queue = [tree];

  while (queue.length > 0) {
    const node = queue.shift();
    answer.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return answer;
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.left.left.left = new BinaryTree(6);

console.log(consoleLogTreeInOrder(root));

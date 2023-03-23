function nodeDepths(root) {
  let sum = 0;
  const stack = [{ node: root, depth: 0 }];

  // console.log(sum, stack)

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    
    const nodeObj = stack.pop();
    console.log(nodeObj)

    if (!node) continue;

    sum += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });

    // console.log(sum, stack)
  }
  console.log(sum);
  return sum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Example usage:
const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);
console.log(nodeDepths(root)); // Output: 10
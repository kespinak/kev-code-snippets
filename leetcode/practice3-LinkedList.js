class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  console.log('currentNode:', currentNode)
  
  while (currentNode !== null) {
    let nextDistinctNode = currentNode.next
    while (nextDistinctNode !== null && nextDistinctNode.value == currentNode.value) {
      nextDistinctNode = nextDistinctNode.next;
    }

    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }
  
  return linkedList;
}

const ll = new LinkedList(1);
ll.next = new LinkedList(9);
ll.next.next = new LinkedList(8);
ll.next.next.next = new LinkedList(3);
ll.next.next.next.next = new LinkedList(4);
ll.next.next.next.next.next = new LinkedList(4);
ll.next.next.next.next.next.next = new LinkedList(4);
ll.next.next.next.next.next.next.next = new LinkedList(5);
ll.next.next.next.next.next.next.next.next = new LinkedList(6);
ll.next.next.next.next.next.next.next.next.next = new LinkedList(6);

removeDuplicatesFromLinkedList(ll);
console.log(ll);



{
  "graph": {
    "nodes": [
      {"children": ["B", "C", "D"], "id": "A", "value": "A"},
      {"children": ["E", "F"], "id": "B", "value": "B"},
      {"children": [], "id": "C", "value": "C"},
      {"children": ["G", "H"], "id": "D", "value": "D"},
      {"children": [], "id": "E", "value": "E"},
      {"children": ["I", "J"], "id": "F", "value": "F"},
      {"children": ["K"], "id": "G", "value": "G"},
      {"children": [], "id": "H", "value": "H"},
      {"children": [], "id": "I", "value": "I"},
      {"children": [], "id": "J", "value": "J"},
      {"children": [], "id": "K", "value": "K"}
    ],
    "startNode": "A"
  }
}

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  const graph = new program.Node('A');
  graph.addChild('B').addChild('C').addChild('D');
  graph.children[0].addChild('E').addChild('F');
  graph.children[2].addChild('G').addChild('H');
  graph.children[0].children[1].addChild('I').addChild('J');
  graph.children[2].children[0].addChild('K');
  chai.expect(graph.depthFirstSearch([])).to.deep.equal(['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']);
});

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);

    for (const child of this.children) {
      child.depthFirstSearch(array)
    }

    return array;
  }
}
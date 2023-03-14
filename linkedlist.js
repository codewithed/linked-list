function Node(data = null, nextNodeAddress = null, id) {
  const value = data;
  const nextNode = nextNodeAddress;
  const index = id;

  return { value, nextNode, index };
}

function LinkedList() {
  const head = new Node('head');
  let length = 0;
  let lastNode;

  // append
  const append = (value) => {
    const newNode = new Node(value, null, length);
    // if list is empty head should point to newNode
    if (head.nextNode === null) {
      head.nextNode = newNode;
      lastNode = newNode;
    }
    if (head.nextNode !== null) {
      lastNode.nextNode = newNode;
      lastNode = newNode;
    }
    length += 1;
  };

  // prepend
  const prepend = (value) => {
    const newNode = new Node(value, head.nextNode, length);
    if (head.nextNode === null) {
      lastNode = newNode;
    }
    head.nextNode = newNode;
    length += 1;
  };

  // size
  const size = () => length;

  // tail
  const tail = () => lastNode;

  // return node at given index at(index)
  const at = function getNode(index, node = head.nextNode) {
    if (node === null) {
      return "Couldn't find node";
    }
    if (node.index === index) {
      return node;
    }
    const next = node.nextNode;
    return getNode(index, next);
  };
  // pop
  // contains(value)
  // find(value)
  // toString()
  // insertAt(value, index)
  // removeAt(index)
  return {
    head, lastNode, append, prepend, size, tail, at,
  };
}

const list = LinkedList();
list.append('shulamite');
list.append('claudia');
console.log(list.at(-41));

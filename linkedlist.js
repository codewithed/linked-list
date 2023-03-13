function Node(data = null, nextNodeAddress = null) {
  const value = data;
  const nextNode = nextNodeAddress;

  return { value, nextNode };
}

function LinkedList() {
  const head = new Node('head');
  let lastNode;

  // append
  const append = function (value) {
    const newNode = new Node(value);
    // if list is empty head should point to newNode
    if (head.nextNode === null) {
      head.nextNode = newNode;
      lastNode = newNode;
    }
    if (head.nextNode !== null) {
      lastNode.nextNode = newNode;
      lastNode = newNode;
    }
  };

  // prepend
  const prepend = function (value) {
    const newNode = new Node(value, head.nextNode);
    if (head.nextNode === null) {
      lastNode = newNode;
    }
    head.nextNode = newNode;
  };
  // size
  // head
  // tail
  // at(index)
  // pop
  // contains(value)
  // find(value)
  // toString()
  // insertAt(value, index)
  // removeAt(index)
  return {
    head, lastNode, append, prepend,
  };
}

const list = LinkedList();
list.append('shulamite');
list.append('esther');
console.log(list.head, list.lastNode);

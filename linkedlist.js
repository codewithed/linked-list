function Node(data = null, nextNodeAddress = null) {
  const value = data;
  const nextNode = nextNodeAddress;

  return { value, nextNode };
}

function LinkedList() {
  const head = new Node('head');
  let length = 0;
  let lastNode;

  // append
  const append = (value) => {
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
    length += 1;
  };

  // prepend
  const prepend = (value) => {
    const newNode = new Node(value, head.nextNode);
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
  // at(index)
  // pop
  // contains(value)
  // find(value)
  // toString()
  // insertAt(value, index)
  // removeAt(index)
  return {
    head, lastNode, append, prepend, size, tail,
  };
}

const list = LinkedList();
list.append('shulamite');
list.append('esther');
console.log(list.tail());

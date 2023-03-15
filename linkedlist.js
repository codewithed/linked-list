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
    } else if (head.nextNode !== null) {
      lastNode.nextNode = newNode;
      lastNode = newNode;
    }
    length += 1;
    console.log(length);
  };

  // prepend
  const prepend = (value) => {
    const newNode = new Node(value, head.nextNode, 0);
    if (head.nextNode === null) {
      lastNode = newNode;
    }
    head.nextNode = newNode;
    length += 1;
  };

  const size = () => length;

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
  const pop = (node) => {
    function removeLast(node) {
      if (head.nextNode === null) {
        return 'List is empty';
      }
      if (node.index === length - 2) {
        node.nextNode = null;
        length -= 1;
        return;
      }
      const child = node.nextNode;
      removeLast(child);
    }
    removeLast(head);
  };

  // contains(value)
  const contains = (value) => {
    function checkForVal(node, value) {
      if (node.data !== value && node.nextNode === null) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      checkForVal(node.nextNode, value);
    }
    return checkForVal(head.nextNode);
  };
  // find(value)
  // toString()
  // insertAt(value, index)
  // removeAt(index)
  return {
    head, lastNode, append, prepend, size, tail, at, pop, contains,
  };
}

const list = LinkedList();
list.append('shulamite');
list.append('shu');
console.log(list.contains('shu'));
console.log(list.head);

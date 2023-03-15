function Node(id, data = null, nextNodeAddress = null) {
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
    const newNode = new Node(length, value);
    // if list is empty head should point to newNode
    if (head.nextNode === null) {
      head.nextNode = newNode;
      lastNode = newNode;
    } else if (head.nextNode !== null) {
      lastNode.nextNode = newNode;
      lastNode = newNode;
    }
    length += 1;
  };

  function updateIndexes(node, index) {
    if (node === null) {
      return;
    }
    node.index = index;
    updateIndexes(node.nextNode, index + 1);
  }

  // prepend
  const prepend = (value) => {
    const newNode = new Node(0, value, head.nextNode);
    if (head.nextNode === null) {
      lastNode = newNode;
    }
    head.nextNode = newNode;
    length += 1;
    updateIndexes(newNode.nextNode, 1);
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
  const pop = () => {
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
      return removeLast(child);
    }
    return removeLast(head);
  };

  // contains(value)
  const contains = (value) => {
    function checkForVal(node, value) {
      if (node.value !== value && node.nextNode === null) {
        return false;
      }
      if (node.value === value) {
        return true;
      }
      return checkForVal(node.nextNode, value);
    }
    return checkForVal(head.nextNode, value);
  };

  // find(value)
  const find = (value) => {
    function checkForVal(node, value) {
      if (node.value !== value && node.nextNode === null) {
        return null;
      }
      if (node.value === value) {
        return node.index;
      }
      return checkForVal(node.nextNode, value);
    }
    return checkForVal(head.nextNode, value);
  };

  // toString() represents your LinkedList objects as strings
  function toString() {
    let str = '';
    function addToString(node = head.nextNode) {
      if (node === null) {
        str += '-> null';
        return;
      }
      if (node === head.nextNode) {
        str += `(${node.value})`;
      } else {
        str += ` -> (${node.value}) `;
      }
      addToString(node.nextNode);
    }

    addToString();
    console.log(str);
  }

  return {
    head, lastNode, append, prepend, size, tail, at, pop, contains, find, toString,
  };
}

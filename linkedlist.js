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
  /*
  const pop = () => {
    if (head.nextNode === null) {
      return 'List is empty';
    }
    function removeLast(node) {
      // for only one element
      console.log(node.nextNode);
      if (node.nextNode === null && length === 1) {
        head.nextNode = null;
        length -= 1;
        return;
      }
      if (node.nextNode.nextNode === null && length > 1) {
        node.nextNode = null;
        length -= 1;
      }
      // const next = ;
      // removeLast(next);
    }
    removeLast();
  };
  */

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
list.apppend('shulamite');
list.apppend('claudia');
console.log(list);

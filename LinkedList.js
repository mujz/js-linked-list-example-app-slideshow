class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(node) {
    this.checkIfTypeIsNode(node)
    const isEmpty = this.head === null;
    if (isEmpty) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  delete(nodeToDelete) {
    this.checkIfTypeIsNode(nodeToDelete)
    let here = this.head;
    if (here === nodeToDelete) {
      this.head = here.next;
      if (this.tail === nodeToDelete) {
        this.tail = null;
      }
    } else {
      while (here !== null && here.next !== nodeToDelete) {
        here = here.next;
      }
      here.next = nodeToDelete.next;
    }

    if (nodeToDelete === this.tail) {
      this.tail = here;
    }
  }

  checkIfTypeIsNode(node) {
    if (!node instanceof ListNode) {
      throw TypeError('node is not an instance of ListNode');
    }
  }
}

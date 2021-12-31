class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
  
    unshift(value) {
      const newNode = new Node(value);
  
      if (!this.length) {
        this.tail = newNode;
      } else {
        newNode.next = this.head;
      }
      this.head = newNode;
  
      this.length += 1;
  
      return newNode;
    }
  }

  let list = new SinglyLinkedList()
  list.unshift(9)
  list.unshift(10)
  console.log(list)
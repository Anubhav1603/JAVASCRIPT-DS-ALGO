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
  
    push(value) {
      const newNode = new Node(value);
      if (!this.length) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
  
      this.tail = newNode;
      this.length += 1;
      return newNode;
    }
  
    shift() {

        if (!this.length) {
        return null;
      } else {

        const nodeToRemove = this.head;
  
        this.head = this.head.next;
  
        this.length -= 1;
  
        if (!this.length) {
          this.tail = null;
        }
  
        return nodeToRemove;
      }
    }
  }

  let list = new SinglyLinkedList()
  list.push(5)
  list.push(6)
  list.push(4)
  console.log(list)
  list.shift()
  console.log(list)

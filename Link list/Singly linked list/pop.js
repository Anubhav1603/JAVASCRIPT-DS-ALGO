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
  
    pop() {

      if (!this.length) {
        return null;
      } else {

        let currentNode = this.head;
        let secondToLastNode = this.head;
        while (currentNode.next) {
          secondToLastNode = currentNode;
          currentNode = currentNode.next;
        }

        secondToLastNode.next = null;

        this.tail = secondToLastNode;

        this.length -= 1;

        if (!this.length) {
          this.head = null;
          this.tail = null;
        }

        return currentNode;
      }
    }
  }
let list = new SinglyLinkedList()
list.push(5)
list.push(6)
list.push(4)
console.log(list)
list.pop()
console.log(list)
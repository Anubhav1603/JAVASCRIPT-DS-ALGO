class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}
class SinglyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0; 
	}
	push(val){
		var newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = this.head;
		}else{
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this.length
	}
}

var list = new SinglyLinkedList() //instantiating SinglyLinkedList class
let push_func = list.push(56)// using SinglyLinkedList push function
push_func = list.push(68)
push_func = list.push(90)
push_func = list.push(46)
console.log(push_func)
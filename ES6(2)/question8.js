//8. Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)

class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor(firstNode) {
            this.head = firstNode;
            this.last = firstNode;
    }

    addfirst = (node) => {
        node.next = this.head;
        this.head = node;
    }

    addLast = (node) => {
        this.last.next = node;
        this.last = node;
    }

    getLength = () => {
        let currentNode = this.head;
        let length = 0;
        while(currentNode) {
            length ++;
            currentNode = currentNode.next;
        }
        return length;
    }

    printlist = () => {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    getFirst = () => this.head;
    getLast = () => this.last;
}

let n1 = new node(1);
let n2 = new node(2);
let n3 = new node(3);
let n4 = new node(4);
let n5 = new node(5);
let n6 = new node(6);

let list = new linkedList(n1);

list.addLast(n2);
list.addLast(n3);
list.addfirst(n4);
list.addfirst(n5);
list.addfirst(n6);

list.printlist();
console.log("length: " + list.getLength());
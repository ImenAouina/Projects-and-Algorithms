class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    //Add Front
    //Write a method that accepts a value and create a new node,
    // assign it to the list head, and return a pointer to the new head node.

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    //Remove Front
    //Write a method to remove the head node and return the new list head node. 
    //If the list is empty, return null.
    removeFront() {
        if (!this.head) {
            return null; 
        }
        const removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
    }

    //Front
    //Write a method to return the value (not the node) at the head of the list. 
    //If the list is empty, return null.

    front() {
        if (this.head === null) {
            return null;
        }
        return this.head.value;
    }
}

// Example usage:
const SLL1 = new SLL();

console.log("****add front****");
console.log(SLL1.addFront(18)); // Node { data: 18, next: null }
console.log(SLL1.addFront(5));  // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

console.log("****remove front****");
console.log(SLL1.removeFront()); // Output: Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()); // Output: Node { data: 18, next: null }

console.log("****front****");
console.log(SLL1.addFront(18));
console.log(SLL1.front()); //18
console.log(SLL1.removeFront()); // null
console.log(SLL1.front());// null
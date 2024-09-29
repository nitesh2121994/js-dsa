class Node {
    /**
     *
     */
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    /**
     *
     */
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const currentTopNode = this.top;
            this.top = newNode;
            this.top.next = currentTopNode;
        }
        this.length++;

        return this;
    }

    pop() {
        if (!this.top) return null;
        if (this.length === 1) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.pop();
stack.pop();
console.log(stack);

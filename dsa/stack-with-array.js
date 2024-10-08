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
    constructor(data) {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value)

        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.pop();
console.log(stack);

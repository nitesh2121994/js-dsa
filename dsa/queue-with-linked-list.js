class Node {
    /**
     *
     */
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    /**
     *
     */
    constructor(data) {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;

        return this;
    }

    dequeue() {
        if (!this.last) return null;
        if (this.length === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);

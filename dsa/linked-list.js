
class Node {
    /**
     *
     */
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    /**
     *
     */

    constructor(data) {
        this.head = new Node(data);

        this.tail = this.head;
        this.size = 1
    }

    append(nodeData) {
        const newNode = new Node(nodeData);

        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;

        return this;
    }

    prepend(nodeData) {
        const newNode = new Node(nodeData);

        newNode.next = this.head;
        this.head = newNode;
        this.size++;

        return this;
    }

    insert(index, value) {
        if (index >= this.size) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.size++;

        return this;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1); // body
        const nextNode = leader.next;
        leader.next = nextNode.next;
        this.size--;

        return this;
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode;
    }

    printList() {
        const list = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return list;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        // [1, 10, 21, 88]
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first
        return this.printList();
    }
}

const linkedList = new LinkedList("html");
linkedList.append("body");
linkedList.append("div");
linkedList.prepend("mainHtml");
linkedList.insert(3, "main");
console.log(linkedList);

console.log(linkedList.printList());
// linkedList.remove(2);
console.log(linkedList.reverse());



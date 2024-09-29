
class Node {
    /**
     *
     */
    constructor(value, prev) {
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
}

class DoublyLinkedList {
    /**
     *
     */

    constructor(data) {
        this.head = new Node(data, null);

        this.tail = this.head;
        this.tail.prev = this.head;
        this.head.prev = null
        this.size = 1
    }

    append(nodeData) {
        const newNode = new Node(nodeData, this.tail);

        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;

        return this;
    }

    prepend(nodeData) {
        const newNode = new Node(nodeData, null);
        newNode.next = this.head;

        this.head.prev = newNode;
        this.head = newNode;
        this.size++;

        return this;
    }

    insert(index, value) {
        if (index >= this.size) {
            return this.append(value);
        }

        const newNode = new Node(value, null);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.size++;

        return this;
    }

    remove(index) {
        const leader = this.traverseToIndex(index); // body
        const follower = leader.next;
        const leaderPrev = leader.prev;
        leaderPrev.next = follower;
        // if this is last node then it we should not set the prev value
        if (follower !== null) {
            follower.prev = leaderPrev;
        } else {
            this.tail = leaderPrev;
        }
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
}

const linkedList = new DoublyLinkedList("html");
linkedList.append("body");
linkedList.append("div");
linkedList.prepend("mainHtml");
console.log(linkedList);

linkedList.insert(3, "main");
console.log(linkedList);
console.log(linkedList.printList());
linkedList.remove(4);
console.log(linkedList.printList());


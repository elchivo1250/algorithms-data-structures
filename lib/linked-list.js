const LinkedListNode = require('./linked-list-node');

class LinkedList {
    constructor() {
        this.head = null; 
        this.length = 0;
    }

    append(data) {
        const node = new LinkedListNode(data);

        if (this.head === null) {
            this.head = node;
            this.length++;
            return;
        }

        let currNode = this.head;

        while (currNode.next) {
            currNode = currNode.next;
        }

        currNode.next = node;
        this.length++;
    }

    search(data) {
        let currNode = this.head;
        let prevNode = null;
        let idx = 0;

        while (currNode) {
            if (currNode.data === data) {
                return [idx, prevNode, currNode];
            }

            prevNode = currNode;
            currNode = currNode.next;

            idx++;
        }
        
        return [-1, null, null];
    }

    searchIdx(idx) {
        if (idx >= this.length || idx < 0) {
            throw new RangeError("Search index out of range");
        }

        let currNode = this.head;
        let prevNode = null;
        let currIdx = 0;

        while (currIdx < idx) {
            prevNode = currNode;
            currNode = currNode.next;
            currIdx++;
        }
        
        return currNode ? [currIdx, prevNode, currNode] : [-1, null, null];
    }

    searchIdxAndInsert(idx, data) {
        if (idx > this.length + 1 || idx < 0) {
            throw new Error("Insertion index out of range");
        }

        const node = new LinkedListNode(data);
        let currNode = this.head;
        let prevNode = null;
        let currIdx = 0;

        if (idx === 0) {
            node.next = currNode;
            this.head = node;
            this.length++;
            return;
        }

        while (currIdx < idx) {
            currIdx++;
            prevNode = currNode;
            currNode = currNode.next;
        }

        node.next = currNode;
        prevNode.next = node;
        this.length++;
    }

    insertNodeAfter(curr, node) {
        if (curr === null) {
            const head = this.head;
            node.next = head;
            this.head = node;
        } else {
            node.next = curr.next;
            curr.next = node;
        }

        this.length++;
    }

    removeNodeAfter(prev) {
        if (prev.next === null) {
            throw new RangeError('You have attempted to remove a node after the tail');
        }

        prev.next = prev.next.next;
        this.length--;
    }

    searchAndRemove(data) {
        let currNode = this.head;
        let prevNode = null;

        if (currNode.data === data) {
            this.head = currNode.next;
            this.length--;
            return;
        }

        while (currNode && currNode.data !== data) {
            prevNode = currNode;
            currNode = currNode.next;
        }

        if (!currNode) {
            throw new ReferenceError("Data not found");
        }

        prevNode.next = currNode.next;
        this.length--;
    }
};

module.exports = LinkedList;

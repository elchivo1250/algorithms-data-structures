class Stack {
    constructor(collection) {
        // asbstract equality makes null and undefined equivalent
        if (collection != null && !Array.isArray(collection)) {
            throw new TypeError('You have provided a collection that is not an array.');
        }

        // copy by value with slice
        this.collection = collection ? collection.slice() : []; 
        this.size = this.collection.length;
    }

    push(element) {
        this.collection[this.size] = element;
        this.size++;
    }

    pop() {
        let element;

        try {
            element = this.collection[this.size - 1];
            this.collection = this.collection.slice(0, -1); 
            this.size--;
        } catch (err) {
            return undefined;
        }

        return element;
    }

    peek() {
        return this.collection[this.size - 1];
    }
}

module.exports = Stack;

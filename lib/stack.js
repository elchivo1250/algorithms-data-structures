const Collection = require('./collection');

class Stack {
    constructor(inputData) {
        const {data, size} = new Collection(inputData);
        Object.assign(this, {data, size});
    }

    push(element) {
        this.data[this.size] = element;
        this.size++;
    }

    pop() {
        let element;

        try {
            element = this.data[this.size - 1];
            this.data = this.data.slice(0, -1); 
            this.size--;
        } catch (err) {
            return undefined;
        }

        return element;
    }

    peek() {
        return this.data[this.size - 1];
    }
}

module.exports = Stack;

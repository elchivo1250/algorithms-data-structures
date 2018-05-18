const Collection = require('./collection');

class Queue {
    constructor(inputData) {
        const {data, size} = new Collection(inputData);
        Object.assign(this, {data, size});
    }
    
    enqueue(element) {
        this.data[this.size] = element;
        this.size++;
    }

    dequeue() {
        let element;

        try {
            element = this.data[0];
            this.data = this.data.slice(1);
            this.size--;
        } catch (err) {
            return undefined;
        }

        return element;
    }
}

module.exports = Queue;

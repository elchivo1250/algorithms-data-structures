class Queue {
    constructor(inputData) {
        if (inputData == null) {
            inputData = [];
        }
            
        if (!Array.isArray(inputData)) {
            throw new TypeError('The input data is not an array.');
        }

        const {data, size} = {data: inputData, size: inputData.length};
        Object.assign(this, {data, size});
    }
    
    enqueue(element) {
        this.data[this.size] = element;
        this.size++;
    }

    dequeue() {
        let element;

        element = this.data[0];
        this.data = this.data.slice(1);
        this.size--;

        return element;
    }
}

module.exports = Queue;

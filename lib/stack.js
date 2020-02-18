class Stack {
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

    push(element) {
        this.data[this.size] = element;
        this.size++;
    }

    pop() {
        let element;

        element = this.data[this.size - 1];
        this.data = this.data.slice(0, -1); 
        this.size--;

        return element;
    }

    peek() {
        return this.data[this.size - 1];
    }
}

module.exports = Stack;

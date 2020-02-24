class Heap {
    constructor(data) {
        if (data == null) {
            data = [];
        }

        if (!Array.isArray(data)) {
            throw new TypeError('The input must be an array');
        }

        this.data = data;
    }

    maxHeapify(input, nodeIdx, length) {
        let left = 2 * nodeIdx + 1;
        let right = 2 * nodeIdx + 2;
        let max = nodeIdx;

        if (left < length && input[left] > input[max]) {
            max = left;
        }

        if (right < length && input[right] > input[max]) {
            max = right;
        }

        if (max != nodeIdx) {
            const temp = input[nodeIdx];
            input[nodeIdx] = input[max];
            input[max] = temp;

            input = this.maxHeapify(input, max, length);
        }

        return input;
    }

    minHeapify(input, nodeIdx, length) {
        let left = 2 * nodeIdx + 1;
        let right = 2 * nodeIdx + 2;
        let min = nodeIdx;

        if (left < length && input[left] < input[min]) {
            min = left;
        }

        if (right < length && input[right] < input[min]) {
            min = right;
        }

        if (min != nodeIdx) {
            const temp = input[nodeIdx];
            input[nodeIdx] = input[min];
            input[min] = temp;

            input = this.minHeapify(input, min, length);
        }

        return input;
    }

    heapSort(input) {
        let length = input.length;

        for (let ii = Math.floor(input.length / 2); ii >= 0; ii--) {
            input = this.maxHeapify(input, ii, length);
        }

        for (let ii = input.length - 1; ii > 0; ii--) {
            let temp = input[0];
            input[0] = input[ii];
            input[ii] = temp;

            length--;

            input = this.maxHeapify(input, 0, length);
        }

        return input;
    }

    isMaxHeap(input, nodeIdx, length) {
        if (nodeIdx > ((length - 2) / 2)) { 
            return true;
        }

        const left = 2 * nodeIdx + 1;
        const right = 2 * nodeIdx + 2;
              
        if (input[nodeIdx] >= input[left] && input[nodeIdx] >= input[right] && this.isMaxHeap(input, left, length) && this.isMaxHeap(input, right, length)) {
            return true;
        }
      
        return false;

    }

    isMinHeap(input, nodeIdx, length) {
        if (nodeIdx > ((length - 2) / 2)) { 
            return true;
        }

        const left = 2 * nodeIdx + 1;
        const right = 2 * nodeIdx + 2;
              
        if (input[nodeIdx] <= input[left] && input[nodeIdx] <= input[right] && this.isMinHeap(input, left, length) && this.isMinHeap(input, right, length)) {
            return true;
        }
      
        return false;

    }
}

module.exports = Heap;

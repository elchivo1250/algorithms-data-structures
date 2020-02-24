const ava = require('ava');
const Heap = require('../lib/heap');

ava('Heap constructor success',  (t) => {
    let expected = [3, 0, 2, 5, -1, 4, 1];

    let heap = new Heap(expected);

    t.deepEqual(heap.data, expected, 'The data is incorrect');
});

ava('Heap constructor exception',  (t) => {
    const data = 'llama';

    t.throws(() => {
        let heap = new Heap(data);
    }, {instanceOf: TypeError});
});

ava('Heap max heapify',  (t) => {
    let data = [-1, 0, 1, 2, 3, 4, 5];

    let heap = new Heap(data);

    let out = heap.data; 

    for (let ii = Math.floor(data.length / 2); ii >= 0; ii--) {
        out = heap.maxHeapify(out, ii, heap.data.length);
    }

    t.true(heap.isMaxHeap(out, 0, out.length), 'The data is not a heap');
});

ava('Heap min heapify',  (t) => {
    let data = [-1, 0, 1, 2, 3, 4, 5];

    let heap = new Heap(data);

    let out = heap.data; 

    for (let ii = Math.floor(data.length / 2); ii >= 0; ii--) {
        out = heap.minHeapify(out, ii, heap.data.length);
    }

    t.true(heap.isMinHeap(out, 0, out.length), 'The data is not a heap');
});

ava('HeapSort', (t) => {
    let heap = new Heap([3, 0, 2, 5, -1, 4, 1]);
    let out = heap.heapSort(heap.data);

    let expected = [-1, 0, 1, 2, 3, 4, 5];

    t.deepEqual(out, expected, 'The output of heapsort is incorrect');
});


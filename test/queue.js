const ava = require('ava');
const Queue = require('../lib/queue');

ava('Queue constructor', (t) => {
    const q = new Queue();

    t.is(q.size, 0, 'The default queue size is incorrect');
    t.deepEqual(q.data, [], 'The default queue data is incorrect');
});

ava('Queue constructor with good param (array)', (t) => {
    const data = ['test', 'test2'];
    const q = new Queue(data);

    t.is(q.size, 2, 'The queue size is incorrect');
    t.deepEqual(q.data, data, 'The queue data is incorrect');
});

ava('Queue constructor with good param (null)', (t) => {
    const data = null;
    const q = new Queue(data);

    t.is(q.size, 0, 'The queue size is incorrect');
    t.deepEqual(q.data, [], 'The queue data is incorrect');
});

ava('Queue constructor with bad param (number)', (t) => {
    const data = 0;

    t.throws(() => {
        const q = new Queue(data);
    }, TypeError);
});

ava('Queue constructor with bad param (object)', (t) => {
    const data = {};

    t.throws(() => {
        const q = new Queue(data);
    }, TypeError);
});

ava('Queue enqueue', (t) => {
    const data = ['test', 'test2', 'test3'];

    const q = new Queue();
    let ret;

    data.forEach((element) => {
        ret = q.enqueue(element);
    });

    t.is(q.size, 3, 'The queue size is incorrect');
    t.deepEqual(q.data, data, 'The queue data is incorrect');
    t.is(ret, undefined, 'Queue.enqueue should not return a value');
});

ava('Queue dequeue', (t) => {
    const data = ['test', 'test2', 'test3'];

    const q = new Queue(data);

    t.is(q.size, 3, 'The queue size is incorrect');
    t.deepEqual(q.data, data, 'The queue size is incorrect');

    const element = q.dequeue();

    t.is(q.size, 2, 'The queue size is incorrect');
    t.is(element, data[0], 'The dequeued element is incorrect');
    t.deepEqual(q.data, [data[1], data[2]], 'The queue data is incorrect');
});

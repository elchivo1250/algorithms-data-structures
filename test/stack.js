const ava = require('ava');
const Stack = require('../lib/stack');

ava('Stack constructor', (t) => {
    const s = new Stack();

    t.is(s.size, 0, 'The default stack size is incorrect');
    t.deepEqual(s.data, [], 'The default stack data is incorrect');
});

ava('Stack constructor with good param (array)', (t) => {
    const data = ['test', 'test2'];
    const s = new Stack(data);

    t.is(s.size, 2, 'The stack size is incorrect');
    t.deepEqual(s.data, data, 'The stack data is incorrect');
});

ava('Stack constructor with good param (null)', (t) => {
    const data = null;
    const s = new Stack(data);

    t.is(s.size, 0, 'The stack size is incorrect');
    t.deepEqual(s.data, [], 'The stack data is incorrect');
});

ava('Stack constructor with bad param (number)', (t) => {
    const data = 0;

    t.throws(() => {
        const s = new Stack(data);
    }, TypeError);
});

ava('Stack constructor with bad param (object)', (t) => {
    const data = {};

    t.throws(() => {
        const s = new Stack(data);
    }, TypeError);
});

ava('Stack push', (t) => {
    const data = ['test', 'test2', 'test3'];

    const s = new Stack();
    let ret;

    data.forEach((element) => {
        ret = s.push(element);
    });

    t.is(s.size, 3, 'The stack size is incorrect');
    t.deepEqual(s.data, data, 'The stack data is incorrect');
    t.is(ret, undefined, 'Stack.push should not return a value');
});

ava('Stack pop', (t) => {
    const data = ['test', 'test2', 'test3'];

    const s = new Stack(data);

    t.is(s.size, 3, 'The stack size is incorrect');
    t.deepEqual(s.data, data, 'The stack size is incorrect');

    const element = s.pop();

    t.is(s.size, 2, 'The stack size is incorrect');
    t.is(element, data[2], 'The popped element is incorrect');
    t.deepEqual(s.data, [data[0], data[1]], 'The stack state is incorrect');
});

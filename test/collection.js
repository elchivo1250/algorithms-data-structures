import ava from 'ava';
const Collection = require('../lib/collection');

ava('Collection constructor', (t) => {
    const q = new Collection();

    t.is(q.size, 0, 'The default collection size is incorrect');
    t.deepEqual(q.data, [], 'The default collection data is incorrect');
});

ava('Collection constructor with good param (array)', (t) => {
    const data = ['test', 'test2'];
    const q = new Collection(data);

    t.is(q.size, 2, 'The collection size is incorrect');
    t.deepEqual(q.data, data, 'The collection data is incorrect');
});

ava('Collection constructor with good param (null)', (t) => {
    const data = null;
    const q = new Collection(data);

    t.is(q.size, 0, 'The collection size is incorrect');
    t.deepEqual(q.data, [], 'The collection data is incorrect');
});

ava('Collection constructor with bad param (number)', (t) => {
    const data = 0;

    t.throws(() => {
        const q = new Collection(data);
    }, TypeError);
});

ava('Collection constructor with bad param (object)', (t) => {
    const data = {};

    t.throws(() => {
        const q = new Collection(data);
    }, TypeError);
});

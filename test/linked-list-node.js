import ava from 'ava';
const LinkedListNode = require('../lib/linked-list-node');

ava('Linked List Node constructor', (t) => {
    const n = new LinkedListNode(1);

    t.is(n.data, 1, "Node 1's data is incorrect");
    t.is(n.next, null, "Node 1's next is incorrect");
});

ava('Linked List Node default constructor', (t) => {
    const n = new LinkedListNode();

    t.is(n.data, undefined, "Node 1's data is incorrect");
    t.is(n.next, null, "Node 1's next is incorrect");
});

ava('Linked List Node next', (t) => {
    const n1 = new LinkedListNode(1);
    const n2 = new LinkedListNode(2);

    n1.next = n2;

    t.is(n1.data, 1, "Node 1's data is incorrect");
    t.is(n2.data, 2, "Node 2's data is incorrect");
    t.is(n1.next, n2, "Node 1's next is incorrect");
    t.is(n2.next, null, "Node 2's next is incorrect");
    t.is(n1.next.data, 2, "Second node's data accessed via first node's next is incorrect");
    t.is(n1.next.next, null, "Second node's next node accessed via first node's next is incorrect");
});

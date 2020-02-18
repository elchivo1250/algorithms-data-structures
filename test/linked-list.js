const ava = require('ava');
const LinkedListNode = require('../lib/linked-list-node');
const LinkedList = require('../lib/linked-list');

ava('Linked List constructor', (t) => {
    const list = new LinkedList();

    t.is(list.head, null, "The linked list's head has been initialized incorrectly");
    t.is(list.length, 0, "The linked list's length has been initialized incorrectly");
});

ava('Linked List append', (t) => {
    const list = new LinkedList();

    const start = 0;
    const length = 3;

    for (let ii = start; ii < length; ii++) {
        list.append(ii);

        t.is(list.head.data, start, "The list's head is incorrect");

        t.is(list.length, ii + 1, "The list's length is incorrect");

        let prevNode = null;
        let currNode = list.head;

        let jj = 0;

        while (currNode) {
            t.is(currNode.data, start + jj, "A node's data is incorrect");

            prevNode = currNode;
            currNode = currNode.next;

            jj++;
        }

        t.is(prevNode.next, null, "The final node's next is incorrect");
    }
});

ava('Linked List search', (t) => {
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    let [idx, prevNode, node] = list.search(1);

    t.is(idx, 0, 'The returned index is incorrect'); 
    t.is(prevNode, null, 'The returned prevNode is incorrect'); 
    t.is(node.data, 1, 'The returned node data is incorrect'); 

    [idx, prevNode, node] = list.search(2);

    t.is(idx, 1, 'The returned index is incorrect'); 
    t.is(prevNode.data, 1, 'The returned prevNode is incorrect'); 
    t.is(node.data, 2, 'The returned node data is incorrect'); 

    [idx, prevNode, node] = list.search(3);

    t.is(idx, 2, 'The returned index is incorrect'); 
    t.is(prevNode.data, 2, 'The returned prevNode is incorrect'); 
    t.is(node.data, 3, 'The returned node data is incorrect'); 
    t.is(node.next, null, "The returned node's next is incorrect"); 
});

ava('Linked List search by index', (t) => {
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    let [idx, prevNode, node] = list.searchIdx(0);

    t.is(idx, 0, 'The returned index is incorrect'); 
    t.is(prevNode, null, 'The returned prevNode is incorrect'); 
    t.is(node.data, 1, 'The returned node data is incorrect'); 

    [idx, prevNode, node] = list.searchIdx(1);

    t.is(idx, 1, 'The returned index is incorrect'); 
    t.is(prevNode.data, 1, 'The returned prevNode is incorrect'); 
    t.is(node.data, 2, 'The returned node data is incorrect'); 

    [idx, prevNode, node] = list.searchIdx(2);

    t.is(idx, 2, 'The returned index is incorrect'); 
    t.is(prevNode.data, 2, 'The returned prevNode is incorrect'); 
    t.is(node.data, 3, 'The returned node data is incorrect'); 
    t.is(node.next, null, "The returned node's next is incorrect"); 

    t.is(list.head.data, 1, "The list's head is incorrect");
});

ava('Linked List insert in middle', (t) => {
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(4);

    list.searchIdxAndInsert(2, 3);
    
    t.is(list.length, 4, "The list's length is incorrect");

    t.is(list.searchIdx(1)[2].data, 2, "The data of the node previous to the inserted node is incorrect");
    t.is(list.searchIdx(2)[2].data, 3, "The inserted node's data is incorrect");
    t.is(list.searchIdx(3)[2].data, 4, "The final node's data is incorrect");

});

ava('Linked List insert at head', (t) => {
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    const node = new LinkedListNode(0);
    list.insertNodeAfter(null, node);

    t.is(list.length, 4, "The list's length is incorrect");

    t.is(list.head.data, 0, "The head's data is incorrect");
    t.is(list.searchIdx(0)[2].data, 0, "The inserted node's data is incorrect");
    t.is(list.searchIdx(1)[2].data, 1, "The second node's data is incorrect");
    t.is(list.searchIdx(2)[2].data, 2, "The third node's data is incorrect");
});

ava('Linked List insert at tail', (t) => {
    const list = new LinkedList();

    list.append(0);
    list.append(1);
    list.append(2);

    list.searchIdxAndInsert(list.length, 3);

    t.is(list.length, 4, "The list's length is incorrect");

    t.is(list.head.data, 0, "The head's data is incorrect");
    t.is(list.searchIdx(3)[2].data, 3, "The inserted node's data is incorrect");
    t.is(list.searchIdx(3)[2].next, null, "The inserted node's next is incorrect");
});

ava('Linked List insert out of range - too high', (t) => {
    const list = new LinkedList();

    list.append(0);
    list.append(1);
    list.append(2);

    const err = t.throws(() => {
        list.searchIdxAndInsert(5, 5);
    });

    t.is(list.length, 3, "The list's length is incorrect");
    t.is(err.message, 'Insertion index out of range', 'The error message is incorrect');
});

ava('Linked List insert out of range - too low', (t) => {
    const list = new LinkedList();

    list.append(0);
    list.append(1);
    list.append(2);

    const err = t.throws(() => {
        list.searchIdxAndInsert(-1, 5);
    });

    t.is(list.length, 3, "The list's length is incorrect");
    t.is(err.message, 'Insertion index out of range', 'The error message is incorrect');
});

ava('Linked List remove from middle', (t) => {
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    list.searchAndRemove(3);
    
    t.is(list.length, 3, "The list's length is incorrect");

    t.is(list.head.data, 1, "The head's data is incorrect");
    t.is(list.searchIdx(0)[2].data, 1, "The head's data is incorrect");
    t.is(list.searchIdx(1)[2].data, 2, "The second node's data is incorrect");
    t.is(list.searchIdx(2)[2].data, 4, "The final node's data is incorrect");
    t.is(list.searchIdx(2)[2].next, null, "The final node's data is incorrect");
});

ava('Linked List remove from head', (t) => {
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    list.searchAndRemove(1);

    t.is(list.length, 3, "The list's length is incorrect");

    t.is(list.head.data, 2, "The head's data is incorrect");
    t.is(list.searchIdx(0)[2].data, 2, "The head's data is incorrect");
    t.is(list.searchIdx(1)[2].data, 3, "The second node's data is incorrect");
    t.is(list.searchIdx(2)[2].data, 4, "The final node's data is incorrect");
    t.is(list.searchIdx(2)[2].next, null, "The final node's data is incorrect");
});

ava('Linked List removed from tail', (t) => {
    const list = new LinkedList();

    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);

    list.searchAndRemove(3);

    t.is(list.length, 3, "The list's length is incorrect");

    t.is(list.head.data, 0, "The head's data is incorrect");
    t.is(list.searchIdx(2)[2].data, 2, "The final node's data is incorrect");
    t.is(list.searchIdx(2)[2].next, null, "The final node's next is incorrect");
});

ava('Linked List remove data not found', (t) => {
    const list = new LinkedList();

    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);

    const err = t.throws(() => {
        list.searchAndRemove(4);
    });

    t.is(list.length, 4, "The list's length is incorrect");
    t.is(err.message, 'Data not found', 'The error message is incorrect');

});

ava('Linked List remove multiple from middle', (t) => {
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    const node = list.search(2)[2];
    list.removeNodeAfter(node);
    list.removeNodeAfter(node);
    
    t.is(list.length, 2, "The list's length is incorrect");

    t.is(list.head.data, 1, "The head's data is incorrect");
    t.is(list.searchIdx(1)[2].next, null, "The final node's data is incorrect");
});


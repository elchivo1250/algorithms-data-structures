const ava = require('ava');
const BinaryTree = require('../lib/binary-tree');
const BinaryTreeNode = require('../lib/binary-tree-node');

ava('Binary Tree constructor', (t) => {
    const tree = new BinaryTree(5);

    t.is(tree.root.data, 5, "Root's data is incorrect");
});

ava('Binary Tree setup tests', (t) => {
    const tree = new BinaryTree();
    const node1 = new BinaryTreeNode(1);
    const node2 = new BinaryTreeNode(2);
    const node3 = new BinaryTreeNode(3);
    const node4 = new BinaryTreeNode(4);
    const node5 = new BinaryTreeNode(5);
    const node6 = new BinaryTreeNode(6);

    tree.root = node4;
    tree.root.left = node2;
    tree.root.left.left = node1;
    tree.root.left.right = node3;
    tree.root.right = node5;
    tree.root.right.right = node6;

    t.is(tree.root.data, 4, "Root's data is incorrect");
    t.is(tree.root.left.data, 2, "Root's left node data is incorrect");
    t.is(tree.root.left.left.data, 1, "Root's leftleft node data is incorrect");
    t.is(tree.root.left.right.data, 3, "Root's left right data is incorrect");
    t.is(tree.root.right.data, 5, "Root's right node data is incorrect");
    t.is(tree.root.right.right.data, 6, "Root's right right node data is incorrect");
});

ava('Binary Tree inorder traversal', (t) => {
    const tree = new BinaryTree();
    const node1 = new BinaryTreeNode(1);
    const node2 = new BinaryTreeNode(2);
    const node3 = new BinaryTreeNode(3);
    const node4 = new BinaryTreeNode(4);
    const node5 = new BinaryTreeNode(5);
    const node6 = new BinaryTreeNode(6);

    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;
    tree.root.left.right = node5;
    tree.root.right.right = node6;

    const expected = [4, 2, 5, 1, 3, 6];

    const out = [];
    tree.inOrderRecursive(tree.root, out);

    t.deepEqual(out, expected, 'The output is incorrect');
});

ava('Binary Tree preorder traversal', (t) => {
    const tree = new BinaryTree();
    const node1 = new BinaryTreeNode(1);
    const node2 = new BinaryTreeNode(2);
    const node3 = new BinaryTreeNode(3);
    const node4 = new BinaryTreeNode(4);
    const node5 = new BinaryTreeNode(5);
    const node6 = new BinaryTreeNode(6);

    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;
    tree.root.left.right = node5;
    tree.root.right.right = node6;

    const expected = [1, 2, 4, 5, 3, 6];

    const out = [];
    tree.preOrderRecursive(tree.root, out);

    t.deepEqual(out, expected, 'The output is incorrect');
});

ava('Binary Tree postorder traversal', (t) => {
    const tree = new BinaryTree();
    const node1 = new BinaryTreeNode(1);
    const node2 = new BinaryTreeNode(2);
    const node3 = new BinaryTreeNode(3);
    const node4 = new BinaryTreeNode(4);
    const node5 = new BinaryTreeNode(5);
    const node6 = new BinaryTreeNode(6);

    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;
    tree.root.left.right = node5;
    tree.root.right.right = node6;

    const expected = [4, 5, 2, 6, 3, 1];

    const out = [];
    tree.postOrderRecursive(tree.root, out);

    t.deepEqual(out, expected, 'The output is incorrect');
});

ava('Binary Tree inorder traversal with stack', (t) => {
    const tree = new BinaryTree();
    const node1 = new BinaryTreeNode(1);
    const node2 = new BinaryTreeNode(2);
    const node3 = new BinaryTreeNode(3);
    const node4 = new BinaryTreeNode(4);
    const node5 = new BinaryTreeNode(5);
    const node6 = new BinaryTreeNode(6);

    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;
    tree.root.left.right = node5;
    tree.root.right.right = node6;

    const expected = [4, 2, 5, 1, 3, 6];

    const out = [];
    tree.inOrderStack(out);

    t.deepEqual(out, expected, 'The output is incorrect');
});

ava('Binary Tree preorder traversal with stack', (t) => {
    const tree = new BinaryTree();
    const node1 = new BinaryTreeNode(1);
    const node2 = new BinaryTreeNode(2);
    const node3 = new BinaryTreeNode(3);
    const node4 = new BinaryTreeNode(4);
    const node5 = new BinaryTreeNode(5);
    const node6 = new BinaryTreeNode(6);

    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;
    tree.root.left.right = node5;
    tree.root.right.right = node6;

    const expected = [1, 2, 4, 5, 3, 6];

    const out = [];
    tree.preOrderStack(out);

    t.deepEqual(out, expected, 'The output is incorrect');
});

ava('Binary Tree postorder traversal with stack', (t) => {
    const tree = new BinaryTree();
    const node1 = new BinaryTreeNode(1);
    const node2 = new BinaryTreeNode(2);
    const node3 = new BinaryTreeNode(3);
    const node4 = new BinaryTreeNode(4);
    const node5 = new BinaryTreeNode(5);
    const node6 = new BinaryTreeNode(6);

    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;
    tree.root.left.right = node5;
    tree.root.right.right = node6;

    const expected = [4, 5, 2, 6, 3, 1];

    const out = [];
    tree.postOrderStack(out);

    t.deepEqual(out, expected, 'The output is incorrect');
});

ava('Binary Tree node insert', (t) => {
    const tree = new BinaryTree(1);

    tree.insert(new BinaryTreeNode(2));
    tree.insert(new BinaryTreeNode(3));
    tree.insert(new BinaryTreeNode(4));
    tree.insert(new BinaryTreeNode(5));
    tree.insert(new BinaryTreeNode(6));

    const expected = [4, 5, 2, 6, 3, 1];

    const out = [];
    tree.postOrderStack(out);

    t.deepEqual(out, expected, 'The output is incorrect');
});

ava('Binary Tree node delete', (t) => {
    const tree = new BinaryTree(1);

    tree.insert(new BinaryTreeNode(2));
    tree.insert(new BinaryTreeNode(3));
    tree.insert(new BinaryTreeNode(4));
    tree.insert(new BinaryTreeNode(5));
    tree.insert(new BinaryTreeNode(6));

    tree.delete(2);

    const expected = [1, 6, 4, 5, 3];

    const out = [];
    tree.preOrderStack(out);

    t.deepEqual(out, expected, 'The output is incorrect');
});

ava('Check if a binary tree is continuous that should be', (t) => {
    const tree = new BinaryTree();

    tree.root = new BinaryTreeNode(3);
    tree.root.left = new BinaryTreeNode(2);
    tree.root.right = new BinaryTreeNode(4);
    tree.root.left.left = new BinaryTreeNode(1);
    tree.root.left.right = new BinaryTreeNode(3);
    tree.root.right.right = new BinaryTreeNode(5);

    t.true(tree.isContinuous(tree.root), 'The tree is not continuous but should be');
});

ava("Check if a binary tree is continuous that shouldn't be", (t) => {
    const tree = new BinaryTree();

    tree.root = new BinaryTreeNode(7);
    tree.root.left = new BinaryTreeNode(5);
    tree.root.right = new BinaryTreeNode(8);
    tree.root.left.left = new BinaryTreeNode(6);
    tree.root.left.right = new BinaryTreeNode(4);
    tree.root.right.right = new BinaryTreeNode(10);

    t.false(tree.isContinuous(tree.root), 'The tree is not continuous but should be');
});

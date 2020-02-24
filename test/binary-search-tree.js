const ava = require('ava');
const BinarySearchTree = require('../lib/binary-search-tree');
const BinaryTreeNode = require('../lib/binary-tree-node');

ava('Binary Search Tree constructor', (t) => {
    const tree = new BinarySearchTree(5);

    t.is(tree.root.data, 5, "Root's data is incorrect");
});

ava('Binary Search Tree setup tests', (t) => {
    const tree = new BinarySearchTree();
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

ava('Binary Search Tree inorder traversal', (t) => {
    const tree = new BinarySearchTree();
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

ava('Binary Search Tree preorder traversal', (t) => {
    const tree = new BinarySearchTree();
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

ava('Binary Search Tree postorder traversal', (t) => {
    const tree = new BinarySearchTree();
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

ava('Binary Search Tree inorder traversal with stack', (t) => {
    const tree = new BinarySearchTree();
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

ava('Binary Search Tree preorder traversal with stack', (t) => {
    const tree = new BinarySearchTree();
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

ava('Binary Search Tree postorder traversal with stack', (t) => {
    const tree = new BinarySearchTree();
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

ava('Binary Search Tree node insert', (t) => {
    const tree = new BinarySearchTree(1);

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

ava('Check if a binary search tree is continuous that should be', (t) => {
    const tree = new BinarySearchTree();

    tree.root = new BinaryTreeNode(3);
    tree.root.left = new BinaryTreeNode(2);
    tree.root.right = new BinaryTreeNode(4);
    tree.root.left.left = new BinaryTreeNode(1);
    tree.root.left.right = new BinaryTreeNode(3);
    tree.root.right.right = new BinaryTreeNode(5);

    t.true(tree.isContinuous(tree.root), 'The tree is not continuous but should be');
});

ava("Check if a binary search tree is continuous that shouldn't be", (t) => {
    const tree = new BinarySearchTree();

    tree.root = new BinaryTreeNode(7);
    tree.root.left = new BinaryTreeNode(5);
    tree.root.right = new BinaryTreeNode(8);
    tree.root.left.left = new BinaryTreeNode(6);
    tree.root.left.right = new BinaryTreeNode(4);
    tree.root.right.right = new BinaryTreeNode(10);

    t.false(tree.isContinuous(tree.root), 'The tree is not continuous but should be');
});

ava('Binary Search Tree Insert', (t) => {
    const tree = new BinarySearchTree(8);
    tree.insertBST(new BinaryTreeNode(7));
    tree.insertBST(new BinaryTreeNode(3));
    tree.insertBST(new BinaryTreeNode(6));
    tree.insertBST(new BinaryTreeNode(4));

    tree.insertBST(new BinaryTreeNode(9));
    tree.insertBST(new BinaryTreeNode(13));
    tree.insertBST(new BinaryTreeNode(14));
    tree.insertBST(new BinaryTreeNode(11));
    tree.insertBST(new BinaryTreeNode(10));
    tree.insertBST(new BinaryTreeNode(18));

    tree.insertBST(new BinaryTreeNode(13));
    tree.insertBST(new BinaryTreeNode(4));
    tree.insertBST(new BinaryTreeNode(19));
    tree.insertBST(new BinaryTreeNode(1));

    const expectedPreOrder = [8, 7, 3, 1, 6, 4, 4, 9, 13, 11, 10, 13, 14, 18, 19];
    
    let out = [];
    tree.preOrderStack(out);

    t.deepEqual(out, expectedPreOrder, 'The preorder traversal was incorrect');

    const expectedInOrder = [1, 3, 4, 4, 6, 7, 8, 9, 10, 11, 13, 13, 14, 18, 19];

    out = [];
    tree.inOrderStack(out);

    t.deepEqual(out, expectedInOrder, 'The preorder traversal was incorrect');
});

ava('Binary Search Tree Insert', (t) => {
    const tree = new BinarySearchTree(8);
    tree.insertBST(new BinaryTreeNode(7));
    tree.insertBST(new BinaryTreeNode(3));
    tree.insertBST(new BinaryTreeNode(6));
    tree.insertBST(new BinaryTreeNode(4));

    tree.insertBST(new BinaryTreeNode(9));
    tree.insertBST(new BinaryTreeNode(13));
    tree.insertBST(new BinaryTreeNode(14));
    tree.insertBST(new BinaryTreeNode(11));
    tree.insertBST(new BinaryTreeNode(10));
    tree.insertBST(new BinaryTreeNode(18));

    tree.insertBST(new BinaryTreeNode(13));
    tree.insertBST(new BinaryTreeNode(4));
    tree.insertBST(new BinaryTreeNode(19));
    tree.insertBST(new BinaryTreeNode(1));

    const searchNodes = [];
    
    searchNodes.push(tree.searchRecursive(tree.root, 19));
    searchNodes.push(tree.searchRecursive(tree.root, 50));
    searchNodes.push(tree.searchRecursive(tree.root, 1));
    searchNodes.push(tree.searchRecursive(tree.root, 13));
    searchNodes.push(tree.searchRecursive(tree.root, 4));
    searchNodes.push(tree.searchRecursive(tree.root, 3));
    
    const expectedSearchData = [19, null, 1, 13, 4, 3];
    const expectedSearchLefts = [null, null, null, 11, 4, 1];
    const expectedSearchRights = [null, null, null, 14, null, 6];

    searchNodes.map((searchNode, idx) => {
        if (searchNode == null) {
            t.deepEqual(searchNode, expectedSearchData[idx], `The data returned for search index ${idx} was incorrect`);
            return;
        }

        t.deepEqual(searchNode.data, expectedSearchData[idx], `The data returned for search index ${idx} was incorrect`);

        if (searchNode.left == null) {
            t.deepEqual(searchNode.left, expectedSearchLefts[idx], `The left node returned for search index ${idx} was incorrect`);
        } else {
            t.deepEqual(searchNode.left.data, expectedSearchLefts[idx], `The left node returned for search index ${idx} was incorrect`);
        }

        if (searchNode.right == null) {
            t.deepEqual(searchNode.right, expectedSearchRights[idx], `The right node returned for search index ${idx} was incorrect`);
        } else {
            t.deepEqual(searchNode.right.data, expectedSearchRights[idx], `The right node returned for search index ${idx} was incorrect`);
        }
    });
});

ava('Binary search tree delete', (t) => {
    const tree = new BinarySearchTree(4);
    tree.insertBST(new BinaryTreeNode(2));
    tree.insertBST(new BinaryTreeNode(6));
    tree.insertBST(new BinaryTreeNode(1));
    tree.insertBST(new BinaryTreeNode(3));
    tree.insertBST(new BinaryTreeNode(5));
    tree.insertBST(new BinaryTreeNode(7));
    
    tree.delete(4);

    let out = [];
    tree.inOrderStack(out);

    console.log(out);

    const expected = [1, 2, 3, 5, 6, 7];

    t.deepEqual(out, expected, `The inorder output did not match the expected output`);
});

const printTree = (tree) => {
    let out = [];
    tree.preOrderStack(out);
    console.log(`out = ${out}`);
}

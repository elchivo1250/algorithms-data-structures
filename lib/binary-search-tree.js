const BinaryTreeNode = require('./binary-tree-node');
const BinaryTree = require('./binary-tree');

class BinarySearchTree extends BinaryTree {
    searchRecursive(node, value) {
        if (node == null || node.data === value) {
            return node;
        }

        if (value < node.data) {
            return this.searchRecursive(node.left, value);
        }

        return this.searchRecursive(node.right, value);
    }

    insertBST(nodeToInsert) {
        this.insertRecursive(this.root, nodeToInsert);
    }

    insertRecursive(currentNode, nodeToInsert) {
        if (currentNode == null) {
            currentNode = nodeToInsert;
            return;
        }

        if (currentNode.data < nodeToInsert.data) {
            if (currentNode.right == null) {
                currentNode.right = nodeToInsert;
            } else {
                this.insertRecursive(currentNode.right, nodeToInsert);
            }
        } else {
            if (currentNode.left == null) {
                currentNode.left = nodeToInsert;
            } else {
                this.insertRecursive(currentNode.left, nodeToInsert);
            }
        }
    }

    delete(data) {
        let node = this.searchRecursive(data);
        this.deleteNode(node);
    }

    deleteNode(node) {
        if (node == null) {
            return node;
        }

         || (node.left == null && node.right == null)) {

        if (node.left == null && node.right) {
            node = node.right;
            return;
        } else if (node.left && node.right == null) {
            node = node.left;
            return;
        } 

        let prev;

        // You can either use the min element of the right subtree as I've done here, or you can use
        // the max element of the left subtree by switching .left to .right in the while loop below
        let current = node.right;

        while (current != null) {
            prev = current;
            current = current.left;
        }

        node.data = prev.data;
    }
}

module.exports = BinarySearchTree;

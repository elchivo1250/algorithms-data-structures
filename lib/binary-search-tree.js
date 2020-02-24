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
}

module.exports = BinarySearchTree;

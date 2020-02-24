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

    search(node, data) {
        let parent = null;
        while (node != null && node.data != data) {
            parent = node;
            
            if (data < node.data) {
                node = node.left;
            } else if (data > node.data) {
                node = node.right;
            }
        }

        return [node, parent];
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

    findMin(node) {
        while (node.left != null) {
            node = node.left;
        }

        return node;
    }

    deleteNodeStack(data) {
        if (data == null) {
            return;
        }

        let parent = null;
        let current = this.root;

        [current, parent] = this.search(current, data);

        if (current == null) {
            return;
        }

        if (current.left == null && current.right == null) {
            if (current == this.root) {
                this.root = null;
                return;
            }

            if (parent.left == current) {
                parent.left = null;
            } else {
                parent.right = null;
            }

            return;
        } else if (current.left != null && current.right != null) {
            let inorderSuccessor = this.findMin(current.right);

            let value = inorderSuccessor.data;

            this.deleteNodeStack(value);

            current.data = value;

            return;
        } 

        let child = current.left == null ? current.right : current.left;

        if (current == this.root) {
            this.root = child;
        } else if (current == parent.left) {
            parent.left = child;
        } else {
            parent.right = child;
        }
    }
}

module.exports = BinarySearchTree;

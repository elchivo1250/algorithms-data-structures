const BinaryTreeNode = require('./binary-tree-node');

class BinaryTree {
    constructor(data) {
        this.root = new BinaryTreeNode(data);
    }

    inOrderRecursive(node, out) {
        if (node == null) {
            return;
        }

        this.inOrderRecursive(node.left, out);

        if (out != null) {
            out.push(node.data);
        } else {

            console.log(node.data);
        }

        this.inOrderRecursive(node.right, out);
    }

    preOrderRecursive(node, out) {
        if (node == null) {
            return;
        }

        if (out != null) {
            out.push(node.data);
        } else {
            console.log(node.data);
        }

        this.preOrderRecursive(node.left, out);

        this.preOrderRecursive(node.right, out);
    }

    postOrderRecursive(node, out) {
        if (node == null) {
            return;
        }

        this.postOrderRecursive(node.left, out);

        this.postOrderRecursive(node.right, out);

        if (out != null) {
            out.push(node.data);
        } else {
            console.log(node.data);
        }
    }

    inOrderStack(out) {
        const stack = [];

        let current = this.root;

        while (current != null || stack.length !== 0) {
            while (current != null) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();
            out.push(current.data);

            current = current.right;
        }

        return out;
    }

    preOrderStack(out) {
        const stack = [];

        let current = this.root;
        stack.push(current);

        while (current != null || stack.length !== 0) {
            current = stack.pop();

            if (current == null) {
                continue;
            }

            out.push(current.data);

            if (current.right != null) {
                stack.push(current.right);
            }

            if (current.left != null) {
                stack.push(current.left);
            }
        }

        return out;
    }

    postOrderStack(out) {
        const stack = [];

        let current = this.root;
        stack.push(current);

        while (current != null || stack.length !== 0) {
            current = stack.pop();

            if (current == null) {
                continue;
            }

            if (current.left != null) {
                stack.push(current.left);
            }

            if (current.right != null) {
                stack.push(current.right);
            }

            out.push(current.data);
        }

        out = out.reverse();

        return out;
    }

    insert(node) {
        const queue = [];

        let current = this.root;
        queue.push(current);

        if (current == null) {
            this.root = node;
        }

        while (current != null) {
            current = queue.shift();

            if (current.left == null) {
                current.left = node;
                break;
            } else {
                queue.push(current.left);
            }

            if (current.right == null) {
                current.right = node;
                break;
            } else {
                queue.push(current.right);
            }
        }
    }

    delete(nodeData) {
        const queue = [];

        let current = this.root;
        let nodeToDelete = null;

        queue.unshift(current);

        while (queue.length !== 0) {
            current = queue.pop();

            if (current.data == nodeData) {
                nodeToDelete = current;
            }

            if (current.left != null) {
                queue.unshift(current.left);
            }

            if (current.right != null) {
                queue.unshift(current.right);
            }
        }

        if (nodeToDelete != null) {
            nodeToDelete.data = current.data;
            this.removeLeafNode(current);
        }
    }

    removeLeafNode(nodeToDelete) {
        const queue = [];

        let current = this.root;

        queue.unshift(current);

        while (queue.length !== 0) {
            current = queue.pop();

            if (current.left != null && current.left == nodeToDelete) {
                current.left = null;
                break;
            } else if (current.left != null) {
                queue.unshift(current.left);
            }

            if (current.right != null && current.right == nodeToDelete) {
                current.right = null;
                break;
            } else if (current.right != null) {
                queue.unshift(current.right);
            }
        }
    }

    isContinuous(node) {
        if (node == null || (node.left == null && node.right == null)) {
            return true;
        }

        if (node.right == null) {
            return Math.abs(node.data - node.left.data) === 1 && this.isContinuous(node.left);
        }

        if (node.left == null) {
            return Math.abs(node.data - node.right.data) === 1 && this.isContinuous(node.right);
        }

        return Math.abs(node.data - node.left.data) === 1 && this.isContinuous(node.left) && Math.abs(node.data - node.right.data) === 1 && this.isContinuous(node.right);
    }
}

module.exports = BinaryTree;

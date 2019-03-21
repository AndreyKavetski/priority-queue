class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.left == null;
        this.right == null;
    }

    appendChild(node) {
        if (this.left == null) this.left = node;
        else if (this.right == null) this.right = node;
        else this.left.appendChild(node);
    }

    removeChild(node) {

    }

    remove() {

    }

    swapWithParent() {

    }
}

module.exports = Node;
const Node = require('./node');

class MaxHeap {
    constructor() {
        this.root = null;
        this.parentNodes = [];
    }

    push(data, priority) {
        this.insertNode(new Node(data, priority));
        this.shiftNodeUp(new Node(data, priority));
    }

    pop() {

    }

    detachRoot() {

    }

    restoreRootFromLastInsertedNode(detached) {

    }

    size() {

    }

    isEmpty() {

    }

    clear() {

    }

    equal(a, b) {
        if (a.priority > b.priority) return 1;
        else return -1;
    }

    insertNode(node) {
        if (this.root == null) {
            this.root = node;
            this.parentNodes.push(node);
        } else if (this.root.priority > node.priority) {
            this.parentNodes.push(this.root);
            this.parentNodes.sort(this.equal);
            this.root = node;
        } else {
            this.parentNodes.push(node);
            this.parentNodes.sort(this.equal);
            this.root.appendChild(node);
        }
        console.log(this.parentNodes);
    }

    shiftNodeUp(node) {

    }

    shiftNodeDown(node) {

    }
}

module.exports = MaxHeap;
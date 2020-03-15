function BinarySearchTree() {
  function node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  this.root = null;
  BinarySearchTree.prototype.insert = function(key) {
    var newnode = new BinarySearchTree(key);
    if (this.root == null) {
      this.root = newnode;
    } else {
      this.insertNode(this.root, newnode);
    }
  };
}

BinarySearchTree.prototype.insertNode = function(node, newnode) {
  if (newnode.key < node.key) {
    if (node.left == null) {
      node.left = newnode;
    } else {
      this.insertNode(node.left, newnode);
    }
  } else {
    if (node.right == null) {
      node.right = newnode;
    } else {
      this.insertNode(node.right, newnode);
    }
  }
};
//先序遍历
BinarySearchTree.prototype.preOrderTraversal = function(handler) {
  this.preOrderTraversalNode(this.root, handler);
};
BinarySearchTree.prototype.preOrderTraversalNode = function(node, handler) {
  if (node != null) {
    handler(node.key);
    this.preOrderTraversalNode(node.left, handler);
    this.preOrderTraversalNode(node.right, handler);
  }
};
//中序遍历
BinarySearchTree.prototype.midOrderTraversal = function(handler) {
  this.midOrderTraversalNode(this.root, handler);
};
BinarySearchTree.prototype.midOrderTraversalNode = function(node, handler) {
  if (node != null) {
    this.midOrderTraversalNode(node.left, handler);
    handler(node.key);
    this.midOrderTraversalNode(node.right, handler);
  }
};

const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.insert(6);
bst.insert(7);
bst.insert(8);
console.log(bst);

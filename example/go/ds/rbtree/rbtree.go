package rbtree

type Key int
type Color int

const BLACK Color = 1
const RED Color = 2

type Node struct {
	// 颜色
	color Color
	// 左子树
	left *Node
	// 右子树
	right *Node
	// 父亲
	p *Node
	// 关键字
	key Key
}

type RBTree struct {
	root     *Node
	sentinel *Node
}

func New() *RBTree {
	rb := new(RBTree)
	node := new(Node)
	node.color = BLACK
	rb.sentinel = node
	rb.root = rb.sentinel
	return rb
}

// 递归插入
func (rb *RBTree) insert(node *Node, key Key) *Node {
	if node == rb.sentinel {
		n := new(Node)
		n.right = rb.sentinel
		n.left = rb.sentinel
		n.p = node
		n.key = key
		n.color = RED

		if node.color == RED {
			// 需要旋转

		}

		node = n

	} else {
		if node.key < key {
			node.right = rb.insert(node.right, key)
		}
		if node.key > key {
			node.left = rb.insert(node.left, key)
		}
	}

	return node
}

func (rb *RBTree) fixup(node *Node) {

}
func (rb *RBTree) delete(key Key) {

}

// 迭代插入
func (rb *RBTree) insertFor(key Key) {
	z := new(Node)
	z.right = rb.sentinel
	z.left = rb.sentinel
	z.key = key

	x := rb.root
	y := rb.sentinel
	for x != y {
		y = x

		if z.key < x.key {
			x = x.left
		} else {
			x = x.right
		}
	}

	z.p = y

	if y == rb.sentinel {
		rb.root = z
	} else if z.key < y.key {
		y.left = z
	} else {
		y.right = z
	}

	z.color = "r"
}

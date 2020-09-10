package binary

import (
	"fmt"
	queue2 "itiswho.com/example/ds/queue"
	"itiswho.com/example/ds/stack"
)

type node struct {
	data  interface{}
	left  *node
	right *node
}

type Tree struct {
	root *node
}

type Comparable interface {
}

// 插入
func (t *Tree) Insert(root *node, data interface{}) *node {
	newNode := new(node)
	newNode.data = data
	if root == nil {
		root = newNode
	} else {
		if root.data.(int) > data.(int) {
			root.left = t.Insert(root.left, data)
		} else if root.data.(int) < data.(int) {
			root.right = t.Insert(root.right, data)
		}
	}

	return root
}

// 先序遍历
func (t *Tree) PreOrderTraversal(root *node) {
	if root == nil {
		panic("tree is empty")
	}

	fmt.Println(root.data)

	if root.left != nil {
		t.PreOrderTraversal(root.left)
	}
	if root.right != nil {
		t.PreOrderTraversal(root.right)
	}
}

// 中序遍历
func (t *Tree) InOrderTraversal(root *node) {
	if root == nil {
		panic("tree is empty")
	}

	if root.left != nil {
		t.InOrderTraversal(root.left)
	}
	fmt.Println(root.data)
	if root.right != nil {
		t.InOrderTraversal(root.right)
	}
}

// 后序遍历
func (t *Tree) PostOrderTraversal(root *node) {
	if root == nil {
		panic("tree is empty")
	}

	if root.left != nil {
		t.PostOrderTraversal(root.left)
	}
	if root.right != nil {
		t.PostOrderTraversal(root.right)
	}

	fmt.Println(root.data)
}

// 层次遍历(广度优先遍历)，队列实现
func (t *Tree) LayerTraversal(root *node) {
	if root == nil {
		panic("tree is empty")
	}

	queue := queue2.New()
	queue.Enqueue(root)

	for !queue.IsEmpty() {
		root := queue.Dequeue().(*node)

		fmt.Println(root.data)

		if root.left != nil {
			queue.Enqueue(root.left)
		}
		if root.right != nil {
			queue.Enqueue(root.right)
		}
	}
}

/**
深度优先遍历（先序遍历，后序遍历，中序遍历 分为递归实现和栈实现）
*/
func (t *Tree) DepthTraversal(root *node) {
	if root == nil {
		panic("tree is empty")
	}

	s := stack.New()
	top := root
	s.Push(top)

	for !s.IsEmpty() {
		// 根节点出栈
		top := s.Pop().(*node)
		fmt.Println(top.data)
		// 右子树入栈
		if top.right != nil {
			s.Push(top.right)
		}
		// 左子树入栈
		if top.left != nil {
			s.Push(top.left)
		}
	}
}

func New() *Tree {
	t := new(Tree)

	return t
}

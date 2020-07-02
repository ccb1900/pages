package binary

import (
	"fmt"
	"itiswho.com/example/utils"
	"testing"
)

func TestTree(t *testing.T) {
	tree :=New()
	s := make([]int,0)
	for i :=0;i<10;i++ {
		a := utils.Rand(0,100)
		s = append(s,a)
		tree.root = tree.Insert(tree.root,a)
	}

	fmt.Println("先序遍历",s)

	tree.PreOrderTraversal(tree.root)

	fmt.Println("后序遍历",s)
	tree.PostOrderTraversal(tree.root)

	fmt.Println("中序遍历",s)
	tree.InOrderTraversal(tree.root)

	fmt.Println("层次遍历",s)
	tree.LayerTraversal(tree.root)

	fmt.Println("栈实现遍历",s)
	tree.DepthTraversal(tree.root)
}
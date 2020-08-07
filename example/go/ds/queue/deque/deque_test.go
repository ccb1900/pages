package deque

import (
	"fmt"
	"itiswho.com/example/utils"
	"testing"
)

func TestDeque(t *testing.T) {
	d := New()
	for i := 0; i < 3; i++ {
		d.AddFirst(utils.Rand(0, 99))
	}
	for i := 0; i < 3; i++ {
		d.AddLast(utils.Rand(0, 99))
	}

	d.FirstTraversal()
	d.RemoveFirst()
	d.RemoveLast()
	d.RemoveLast()
	d.RemoveLast()
	d.RemoveLast()
	d.RemoveLast()
	fmt.Println("------")
	d.LastTraversal()
}

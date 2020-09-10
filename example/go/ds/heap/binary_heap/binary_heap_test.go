package binary_heap

import (
	"fmt"
	"itiswho.com/example/ds"
	"testing"
)

func TestInsert(t *testing.T) {
	a := []ds.Element{13, 21, 16, 24, 31, 19, 68, 65, 26, 32}
	bh := New()

	for i := 0; i < len(a); i++ {
		bh.Insert(a[i])
	}
	bh.DeleteMin()
	fmt.Println(bh)
}

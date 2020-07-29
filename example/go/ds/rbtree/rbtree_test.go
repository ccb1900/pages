package rbtree

import (
	"fmt"
	"itiswho.com/example/utils"
	"testing"
)

func TestNew(t *testing.T) {
	rb := New()

	for i := 0; i < 10; i++ {
		rb.insertFor(Key(utils.Rand(0, 100)))
	}

	fmt.Println(rb)
}
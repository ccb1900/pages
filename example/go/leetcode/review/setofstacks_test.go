package review

import "testing"

func TestConstructor(t *testing.T) {
	s := Constructor(1)

	s.Push(10)
	s.Push(20)

	s.Pop()
	s.Pop()
}

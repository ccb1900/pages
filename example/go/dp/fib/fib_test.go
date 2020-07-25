package fib

import "testing"

func TestHandle(t *testing.T) {
	t.Log(New().handle(2))
}

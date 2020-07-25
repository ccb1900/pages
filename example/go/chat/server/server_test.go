package server

import "testing"

func TestServer(t *testing.T) {
	s := New()
	s.Run()
}

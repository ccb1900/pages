package bfs

import (
	"itiswho.com/example/ds/graph/graph"
	"testing"
)

func TestBfs(t *testing.T)  {
	bfs := New()
	bfs.Bfs(graph.TestGraph())
}
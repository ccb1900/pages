package bfs

import (
	"itiswho.com/example/ds/graph/graph"
	"testing"
)

func TestBfs(t *testing.T)  {
	bfs := New()

	// 连通图
	bfs.Bfs(graph.TestGraph())

	// 非连通图
	bfs.Bfs(graph.TestNotConnectedGraph())
}
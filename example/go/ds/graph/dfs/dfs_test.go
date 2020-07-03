package dfs

import (
	"itiswho.com/example/ds/graph/graph"
	"testing"
)

func TestDfs(t *testing.T) {
	dfs := New()
	// 连通图
	dfs.Dfs(graph.TestGraph())

	// 非连通图
	dfs.Dfs(graph.TestNotConnectedGraph())
}

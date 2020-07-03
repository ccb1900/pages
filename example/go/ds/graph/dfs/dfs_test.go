package dfs

import (
	"itiswho.com/example/ds/graph/graph"
	"testing"
)

func TestDfs(t *testing.T) {
	dfs := New()
	dfs.Dfs(graph.TestGraph())
}

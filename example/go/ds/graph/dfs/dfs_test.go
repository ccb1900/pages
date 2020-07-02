package dfs

import (
	"itiswho.com/example/ds/graph/graph"
	"testing"
)

func TestDfs(t *testing.T) {
	g := graph.TestGraph()
	dfs := New()
	dfs.Dfs(g)
}

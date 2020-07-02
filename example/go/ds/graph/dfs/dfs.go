package dfs

import (
	"fmt"
	graph2 "itiswho.com/example/ds/graph/graph"
)

type Dfs struct {
	visited []bool
}

// 深度优先遍历
func (d *Dfs) Dfs (g *graph2.Graph)  {
	d.visited = make([]bool,g.V())
	d.visit(g,0)
}

func (d *Dfs) visit (g *graph2.Graph,index int)  {
	if !d.visited[index] {
		d.visited[index] = true
		adjList := g.AdjList()
		fmt.Println(adjList[index].Data())
		for i := 0;i< len(adjList[index].Edges());i++ {
			d.visit(g,adjList[index].Edges()[i].Data())
		}
	}
}

func New() *Dfs  {
	dfs := new(Dfs)
	return dfs
}

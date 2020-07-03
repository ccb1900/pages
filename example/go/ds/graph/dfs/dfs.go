package dfs

import (
	"fmt"
	"itiswho.com/example/ds/graph/igraph"
)

type Dfs struct {
	visited []bool
}

// 深度优先遍历
func (d *Dfs) Dfs (g igraph.IGraph)  {
	d.visited = make([]bool,g.V())
	d.visit(g,0)
}

func (d *Dfs) visit (g igraph.IGraph,index int)  {
	if !d.visited[index] {
		d.visited[index] = true
		vnode := g.GetAdjList(index)
		fmt.Println(vnode.Index(),"@",vnode.Data())
		for i := 0;i< vnode.Edges().Size();i++ {
			d.visit(g,vnode.Edges().Get(i).(igraph.IENode).VIndex())
		}
	}
}

func New() *Dfs  {
	dfs := new(Dfs)
	return dfs
}

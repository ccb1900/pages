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
	// 连通图这里就遍历结束了
	d.visit(g,0)
	// 查找是否有未访问的节点，非连通图需要进行下面的步骤
	for j :=0; j< len(d.visited);j++ {
		if !d.visited[j] {
			d.visit(g,j)
		}
	}
}

// 访问节点
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

package bfs

import (
	"fmt"
	"itiswho.com/example/ds/graph/igraph"
	"itiswho.com/example/ds/queue"
)

type Bfs struct {
	visited []bool
}

func (bfs *Bfs) Bfs (g igraph.IGraph)  {
	bfs.visited = make([]bool,g.V())

	q := queue.New()
	q.Enqueue(g.GetAdjList(0))
	bfs.visited[0] = true
	for !q.IsEmpty() {
		node:= q.Dequeue().(igraph.IVNode)
		fmt.Println(node.Index(),"@",node.Data())

		for i := 0;i< node.Edges().Size();i++ {
			next := node.Edges().Get(i).(igraph.IENode).VIndex()
			if !bfs.visited[next] {
				q.Enqueue(g.GetAdjList(next))
				bfs.visited[next] = true
			}
		}
	}
}

func New() * Bfs {
	bfs := new(Bfs)

	return bfs
}
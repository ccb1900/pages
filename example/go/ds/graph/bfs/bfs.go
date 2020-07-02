package bfs

import (
	"fmt"
	"itiswho.com/example/ds/graph/graph"
	"itiswho.com/example/ds/queue"
)

type Bfs struct {
	visited []bool
}

func (bfs *Bfs) Bfs (g *graph.Graph)  {
	bfs.visited = make([]bool,g.V())

	q := queue.New()
	q.Enqueue(g.AdjList()[0])
	bfs.visited[0] = true
	for !q.IsEmpty() {
		node:= q.Dequeue().(*graph.VNode)
		fmt.Println(node.Data())

		for i := 0;i< len(node.Edges());i++ {
			next := node.Edges()[i].Data()
			if !bfs.visited[next] {
				q.Enqueue(g.AdjList()[next])
				bfs.visited[next] = true
			}
		}
	}
}

func New() * Bfs {
	bfs := new(Bfs)

	return bfs
}
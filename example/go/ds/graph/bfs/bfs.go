package bfs

import (
	"fmt"
	"itiswho.com/example/ds/graph/igraph"
	"itiswho.com/example/ds/queue"
)

type Bfs struct {
	visited []bool
}

func (bfs *Bfs) Bfs(g igraph.IGraph) {
	bfs.visited = make([]bool, g.V())

	q := queue.New()
	bfs.visit(g, 0, q)

	// 查找是否有未访问的节点，非连通图需要进行下面的步骤
	for j := 0; j < len(bfs.visited); j++ {
		if !bfs.visited[j] {
			bfs.visit(g, j, q)
		}
	}
}

func (bfs *Bfs) visit(g igraph.IGraph, index int, q *queue.Queue) {
	q.Enqueue(g.GetAdjList(index))
	bfs.visited[index] = true
	for !q.IsEmpty() {
		node := q.Dequeue().(igraph.IVNode)
		fmt.Println(node.Index(), "@", node.Data())

		for i := 0; i < node.Edges().Size(); i++ {
			next := node.Edges().Get(i).(igraph.IENode).VIndex()
			if !bfs.visited[next] {
				q.Enqueue(g.GetAdjList(next))
				bfs.visited[next] = true
			}
		}
	}
}

func New() *Bfs {
	bfs := new(Bfs)

	return bfs
}

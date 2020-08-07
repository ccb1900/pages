package graph

import (
	"fmt"
	"itiswho.com/example/ds/graph/igraph"
	"itiswho.com/example/utils"
)

// 图数据结构
type Graph struct {
	e       int          // 边数
	v       int          // 顶点数
	adjList igraph.IList //顶点表
}

// 根据索引获取顶点
func (g *Graph) GetAdjList(index int) igraph.IVNode {
	return g.adjList.Get(index).(igraph.IVNode)
}

// 获取边数
func (g *Graph) E() int {
	return g.e
}

// 获取顶点数
func (g *Graph) V() int {
	return g.v
}

// 增加节点
func (g *Graph) AddVertex(v igraph.IVNode) {
	g.v++
	g.adjList.Add(v)
}

// 增加边
func (g *Graph) AddEdge(u int, v int) {
	g.e++
	newENode := new(ENode)
	newENode.index = v
	g.GetAdjList(u).AddEdges(newENode)

}

// 图初始化
func New() igraph.IGraph {
	g := new(Graph)
	g.adjList = IIList()
	return g
}

// 测试-非连通图
func TestNotConnectedGraph() igraph.IGraph {
	g := New()
	for j := 0; j < 14; j++ {
		fmt.Println(j, utils.ToChar(65+j))
		g.AddVertex(IVNode(j, utils.ToChar(65+j)))
	}
	g.AddEdge(0, 1)
	g.AddEdge(0, 2)
	g.AddEdge(0, 3)
	g.AddEdge(1, 4)
	g.AddEdge(1, 5)
	g.AddEdge(2, 7)
	g.AddEdge(3, 8)
	g.AddEdge(3, 9)
	g.AddEdge(4, 10)
	g.AddEdge(7, 6)
	g.AddEdge(9, 11)

	return g
}

// 测试-连通图
func TestGraph() igraph.IGraph {
	g := New()
	for j := 0; j < 16; j++ {
		g.AddVertex(IVNode(j, utils.Rand(0, 100)))
	}
	for i := 1; i <= 16; i++ {
		if i-1 > 0 {
			g.AddEdge(i-1, i-2)
			if i+3 <= 16 {
				g.AddEdge(i-1, i+2)
			}
			if i-5 > 0 {
				g.AddEdge(i-1, i-5-1)
			}
		}

		if i%4 > 0 {
			g.AddEdge(i-1, i+1-1)
			if i+5 <= 16 {
				g.AddEdge(i-1, i+5-1)
			}
			if i-3 > 0 {
				g.AddEdge(i-1, i-3-1)
			}
		}

		if i+4 <= 16 {
			g.AddEdge(i-1, i+4-1)
		}

		if i-4 > 0 {
			g.AddEdge(i-1, i-4-1)
		}
	}

	return g
}

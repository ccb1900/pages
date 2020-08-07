package graph

import "itiswho.com/example/ds/graph/igraph"

// 顶点节点
type VNode struct {
	data  interface{}  // 顶点数据
	index int          // 顶点索引
	edges igraph.IList // 边表
}

func (v *VNode) Index() int {
	return v.index
}

func (v *VNode) SetIndex(index int) {
	v.index = index
}

func (v *VNode) AddEdges(edge igraph.IENode) {
	v.Edges().Add(edge)
}

// 获取顶点携带的数据
func (v *VNode) Data() interface{} {
	return v.data
}

// 获取顶点的所有边
func (v *VNode) Edges() igraph.IList {
	return v.edges
}

func IVNode(index int, data interface{}) igraph.IVNode {
	newNode := new(VNode)
	newNode.edges = IIList()
	newNode.data = data
	newNode.index = index

	return newNode
}

package graph

// 边节点记录索引，也可以记录边的权重等一些必要信息
type ENode struct {
	index int
	weight int
}

func (e *ENode) Weight() int {
	return e.weight
}

// 获取边的另一个顶点的索引
func (e *ENode) VIndex() int {
	return e.index
}

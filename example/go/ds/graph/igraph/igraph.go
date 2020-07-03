package igraph

// 图接口
type IGraph interface {
	// 获取顶点表
	GetAdjList(index int) IVNode
	// 增加顶点
	AddVertex(v IVNode)
	// 增加边
	AddEdge(u int,v int)
	// 获取顶点数量
	V()  int
	// 获取边的数量
	E() int
}

// 顶点接口
type IVNode interface {
	// 获取顶点数据
	Data() interface{}
	// 获取顶点连接的边
	Edges() IList
	// 获取顶点的索引
	Index() int
	// 设置顶点的索引
	SetIndex(index int)
	// 连接两个顶点，也就是是在顶点的边表增加一个边
	AddEdges(enode IENode)
}

// 边接口
type IENode interface {
	// 获取顶点索引
	VIndex() int
	// 可以增加边的一些属性接口
}

// 集合接口
type IList interface {
	// 根据索引获取元素
	Get(index int) interface{}
	// 增加元素
	Add(node interface{})
	// 集合大小
	Size() int
}

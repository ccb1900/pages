package graph

// 顶点节点
type VNode struct {
	data interface{}
	edges []*Enode // 边表
}

func (v *VNode) Data() interface{} {
	return v.data
}

func (v *VNode) Edges() []*Enode {
	return v.edges
}

// 边节点记录索引
type Enode struct {
	index int
}

func (e *Enode) Data() int {
	return e.index
}
type Graph struct {
	e       int      // 边数
	v       int      // 顶点数
	adjList []*VNode //邻接表
}

func (g *Graph) V() int {
	return g.v
}

func (g *Graph) AdjList() []*VNode {
	return g.adjList
}

// 增加节点
func (g *Graph) AddVertex(v interface{})  {
	g.v++
	newNode := new(VNode)
	newNode.edges = make([]*Enode,0)
	newNode.data = v

	g.adjList = append(g.adjList,newNode)
}

// 增加边
func (g *Graph) AddEdge(u int,v int)  {
	g.e++
	newENode := new(Enode)
	newENode.index = v-1

	g.adjList[u-1].edges = append(g.adjList[u-1].edges, newENode)

}

func New() *Graph {
	g := new(Graph)
	g.adjList = make([]*VNode,0)
	return g
}

func TestGraph() *Graph  {
	g := New()
	for j :=1;j<=16;j++ {
		g.AddVertex(j)
	}
	for i :=1;i<=16;i++ {
		if i-1 > 0 {
			g.AddEdge(i,i-1)
			if i+3 <= 16 {
				g.AddEdge(i,i+3)
			}
			if i-5 > 0 {
				g.AddEdge(i,i-5)
			}
		}

		if i%4 > 0 {
			g.AddEdge(i,i+1)
			if i+5 <= 16 {
				g.AddEdge(i,i+5)
			}
			if i-3 > 0 {
				g.AddEdge(i,i-3)
			}
		}

		if i+4 <= 16 {
			g.AddEdge(i,i+4)
		}

		if i-4 > 0 {
			g.AddEdge(i,i-4)
		}
	}

	return g
}

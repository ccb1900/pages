package graph

import "itiswho.com/example/ds/graph/igraph"

// 集合slice实现
type List struct {
	list []interface{}
}

// 获取元素
func (el *List)Get(index int) interface{}  {
	return el.list[index]
}

// 增加元素
func (el *List)Add(node interface{})  {
	el.list = append(el.list, node)
}

// 集合大小
func (el *List)Size() int  {
	return len(el.list)
}

// 初始化
func IIList() igraph.IList  {
	l:=new(List)
	l.list = make([]interface{},0)
	return new(List)
}


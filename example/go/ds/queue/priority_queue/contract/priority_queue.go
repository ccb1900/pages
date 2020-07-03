package contract

type IPriorityQueue interface {
	Insert(data interface{})
	// 找出、返回并删除优先队列中最小的元素
	deleteMin() interface{}
}

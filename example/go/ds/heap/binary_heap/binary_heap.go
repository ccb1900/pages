package binary_heap

import (
	"itiswho.com/example/ds"
	"itiswho.com/example/ds/heap"
)

type BinaryHeap struct {
	data []ds.Element
}

func (heap *BinaryHeap) Insert(data ds.Element) {
	// 先插入到队尾
	heap.data = append(heap.data, data)

	// 新的索引位置
	newIndex := len(heap.data) - 1

	// 此处的比较可以决定是最大堆还是最小堆
	for ; newIndex > 1 && data.CompareTo(heap.data[(newIndex-1)/2]) > 0; newIndex = (newIndex - 1) / 2 {
		// 新节点大于父元素
		// 父元素降级到新节点的位置
		heap.data[newIndex] = heap.data[(newIndex-1)/2]
	}

	heap.data[newIndex] = data
}

// @todo 未完成
func (heap *BinaryHeap) DeleteMin() ds.Element {
	// 返回第一个元素(也就是根节点)
	root := heap.data[0]
	index := 0
	for {

		if heap.data[index*2+1] < heap.data[2*index+2] {
			heap.data[index] = heap.data[index*2+1]
			index = index*2 + 1
		} else {
			heap.data[index] = heap.data[index*2+2]
			index = index*2 + 2
		}
	}

	return root
}

func New() heap.Heap {
	h := new(BinaryHeap)
	h.data = make([]ds.Element, 0)
	return h
}

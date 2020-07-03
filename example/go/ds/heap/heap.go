package heap

import "itiswho.com/example/ds"

type Heap interface {
	Insert(e ds.Element)
	DeleteMin() ds.Element
}
